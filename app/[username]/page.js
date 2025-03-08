import React from 'react'
import PaymentPage from '@/components/PaymentPage'
const Username = ({ params }) => {
  return (
    <>
      <PaymentPage Username={params.Username}/>
    </>
  )
}

export default Username