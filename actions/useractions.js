"use server"

import Razorpay from "razorpay";
import Payment from "@/models/Payment";
import connectDb from "@/db/connectDb";
import User from "@/models/User"

export const initiate = async (amount, to_username, paymentform) => {
    await connectDb();
    let user = await User.findOne({username: to_username})
    var instance = new Razorpay({ key_id: process.env.KEY_ID, key_secret: process.env.KEY_SECRET });

    let options = {
        amount: Number.parseInt(amount),
        currency: "INR",
    };

    let x = await instance.orders.create(options);

    // create a payment object which shows a pending payment in the database
    await Payment.create({
        oid: x.id,
        amount: amount,
        to_user: to_username || "default_username",   
        name: paymentform.name,      
        message: paymentform.message,  
    });

    return x;
};


