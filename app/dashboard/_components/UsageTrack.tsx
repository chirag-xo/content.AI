"use client";
import { Button } from "@/components/ui/button";
import { db } from "@/utils/db";
import { eq } from "drizzle-orm";
import { AIOutput } from "@/utils/schema";
import {UserSubscription} from "@/utils/schema"
import { useUser } from "@clerk/nextjs";
import React, { useContext, useEffect, useState } from "react";
import { HISTORY } from "@/app/dashboard/history/page";
import { TotalUsageContext } from "@/app/(context)/TotalUsageContext";
import { UpdateCreditUsageContext } from "@/app/(context)/UpadteCreditUsageContext";
import { UserSubscriptionContext } from "@/app/(context)/UserSubscriptionContext";
import axio from "axios";
import moment from "moment";

function UsageTrack() {
  const { user } = useUser();
  const { totalUsage, setTotalUsage } = useContext(TotalUsageContext);
  const [maxWords, setMaxWords] = useState(10000);
  const { UpadteCreditUsageContext, setUpdateCreditUsageContext } = useContext(
    UpdateCreditUsageContext
  );
  const { userSubscription, setUserSubscription } = useContext(
    UserSubscriptionContext
  );

  const [loading, setLoading] = useState(false);
  // const { user } = useUser();
  // const {userSubscription,setUserSubscription}=useContext(UserSubscriptionContext);

  const CreateSubscription = () => {
    setLoading(true);
    axio.post("/api/create-subscription", {}).then(
      (resp) => {
        console.log(resp.data);
        OnPayment(resp.data.id);
      },
      (error) => {
        setLoading(false);
      }
    );
  };
  const OnPayment = (subId: string) => {
    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      subscription_id: subId,
      name: "Content.AI",
      description: "Monthly/Yearly Subscription",
      handler: async (resp: any) => {
        console.log(resp);
        if (resp) {
          SaveSubcription(resp?.razorpay_payment_id);
        }
        setLoading(false);
      },
    };

    try {
      // @ts-ignore
      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (e) {
      console.log("Try Again...", e);
      setLoading(false);
    }
  };

  const SaveSubcription = async (paymentId: string) => {
    const result = await db.insert(UserSubscription).values({
      email: user?.primaryEmailAddress?.emailAddress || null,
      username: user?.fullName,
      active: true,
      paymentId: paymentId,
      joinDate: moment().format("DD/MM/yyyy"),
    });
    console.log(result);
    if (result) {
      window.location.reload();
    }
  };

  useEffect(() => {
    user && GetData();
    user && IsUserScubscribed();
  }, [user]);

  useEffect(() => {
    user && GetData();
  }, [UpadteCreditUsageContext && user]);

  const GetData = async () => {
    
      /* @ts-ignore */
    const result: HISTORY[] = await db
      .select()
      .from(AIOutput)
      .where(
        eq(AIOutput.createdBy, user?.primaryEmailAddress?.emailAddress || "")
      );

    GetTotalUsage(result);
  };
  const IsUserScubscribed = async () => {
    try{
    const result = await db 
  .select()
  .from(UserSubscription) // Ensure correct casing
  .where(
    eq(
        UserSubscription.email,
      user?.primaryEmailAddress?.emailAddress || ""
    )
  );
  if (result.length > 0) {
    setUserSubscription(true);
    setMaxWords(100000);
  }
}
  catch(e){
    console.log("Error in IsUserSubscribed",e);
  }

    // if (result) {
    //   setUserSubscription(true);
    //   setMaxWords(100000);
    // }
  };

  const GetTotalUsage = (result: HISTORY[]) => {
    let total: number = 0;
    result.forEach((element) => {
      total += Number(element.aiResponse?.length);
    });
    setTotalUsage(total);
    console.log(total);
  };
  return (
    <div className="m-5">
      <div className="bg-primary text-white p-3 rounded-lg">
        <h2 className="font-medium">Credit Usage</h2>
        <div className="h-2 bg-[#9981f9] w-full rounded-lg mt-3">
          <div
            className="h-2 bg-white rounded-full"
            style={{
            width: (!userSubscription ? Math.min( ((totalUsage / maxWords) * 100),100) : (totalUsage / maxWords) * 100 ) + "%",
            }}
          ></div>
        </div>
        <h2 className="text-xs my-2">
          {totalUsage}/{maxWords}credits used{" "}
        </h2>
      </div>
      {!userSubscription ? <Button
        onClick={() => CreateSubscription()}
        className="w-full rounded-full mt-5 p-5 gap-2 items-center flex justify-center border-2 border-[#704ef8] text-[#704ef8] bg-white transition duration-300 hover:bg-[#704ef8] hover:text-white"
      >
        Upgrade Plan
      </Button>:
      <div></div>
      }
    </div>
  );
}

export default UsageTrack;
