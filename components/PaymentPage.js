"use client"
import React, { useEffect, useState } from 'react'
import Script from 'next/script'
import { useSession } from 'next-auth/react'
import { fetchpayments, fetchuser, initiate } from '@/actions/useractions'

const PaymentPage = ({ username }) => {
    const [paymentform, setPaymentform] = useState({})
    const [currentUser, setcurrentUser] = useState({})
    const [payments, setPayments] = useState([])

    useEffect(() => {
        getData()
    }, [])

    const handleChange = (e) => {
        setPaymentform({ ...paymentform, [e.target.name]: e.target.value })
    }
    const getData = async () => {
        let u = await fetchuser(username)
        setcurrentUser(u)
        let dbpayments = await fetchpayments(username)
        setPayments(dbpayments)
    }
    const pay = async (amount) => {
        // Get the order Id
        let a = await initiate(amount, username, paymentform)
        let orderId = a.id

        var options = {
            "key": process.env.NEXT_PUBLIC_KEY_ID, // Enter the Key ID generated from the Dashboard
            "amount": amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": "INR",
            "name": "Get Me A Chai", //your business name
            "description": "Test Transaction",
            "image": "https://example.com/your_logo",
            "order_id": orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "callback_url": `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
            "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
                "name": "Gaurav Kumar", //your customer's name
                "email": "gaurav.kumar@example.com",
                "contact": "9000090000" //Provide the customer's phone number for better conversion rates 
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        }
        var rzp1 = new Razorpay(options);
        rzp1.open();
    }
    return (
        <>
            <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>

            <div className='cover w-full bg-red-50 relative'>
                <img className='object-cover w-full h-full' src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/452146dcfeb04f38853368f554aadde1/eyJ3IjoxOTIwLCJ3ZSI6MX0%3D/18.gif?token-time=1743724800&amp;token-hash=3jRRjnWnIycOk6k6K03qY-fepaDiVq5PShRw7Y2mnLQ%3D" alt="" />
                <div className='absolute -bottom-16 right-[46%]'>
                    <img className='rounded-full border-2 border-white' width={120} height={120} src="https://c.tenor.com/dimT0JAAMb4AAAAC/tenor.gif" alt="cat" />
                </div>
            </div>
            <div className='info flex justify-center items-center my-18 flex-col gap-2'>
                <div className='font-bold text-lg'>
                    @{username}
                </div>
                <div className='text-slate-400'>
                    Creating Ani  mated art for VTT's
                </div>
                <div className='text-slate-400'>
                    9,719 members . 82 posts . $15,450/release
                </div>
                <div className="payment flex gap-3 w-[80%] mt-11">
                    <div className="supporters w-1/2 bg-slate-900 rounded-lg text-white p-10">
                        <h2 className='text-2xl font-bold mb-5'>Supporters</h2>
                        <ul className='mx-5 text-sm'>
                            {payments.map((p, i) => {
                                return <li key={i} className='my-4 flex gap-2 items-center'>
                                    <img width={33} src="avatar.gif" alt="user" />
                                    <span>{p.name} donated <span className='font-bold'>{(p.amount)/100}</span> with a message "{p.message}"</span></li>
                            })}
                        </ul>
                    </div>
                    <div className="makePayment w-1/2 bg-slate-900 rounded-lg text-white p-10">
                        <h2 className='text-2xl font-bold my-5'>Make a Payment</h2>
                        <div className='flex gap-2 flex-col'>
                            {/* input for name and message   */}
                            <div>

                                <input onChange={handleChange} value={paymentform.name || ''} name='name' type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Name' />

                            </div>
                            <input onChange={handleChange} value={paymentform.message || ''} name='message' type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Message' />

                            <input onChange={handleChange} value={paymentform.amount || ''} name="amount" type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Amount' />



                            <button onClick={()=>pay(Number.parseInt(paymentform.amount)*100)} type="button" className="text-white bg-gradient-to-br from-purple-900 to-blue-900 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Pay</button>

                        </div>
                        {/* Or choose from these amounts */}
                        <div className='flex gap-2 mt-5'>
                            <button className='bg-slate-800 p-3 rounded-1g' onClick={() => pay(1000)}>Pay ₹10</button>
                            <button className='bg-slate-800 p-3 rounded-1g' onClick={() => pay(2000)}>Pay ₹20</button>
                            <button className='bg-slate-800 p-3 rounded-1g' onClick={() => pay(3000)}>Pay ₹30</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PaymentPage
