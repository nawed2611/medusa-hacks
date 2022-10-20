import Link from "next/link";
import { useState } from "react";

const Menu = () => {
  const menuItems = [
    { Home: "/" },
    { Latest: "/latest" },
    { "View Cart": "/cart" },
  ];
  const [navOpen, setNavOpen] = useState(false);
  return (
    <section className="mt-24">
      <div>
        <button
          className="w-full text-xl font-bold tracking-widest py-2 px-4"
          onClick={() => setNavOpen(!navOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
      {navOpen ? (
        <ul className="flex flex-col">
          {menuItems.map((item) => {
            const [name, link] = Object.entries(item)[0];
            return (
              <Link key={name} href={link}>
                <button className="cursor-pointer">
                  <li className="bg-gray-200 my-3 text-center py-2 px-4">
                    <a className="text-xl font-bold tracking-widest">{name}</a>
                  </li>
                </button>
              </Link>
            );
          })}
        </ul>
      ) : null}
    </section>
  );
};

export default Menu;
