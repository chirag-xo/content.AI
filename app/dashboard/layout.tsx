"use client";
import React, { useState } from "react";
import SideNav from "./_components/sidenav";
import Header from "./_components/header";
import { TotalUsageContext } from "../(context)/TotalUsageContext";
import { UpdateCreditUsageContext } from "../(context)/UpadteCreditUsageContext";
import { UserSubscriptionContext } from "../(context)/UserSubscriptionContext";
import { Menu } from "lucide-react";


function Layout({ children }: { children: React.ReactNode }) {
  const [totalUsage, setTotalUsage] = useState<number>(0);
  const [UpadteCreditUsageContext, setUpdateCreditUsageContext] =
    useState<any>(null);
  const [userSubscription, setUserSubscription] = useState<boolean>(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <TotalUsageContext.Provider value={{ totalUsage, setTotalUsage }}>
      <UpdateCreditUsageContext.Provider
        value={{ UpadteCreditUsageContext, setUpdateCreditUsageContext }}
      >
        <UserSubscriptionContext.Provider
          value={{ userSubscription, setUserSubscription }}
        >
          <div className="bg-slate-100 min-h-screen">
            {/* Mobile Header */}
            <div className="md:hidden flex items-center justify-between p-4 bg-white shadow">
              <button onClick={() => setIsSidebarOpen(true)}>
                <Menu className="h-6 w-6 text-gray-700" />
              </button>
              <h1 className="text-lg font-semibold">Content.AI</h1>
            </div>

            {/* Sidebar for Desktop */}
            <div className="hidden md:block fixed w-64 h-full bg-white shadow-lg">
              <SideNav />
            </div>

            {/* Sidebar Overlay for Mobile */}
            {isSidebarOpen && (
              <>
                <div
                  className="fixed inset-0 z-40 bg-black bg-opacity-50"
                  onClick={() => setIsSidebarOpen(false)}
                />
                <div className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 md:hidden">
                  <SideNav onLinkClick={() => setIsSidebarOpen(false)} />
                </div>
              </>
            )}

            {/* Main content */}
            <div className="md:ml-64">
              <Header />
              <main className="p-4">{children}</main>
            </div>
          </div>
        </UserSubscriptionContext.Provider>
      </UpdateCreditUsageContext.Provider>
    </TotalUsageContext.Provider>
  );
}

export default Layout;