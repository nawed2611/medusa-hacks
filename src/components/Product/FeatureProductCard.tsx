const ProductCard = (props: any) => {
  return (
    <div>
      {" "}
      <a href="#" className="block">
        <div className="flex justify-center">
          <strong
            className={
              props.new
                ? "relative h-6 bg-black px-4 text-xs uppercase leading-6 text-white"
                : "invisible"
            }
          >
            New
          </strong>
        </div>

        <img
          alt="Trainer"
          src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
          className="-mt-3 h-96 w-full object-cover"
        />

        <h3 className="mt-4 text-sm text-black/90">{props.prodName}</h3>

        <div className="mt-4 flex items-center justify-between font-bold">
          <p className="text-xs uppercase tracking-wide">6 Colors</p>
        </div>
      </a>
    </div>
  );
};

export default ProductCard;
