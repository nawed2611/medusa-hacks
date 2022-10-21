import type { NextPage } from "next";
import Menu from "../components/Home/Menu";
const Home: NextPage = () => {
  return (
    <section className="flex">
      <div className="w-screen h-screen bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-white via-gray-200 to-gray-200 flex justify-center items-center min-h-screen">
        <h1 className="lg:md:text-9xl text-3xl tracking-widest	">Flareon</h1>
      </div>
      <div className="absolute right-12">
        <Menu />
      </div>
    </section>
  );
};

export default Home;
