import Link from 'next/link'
import React from 'react'
import CartProducts from '../components/CartProducts'
const Cart = () => {
  return (
    <div>
      <Link href='/'>
      <h2 className='m-16 text-xl font-bold cursor-pointer'>Back</h2>
      </Link>
   
      <div className='flex flex-col md:flex-row '>
        <CartProducts/>
        <div>Payment Portal</div>
      </div>
    </div>
  )
}

export default Cart