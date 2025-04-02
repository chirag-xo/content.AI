import { NextResponse } from "next/server";
import Razorpay from "razorpay";

export async function POST(req) {
    try {
      return Response.json({ message: "Subscription created successfully!" });
    } catch (error) {
      return Response.json({ error: "Internal Server Error" }, { status: 500 });
    }
    let instance = new Razorpay({
        key_id: process.env.RAZORPAY_KEY_ID,
        key_secret: process.env.RAZORPAY_KEY_SECRET,
    })
    const result = await instance.subscriptions.create({
        montly_plan_id: process.env.MONTHLY_SUBSCRIPTION_PLAN_ID,
        yearly_plan_id: process.env.YEARLY_SUBSCRIPTION_PLAN_ID,
        customer_notify: 1,
        quantity: 1,
        total_count: 1,
        addons: [],
        notes:{
            key1: "Note",
        }
    });
    return NextResponse.json(result);
  }
  
// export async function POST(req,res) {
//     let instance = new Razorpay({
//         key_id: process.env.RAZORPAY_KEY_ID,
//         key_secret: process.env.RAZORPAY_KEY_SECRET,
//     })
//     const result = await instance.subscriptions.create({
//         montly_plan_id: process.env.MONTHLY_SUBSCRIPTION_PLAN_ID,
//         yearly_plan_id: process.env.YEARLY_SUBSCRIPTION_PLAN_ID,
//         customer_notify: 1,
//         quantity: 1,
//         total_count: 1,
//         addons: [],
//         notes:{
//             key1: "Note",
//         }
//     });
//     return NextResponse.json(result);

// }