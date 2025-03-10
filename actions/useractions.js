"use server"

import Razorpay from "razorpay";
import Payment from "@/models/Payment";
import connectDb from "@/db/connectDb";
import User from "@/models/User"

export const initiate = async (amount, to_username, paymentform) => {
    await connectDb();
    var instance = new Razorpay({ key_id: process.env.NEXT_PUBLIC_KEY_ID, key_secret: process.env.KEY_SECRET });
    let options = {
        amount: Number.parseInt(amount),
        currency: "INR",
    };

    let x = await instance.orders.create(options);

    // create a payment object which shows a pending payment in the database
    await Payment.create({
        oid: x.id,
        amount: amount,
        to_user: to_username,
        name: paymentform.name,
        message: paymentform.message,
    });

    return x;
};

export const fetchuser = async (username) => {
    await connectDb();
    let u = await User.findOne({ username: username }).lean(); // Convert to plain object
    return u;
}

export const fetchpayments = async (username) => {
    await connectDb();
    let p = await Payment.find({ to_user: username }).sort({ amount: -1 }).lean();

    // Convert ObjectId to string manually if needed
    p = p.map(payment => ({
        ...payment,
        _id: payment._id.toString()  // Convert ObjectId to string
    }));

    return p;
}

export const updateProfile = async (data, oldusername) => {
    await connectDb();
    let ndata = Object.fromEntries(data)
    if (oldusername !== ndata.username) {
        let u = await User.findOne({ username: ndata.username })
        if (u) {
            return { error: "Username already exists" }
        }
    }
    await User.updateOne({email: ndata.email}, ndata)
}