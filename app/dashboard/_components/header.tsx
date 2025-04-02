import { UserButton } from '@clerk/nextjs'
import { Search } from 'lucide-react'
import moment from 'moment'
import React, { useContext, useEffect, useState } from 'react'
import { UserSubscription } from '@/utils/schema'
import { UserSubscriptionContext } from "@/app/(context)/UserSubscriptionContext";
import {eq} from 'drizzle-orm';
import axio from 'axios'
import { db } from '@/utils/db';
import { useUser } from "@clerk/nextjs";

function Header() {

  const [loading,setLoading]=useState(false);
  const { user } = useUser();
  const { userSubscription, setUserSubscription } = useContext(
    UserSubscriptionContext
  );

  const CreateSubscription=()=>{
    setLoading(true)
    axio.post('/api/create-subscription',{})
    .then(resp=>{
      console.log(resp.data);
      OnPayment(resp.data.id)
    },(error)=>{
      setLoading(false);
    })
  }

  const OnPayment=(subId:string)=>{
    const options={
      "key":process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      "subscription_id":subId,
      "name":'Content.AI',
      description:'Monthly/Yearly Subscription',
      handler:async(resp:any)=>{
        console.log(resp);
        if(resp)
          {
            SaveSubcription(resp?.razorpay_payment_id)
          }
        setLoading(false);
      }
    }

      try{
        // @ts-ignore 
        const rzp=new window.Razorpay(options);
        rzp.open();
        }
        catch(e)
        {
            console.log("Try Again...",e);
            setLoading(false);
        }
      }
    
      const SaveSubcription=async(paymentId:string)=>{
        const result=await db.insert(UserSubscription)
        .values({
          email:user?.primaryEmailAddress?.emailAddress,
          username:user?.fullName,
          active: true,
          paymentId: paymentId,
          joinDate: moment().format('DD/MM/yyyy')
        });
        console.log(result);
        if(result)
          {
            window.location.reload();
          }
      }
      useEffect(() => {
          user && IsUserScubscribed();
          console.log(userSubscription)
        }, [user]);

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
          }
      }
      catch(e){
        console.log("Error in subscription",e); 
       }
    }
  return (
    <div className='p-5 shadow-sm border-b-2 flex justify-between items-center bg-white'>
       <div className = 'flex gap-2 items-center p-2 border rounded-md max-w-lg bg-white'>
        <Search/>
        <input type='text' placeholder='Search..' className='outline-none' />
       </div>
       <div className='flex gap-5 items-center'>
        { !userSubscription ? <h2 
        onClick={()=>CreateSubscription()}
        className='bg-primary text-white p-1 rounded-full text-xs px-2 hover:cursor-pointer'>
          🔥 Join Memebership just for ₹199/month 
        </h2>:<div></div>}
        <UserButton/>
       </div>
    </div>
  )
}

export default Header