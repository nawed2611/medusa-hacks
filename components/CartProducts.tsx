import React from 'react'
import CartProduct from './CartProduct'

const CartProducts = () => {
    const arr = [
        {
            img:'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/aa5164d2-7cb2-488e-85bd-1d1d677dbf9e/air-max-97-shoes-XzwdhC.png',
            title:'Nike Air Max 97 Premium',
            price:17500,
            size:'36EU'
        },
        {
            img:'https://static.nike.com/a/images/c_limit,w_400,f_auto/t_product_v1/d81fee2a-e014-4fa1-9f6c-1870e8554a07/image.jpg',
            title:'Air Jordan 1 Mid',
            price:17500,
            size:'36EU'
        }
    ]
   const products = arr.map((sneaker,index)=>{
    return(
        <CartProduct 
        key={index}
        title ={sneaker.title}
        img = {sneaker.img}
        price = {sneaker.price}
        size = {sneaker.size}

        />
    )
    
   })
    
  return (
    <div>
{products}
    </div>
  )
}

export default CartProducts