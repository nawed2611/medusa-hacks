import React from 'react'
import CartProducts from '../components/CartProducts'
const Cart = () => {
  return (
    <div>
      <h2>Back</h2>
      <div className='flex'>
        <CartProducts/>
        <div>Payment Portal</div>
      </div>
    </div>
  )
}

export default Cart