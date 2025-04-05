"use client";

import { UserButton } from "@clerk/nextjs";
import { ChevronRight } from "lucide-react";
import moment from "moment";
import React, { useContext, useEffect, useState } from "react";
import { UserSubscription } from "@/utils/schema";
import { UserSubscriptionContext } from "@/app/(context)/UserSubscriptionContext";
import { eq } from "drizzle-orm";
import axio from "axios";
import { db } from "@/utils/db";
import { useUser } from "@clerk/nextjs";

function Header() {
  const [loading, setLoading] = useState(false);
  const { user } = useUser();
  const { userSubscription, setUserSubscription } = useContext(UserSubscriptionContext);

  // 🔁 Motivational Quotes
  const motivationalQuotes = [
    "🚀 Start your day with purpose!",
    "💡 Stay curious, keep learning.",
    "🔥 Consistency beats motivation.",
    "🎯 Focus on progress, not perfection.",
    "🌱 Small steps lead to big changes.",
    "📈 Success is built on daily habits.",
  ];
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prevIndex) => (prevIndex + 1) % motivationalQuotes.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (user) {
      IsUserSubscribed();
    }
  }, [user]);

  const IsUserSubscribed = async () => {
    try {
      const result = await db
        .select()
        .from(UserSubscription)
        .where(eq(UserSubscription.email, user?.primaryEmailAddress?.emailAddress || ""));
      if (result.length > 0) {
        setUserSubscription(true);
      }
    } catch (e) {
      console.log("Error in subscription", e);
    }
  };

  const loadScript = (src: string) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const CreateSubscription = async () => {
    setLoading(true);
    const res = await axio.post("/api/create-subscription", {});
    const isLoaded = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

    if (!isLoaded) {
      alert("Razorpay SDK failed to load. Are you online?");
      setLoading(false);
      return;
    }

    OnPayment(res.data.id);
  };

  const OnPayment = (subId: string) => {
    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "",
      subscription_id: subId,
      name: "Content.AI",
      description: "Monthly/Yearly Subscription",
      handler: async (resp: any) => {
        if (resp?.razorpay_payment_id) {
          await SaveSubscription(resp.razorpay_payment_id);
        }
        setLoading(false);
      },
    };

    if (typeof window !== "undefined" && (window as any).Razorpay) {
      const rzp = new (window as any).Razorpay(options);
      rzp.open();
    } else {
      console.log("Razorpay not loaded.");
      setLoading(false);
    }
  };

  const SaveSubscription = async (paymentId: string) => {
    const result = await db.insert(UserSubscription).values({
      email: user?.primaryEmailAddress?.emailAddress,
      username: user?.fullName,
      active: true,
      paymentId,
      joinDate: moment().format("DD/MM/yyyy"),
    });
    if (result) {
      window.location.reload();
    }
  };

  return (
    <div className="p-4 shadow-sm border-b-2 flex flex-wrap gap-3 justify-between items-center bg-white dark:bg-slate-900">
      {/* 🧠 Motivation Ticker */}
      <div className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-md whitespace-nowrap">
        <ChevronRight className="w-4 h-4 animate-pulse" />
        <span className="transition-opacity duration-500 ease-in-out">
          {motivationalQuotes[quoteIndex]}
        </span>
      </div>

      {/* 👤 Profile + Subscribe */}
      <div className="flex gap-3 items-center justify-end w-full sm:w-auto">
        {!userSubscription && (
          <button
            onClick={CreateSubscription}
            className="bg-primary text-white text-[12px] sm:text-xs px-3 py-1 rounded-full hover:bg-primary/90 whitespace-nowrap"
          >
            🔥 <span className="hidden sm:inline">Join Membership just for</span> ₹199/mo
          </button>
        )}
        <UserButton />
      </div>
    </div>
  );
}

export default Header;
