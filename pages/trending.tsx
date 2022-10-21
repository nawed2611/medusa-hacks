import type { NextPage } from "next";
import Menu from "../src/components/Home/Menu";
import FeatureProductCard from "../src/components/Product/FeatureProductCard";
const Trending = () => {
  return (
    <div>
      <span className="absolute inset-0 my-4">
        <Menu />
      </span>
      {" "}
      <section>
        <div className="mx-auto min-h-screen max-w-screen-xl px-4 py-8">
          <div>
            <span className="inline-block h-1 w-12 bg-gray-500"></span>
            <h2 className="mt-1 text-2xl font-extrabold uppercase tracking-wide lg:text-3xl">
              Trending at Flareon
            </h2>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-8 lg:grid-cols-4">
            <FeatureProductCard
              prodName={"Sneakers #3339"}
              price={245}
              new={false}
            />
            <FeatureProductCard
              prodName={"Sneakers #1231"}
              price={515}
              new={true}
            />
            <FeatureProductCard
              prodName={"Sneakers #4333"}
              price={245}
              new={false}
            />
            <FeatureProductCard
              prodName={"Sneakers #4370"}
              price={175}
              new={true}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Trending;
