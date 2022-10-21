import React from "react";
import CartProduct from "./CartProduct";

const CartProducts = () => {
    const arr = [
        {
            img: "https://static.nike.com/a/images/c_limit,w_400,f_auto/t_product_v1/d81fee2a-e014-4fa1-9f6c-1870e8554a07/image.jpg",
            title: "Nike Air Max 97 Premium",
            price: 17500,
            size: 36,
        },
        {
            img: "https://static.nike.com/a/images/c_limit,w_400,f_auto/t_product_v1/d81fee2a-e014-4fa1-9f6c-1870e8554a07/image.jpg",
            title: "Air Jordan 1 Mid",
            price: 17500,
            size: 36,
        },
    ];
    const products = arr.map((sneaker, index) => {
        return (
            <CartProduct
                key={index}
                title={sneaker.title}
                img={sneaker.img}
                price={sneaker.price}
                size={sneaker.size}
            />
        );
    });

    return (
        <div className="border-solid border border-gray-600 flex flex-col gap-14 justify-center items-center mx-3 md:mx-16 py-4">
            {products}
        </div>
    );
};

export default CartProducts;
