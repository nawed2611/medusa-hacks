import LatestProd from "../src/components/Product/LatestProd";
import Menu from "../src/components/Home/Menu";
const Latest = () => {
  return (
    <div>
      <section className="h-screen ">
        <span className="absolute inset-0 my-4">
          <Menu />
        </span>
        <div className="flex lg:md:flex-row flex-col">
          <div className="py-3 bg-[#a6e300] lg:md:w-1/2">
            <LatestProd
              image={"1.png"}
              prodName={"Yeezy Nike Premium"}
              price={200}
            />
          </div>
          <div className="py-3 bg-[#71c1e5] lg:md:w-1/2">
            <LatestProd
              image={"2.png"}
              prodName={"Yeezy Nike Beta"}
              price={250}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Latest;
