"use client"
import { Button } from '@/components/ui/button'
import { db } from '@/utils/db';
import { eq } from 'drizzle-orm';
import { AIOutput } from '@/utils/schema';
import { useUser } from '@clerk/nextjs'
import React, { useContext, useEffect, useState } from 'react'
import { HISTORY } from '../history/page';
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext';
import { UpdateCreditUsageContext } from '@/app/(context)/UpadteCreditUsageContext';


function UsageTrack() {
    const {user}=useUser();
    const {totalUsage,setTotalUsage}=useContext(TotalUsageContext)
    const [maxWords,setMaxWords]=useState(10000)
    const {UpadteCreditUsageContext,setUpdateCreditUsageContext}=useContext(UpdateCreditUsageContext)
    
    
    

    useEffect(()=>{
        user&&GetData();
    },[user]);

    useEffect(()=>{
        user&&GetData();
    },[UpadteCreditUsageContext&&user]);

    const GetData=async()=>{
        {/* @ts-ignore */}

     const result:HISTORY[] = await db.select().from(AIOutput)
      .where(eq(AIOutput.createdBy,user?.primaryEmailAddress?.emailAddress || ""))

     GetTotalUsage(result)

    }

    const GetTotalUsage=(result:HISTORY[])=>{
        let total:number=0;
        result.forEach(element=>{
            total+=Number(element.aiResponse?.length)
        });
        setTotalUsage(total);
        console.log(total);

    }
  return (
    <div className='m-5'>
        <div className='bg-primary text-white p-3 rounded-lg'>
            <h2 className='font-medium'>Credit Usage</h2>
            <div className='h-2 bg-[#9981f9] w-full rounded-lg mt-3'>
                <div className='h-2 bg-white rounded-full'
                style={{
                    width:(totalUsage/10000)*100+'%'
                }}
                ></div>
            </div>
            <h2 className='text-xs my-2'>{totalUsage}/10,000 credits used </h2>
        </div>
        <Button variant={'secondary'}className='mt-3 w-full text-primary'>Upgrade Plan</Button>
    </div> 
  )
}

export default UsageTrack
                

