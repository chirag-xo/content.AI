"use client"
import React, { useState } from 'react';
import SideNav from './_components/sidenav';
import Header from './_components/header';
import { TotalUsageContext } from '../(context)/TotalUsageContext';
import { UpdateCreditUsageContext } from '../(context)/UpadteCreditUsageContext';
import { UserSubscriptionContext } from '../(context)/UserSubscriptionContext';

function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {

    const [totalUsage,setTotalUsage]=useState<number>(0);
    const [UpadteCreditUsageContext,setUpdateCreditUsageContext]=useState<any>(null);
    const [userSubscription,setUserSubscription]=useState<boolean>(false);

  return (
    <TotalUsageContext.Provider value={{totalUsage,setTotalUsage}}>
    <UpdateCreditUsageContext.Provider value={{UpadteCreditUsageContext,setUpdateCreditUsageContext}}>
    {/* @ts-ignore */}

      <UserSubscriptionContext.Provider value={{userSubscription,setUserSubscription}}>
    
    <div className='bg bg-slate-100'>
      <div className='md:w-64 hidden md:block fixed'>
        <SideNav />
      </div>
      <div className='md:ml-64'>
          <Header />
        {children}
      </div>
    </div>
    </UserSubscriptionContext.Provider>
    </UpdateCreditUsageContext.Provider>
    </TotalUsageContext.Provider>
    
  )
}

export default Layout;