import React from 'react'
import PaymentPage from '@/components/PaymentPage'
import { notFound } from "next/navigation";
import connectDb from '@/db/connectDb';
import User from '@/models/User';
const Username =async ({ params }) => {
  const checkUser = async () => {
    await connectDb()
    let u = await User.findOne({ username: params.username })
    if (!u) {
      return notFound()
    }
  }
  await checkUser()
    return (
      <>
        <PaymentPage username={params.username} />
      </>
    )
  }
  export default Username