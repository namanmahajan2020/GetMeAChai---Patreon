import React from 'react'

const Username = ({ params }) => {
  return (
    <>
      <div className='cover w-full bg-red-50 relative'>
        <img className='object-cover w-full h-full' src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/452146dcfeb04f38853368f554aadde1/eyJ3IjoxOTIwLCJ3ZSI6MX0%3D/18.gif?token-time=1743724800&amp;token-hash=3jRRjnWnIycOk6k6K03qY-fepaDiVq5PShRw7Y2mnLQ%3D" alt="" />
        <div className='absolute -bottom-16 right-[46%]'>
          <img className='rounded-full border-2 border-white' width={120} height={120} src="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg" alt="cat" />
        </div>
      </div>
      <div className='info flex justify-center items-center my-18 flex-col gap-2'>
        <div className='font-bold text-lg'>
          @{params.username}
        </div>
        <div className='text-slate-400'>
          Creating Animated art for VTT's
        </div>
        <div className='text-slate-400'>
          9,719 members . 82 posts . $15,450/release
        </div>
        <div className="payment flex gap-3 w-[80%] mt-11">
          <div className="supporters w-1/2 bg-slate-900 rounded-lg text-white p-10">
            <h2 className='text-2xl font-bold mb-5'>Supporters</h2>
            <ul className='mx-5 text-sm'>
              <li className='my-4 flex gap-2 items-center'><img width={33} src="avatar.gif" alt="user" /> <span>Shubham donated <span className='font-bold'>$30</span> with a message "I support you bro. Lots of ❤️"</span></li>
              <li className='my-4 flex gap-2 items-center'><img width={33} src="avatar.gif" alt="user" /> <span>Shubham donated <span className='font-bold'>$30</span> with a message "I support you bro. Lots of ❤️"</span></li>
              <li className='my-4 flex gap-2 items-center'><img width={33} src="avatar.gif" alt="user" /> <span>Shubham donated <span className='font-bold'>$30</span> with a message "I support you bro. Lots of ❤️"</span></li>
              <li className='my-4 flex gap-2 items-center'><img width={33} src="avatar.gif" alt="user" /> <span>Shubham donated <span className='font-bold'>$30</span> with a message "I support you bro. Lots of ❤️"</span></li>
              <li className='my-4 flex gap-2 items-center'><img width={33} src="avatar.gif" alt="user" /> <span>Shubham donated <span className='font-bold'>$30</span> with a message "I support you bro. Lots of ❤️"</span></li>
              <li className='my-4 flex gap-2 items-center'><img width={33} src="avatar.gif" alt="user" /> <span>Shubham donated <span className='font-bold'>$30</span> with a message "I support you bro. Lots of ❤️"</span></li>
            </ul>
          </div>
          <div className="makePayment w-1/2 bg-slate-900 rounded-lg text-white p-10">
            <h2 className='text-2xl font-bold my-5'>Make a Payment</h2>
            <div className='flex flex-col gap-2'>
              <input type="text" className='w-full p-3 rounded-1g bg-slate-800' placeholder='Enter Name' />
              <input type="text" className='w-full p-3 rounded-1g bg-slate-800' placeholder='Enter Message' />
              <input type="text" className='w-full p-3 rounded-1g bg-slate-800' placeholder='Enter Amount' />
              <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Pay</button>
            </div>
            {/* Or choose from these amounts */}
            <div className='flex gap-2 mt-5'>
              <button className='bg-slate-800 p-3 rounded-1g'>Pay $10</button>
              <button className='bg-slate-800 p-3 rounded-1g'>Pay $20</button>
              <button className='bg-slate-800 p-3 rounded-1g'>Pay $30</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Username
