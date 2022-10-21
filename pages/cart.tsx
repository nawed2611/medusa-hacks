import Link from 'next/link'
import React from 'react'
import CartProducts from '../src/components/CartProducts'
const Cart = () => {
  return (
    <div>
      <Link href='/'>
        <h2 className='ml-3 my-9 md:m-16 text-2xl md:text-3xl font-bold cursor-pointer'>Back</h2>
      </Link>

      <div className='flex flex-col md:flex-row '>
        <div className='w-screen md:w-1/2'>
          <CartProducts />
        </div>
        <div>Payment Portal</div>
      </div>
    </div>
  )
}

export default Cart