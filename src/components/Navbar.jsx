import { useState } from "react";

import { close, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full bg-primary flex py-6 justify-between items-center navbar">
      <a href="/">
      <h1 className="my-auto font-poppins font-bold text-[24px] text-secondary rounded-lg">
        DavidUrschel.com
      </h1>
      </a>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] hover:text-tertiary no-underline hover:underline text-secondary ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            }`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`/${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <div onClick={() => setToggle(!toggle)} className="p-2 rounded-md bg-gray-700">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
        />
        </div>

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-gradient-to-b from-slate-200 to-zinc-400 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-[1] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] hover:text-tertiary no-underline hover:underline text-secondary ${
                  index === navLinks.length - 1 ? "mb-0" : "mb-4"
                }`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`/${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
