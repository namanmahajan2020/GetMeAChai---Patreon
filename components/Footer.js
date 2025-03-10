import React from 'react'

const Footer = () => {
  const currentYear=new Date().getFullYear();
  return (
    <footer className='bg-gray-900 text-white flex justify-center items-center h-16 px-4'>
        <p className='text-center'>Copyright &copy; {currentYear} Get me A Chai - All right are reserved!</p>
    </footer>
  )
}

export default Footer
