import React from 'react'

type Props ={
  title: string,
  img: string,
  price: number,
  size: number
}
const CartProduct = ({title,img,price,size}:Props) => {
  return (
    <div className='flex gap-12 w-11/12'>
      
      <img src = {img} alt='sneaker image' height={130} width={105}/>
      <div>
        <h3>{title}</h3>
        <h3>Rs.{price} <span className='text-green-500'>In Stock</span></h3>
        <h3>Size: {size} EU</h3>
        <div>

        </div>
      </div>
    </div>
  )
}

export default CartProduct