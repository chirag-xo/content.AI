"use client";

import { Button } from "@/components/ui/button";
import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { Loader2Icon } from "lucide-react";
import { db } from "@/utils/db";
import { eq } from "drizzle-orm";
import { UserSubscription } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import moment from "moment";

import { UserSubscriptionContext } from "@/app/(context)/UserSubscriptionContext";

declare global {
  interface Window {
    Razorpay: any;
  }
}

const Billing = () => {
  const [loading, setLoading] = useState(false);
  const { user } = useUser();
  const { userSubscription, setUserSubscription } = useContext(UserSubscriptionContext);

  const loadScript = (src: string) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const CreateSubscription = () => {
    setLoading(true);
    axios.post("/api/create-subscription", {}).then(
      (resp) => {
        OnPayment(resp.data.id);
      },
      (error) => {
        console.error("Failed to create subscription", error);
        setLoading(false);
      }
    );
  };

  const OnPayment = async (subId: string) => {
    const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

    if (!res) {
      alert("Razorpay SDK failed to load.");
      setLoading(false);
      return;
    }

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      subscription_id: subId,
      name: "Content.AI",
      description: "Monthly/Yearly Subscription",
      
      handler: async (resp: any) => {
      
        if (resp) {
          await SaveSubcription(resp?.razorpay_payment_id);
        }
        setLoading(false);
      },
   };

   
   
    try{
     
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
      paymentId,
      joinDate: moment().format("DD/MM/yyyy"),
    });
    console.log("Subscription saved:", result);
    if (result) {
      window.location.reload();
    }
  };


  const IsUserScubscribed = async () => {
    try {
      const result = await db
        .select()
        .from(UserSubscription)
        .where(eq(UserSubscription.email, user?.primaryEmailAddress?.emailAddress || ""));
      if (result.length > 0) {
        setUserSubscription(true);
      }
    } catch (e) {
      console.log("Error in checking subscription", e);
    }
  };

  useEffect(() => {
    if (user) IsUserScubscribed();
  }, [user]);

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <h2 className="text-center font-bold text-3xl my-3">
        Upgrade With Monthly Plan
      </h2>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-center md:gap-8">
        {/* Free Plan */}
        <div className="rounded-2xl bg-white border border-gray-200 p-6 shadow-sm sm:px-8 lg:p-12">
          <div className="text-center">
            <h2 className="text-lg font-medium text-gray-900">Free</h2>
            <p className="mt-2 sm:mt-4">
              <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">₹0</strong>
              <span className="text-m font-medium text-gray-700">/month</span>
            </p>
          </div>

          <ul className="mt-6 space-y-2">
            {["10,000 Words/Month", "50+ Content Templates", "Unlimted Download & Copy", "1 Month of History"].map((feature, idx) => (
              <li key={idx} className="flex items-center gap-1">
                <CheckIcon />
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>

          <span className="mt-8 block rounded-full px-12 py-3 text-center text-sm font-medium bg-gray-500 text-white">
            Currently Active Plan
          </span>
        </div>

        {/* Paid Plan */}
        <div className="rounded-2xl bg-white border border-gray-200 p-6 shadow-sm sm:px-8 lg:p-12">
          <div className="text-center">
            <h2 className="text-lg font-medium text-gray-900">Monthly</h2>
            <p className="mt-2 sm:mt-4">
              <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">₹199</strong>
              <span className="text-m font-medium text-gray-700">/month</span>
            </p>
          </div>

          <ul className="mt-6 space-y-2">
            {["1,00,000 Words/Month", "50+ Template Access", "Unlimited Download & Copy", "1 Year of History"].map((feature, idx) => (
              <li key={idx} className="flex items-center gap-1">
                <CheckIcon />
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>

          <button
            disabled={userSubscription}
            onClick={CreateSubscription}
            className="w-full rounded-full mt-5 p-5 gap-2 items-center flex justify-center border-2 border-[#704ef8] text-[#704ef8] bg-white transition duration-300 hover:bg-[#704ef8] hover:text-white"
          >
            {loading && <Loader2Icon className="animate-spin" />}
            {userSubscription ? "Active Plan" : "Get Started"}
          </button>
        </div>
      </div>
    </div>
  );
};

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="size-5 text-indigo-700"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
);

export default Billing;
