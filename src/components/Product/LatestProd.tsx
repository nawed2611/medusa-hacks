import Image from "next/image";
import { SiNike } from "react-icons/si";
import { AiOutlinePlus } from "react-icons/ai";
const ProductCard = (props: any) => {
  return (
    <section>
      <div className="mt-12">
        <SiNike className="text-8xl mx-12" />
      </div>
      <div className="text-center my-24">
        <img
          src={`/products/${props.image}`}
          alt="Product"
          className=" h-52 mx-auto"
        />
      </div>
      <div className="ml-10 flex h-64 items-end justify-between">
        <span>
          <h1 className="text-3xl font-bold ">{props.prodName}</h1>
          <h3 className="text-xl my-1 font-semibold">${props.price}</h3>
        </span>
        <div className="flex justify-end mr-12">
          <AiOutlinePlus className="cursor-pointer  text-4xl" />
        </div>
      </div>
    </section>
  );
};

export default ProductCard;
