import type { NextPage } from "next";
import Menu from "../src/components/Home/Menu";
import Footer from "../components/Footer";
import Features from "../components/Features";
import Spline from "@splinetool/react-spline";

const Home: NextPage = () => {
  return (
    <section className="flex">
      <div className="w-screen h-screen bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-white via-gray-200 to-gray-200 flex justify-center items-center min-h-screen">
        <h1 className="lg:md:text-9xl text-3xl tracking-widest">Flareon</h1>
      </div>
      <div className="absolute right-12">

        <Menu />
      </div>
      <section className="">
        <section className="min-h-screen relative bg-gray-500">
          <div className="absolute inset-x-0 bottom-0">
            <svg
              viewBox="0 0 224 12"
              fill="currentColor"
              className="w-full -mb-1 text-white"
              preserveAspectRatio="none"
            >
              <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z" />
            </svg>
          </div>
          <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-20">
            <div className="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">
              <h2 className="mb-6 mt-24 font-sans text-3xl font-bold tracking-tight text-white sm:text-7xl sm:leading-none">
                Think Sneakers.
                <br className="block" />
                Think{" "}
                <span className="relative inline-block px-2">
                  <div className="absolute inset-0 transform -skew-x-12 bg-white" />
                  <span className="relative text-gray-500">Flareon.</span>
                </span>
              </h2>
            </div>
          </div>
          <section className=" h-96 overflow-hidden flex justify-center items-center">
            <Spline scene="https://prod.spline.design/6g7OhJ0onmENsi6j/scene.splinecode" />
          </section>
        </section>
        <Features />
        <footer className="lg:md:block hidden">
          <Footer />
        </footer>
      </section>
    </>
  );
};

export default Home;
