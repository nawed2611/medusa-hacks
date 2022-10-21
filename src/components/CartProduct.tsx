import React, { useState } from 'react'
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { HiOutlineTrash } from "react-icons/hi";
type Props = {
  title: string,
  img: string,
  price: number,
  size: number
}
const CartProduct = ({ title, img, price, size }: Props) => {
  const [save, setSave] = useState<boolean>(false)
  const handleSave = () => {
    setSave(!save)
  }
  return (
    <div className='flex gap-8 md:gap-16 w-11/12'>

      <img src={img} alt='sneaker image' height={130} width={105} />
      <div className='w-full flex flex-col gap-3 mt-5'>
        <h3>{title}</h3>
        <h3 className='font-semibold flex gap-3'>Rs.{price} <span className='text-green-500'>In Stock</span></h3>
        <h3>Size: {size} EU</h3>
        <div className='flex gap-4 justify-end mt-4'>
          <div className='flex gap-1'><div onClick={handleSave}>{save ? <AiFillHeart size='20' /> : <AiOutlineHeart size='20' />}</div> Save</div>
          <div className='flex gap-1'> <HiOutlineTrash size='20' /> Delete</div>
        </div>
      </div>
    </div>
  )
}

export default CartProduct