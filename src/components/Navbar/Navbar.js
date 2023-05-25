import React, { useState } from "react";
import logo from "../../logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  let navItems = [
    { name: "Home", link: "/home" },
    { name: "Topics", link: "/topics" },
    { name: "Statistic", link: "/statistic" },
    { name: "Blog", link: "/blog" },
  ];
  let [open, setOpen] = useState(false);

  return (
    <nav className="shadow-2xl w-full md:flex items-center justify-between fixed top-0 left-0 bg-green-400">
      <div className="logo md:flex py-4 cursor-pointer md:px-10 px-7">
        <img src={logo} className="h-10" alt="quizen" />
      </div>

      <div
        onClick={() => setOpen(!open)}
        className="text-3xl text-white absolute cursor-pointer md:hidden right-8 top-6"
      >
        <ion-icon
          name={open ? "close-circle-outline" : "grid-outline"}
        ></ion-icon>
      </div>
      <ul
        className={`md:flex md:items-center absolute md:static mb:pb-0  md:z-auto z-[-1] bg-green-400 left-0 w-full md:w-auto md:pl-0 transition-all duration-500 ease-in ${
          open ? "top-20 opacity-100" : "top-[-490px] opacity-0 md:opacity-100"
        }`}
      >
        {navItems.map((navItem, idx) => (
          <li key={idx} className="md:ml-10 text-xl my-7 md:my-7">
            <Link
              to={navItem.link}
              className="text-white hover:bg-slate-300 hover:text-gray-800 p-2 hover:p-2 hover:rounded-md duration-500"
            >
              {navItem.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
