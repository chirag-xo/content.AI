"use client"
import React, { useState } from 'react';
import SideNav from './_components/sidenav';
import Header from './_components/header';
import { TotalUsageContext } from '../(context)/TotalUsageContext';
import { UpdateCreditUsageContext } from '../(context)/UpadteCreditUsageContext';

function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {

    const [totalUsage,setTotalUsage]=useState<number>(0);
    const [UpadteCreditUsageContext,setUpdateCreditUsageContext]=useState<any>(null);

  return (
    <TotalUsageContext.Provider value={{totalUsage,setTotalUsage}}>
    <UpdateCreditUsageContext.Provider value={{UpadteCreditUsageContext,setUpdateCreditUsageContext}}>
    
    <div className='bg bg-slate-100'>
      <div className='md:w-64 hidden md:block fixed'>
        <SideNav />
      </div>
      <div className='md:ml-64'>
          <Header />
        {children}
      </div>
    </div>
    </UpdateCreditUsageContext.Provider>
    </TotalUsageContext.Provider>
    
  )
}

export default Layout;