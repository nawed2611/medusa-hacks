import Link from "next/link";
import { useEffect, useState } from "react";
const Navbar = () => {
  const [pageCord, setPageCord] = useState(0);
  const handleScroll = () => {
    setPageCord(window.pageYOffset);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const menuItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Trending",
      link: "/trending",
    },
    {
      name: "Latest",
      link: "/latest",
    },
    {
      name: "View Cart",
      link: "/cart",
    },
  ];
  return (
    <div
      className={
        pageCord < 100
          ? " bg-transparent sticky top-0 z-50"
          : "backdrop-blur-3xl bg-transparent sticky top-0 z-50"
      }
    >
      <nav className="relative flex items-center justify-between max-w-3xl p-4 mx-auto">
        <Link href="/">
          <a className="text-2xl"></a>
        </Link>

        <ul className="flex space-x-5 items-center gap-2 text-sm font-medium text-gray-200">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link href={item.link}>
                <a className="text-gray-900 hover:text-gray-700">{item.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
