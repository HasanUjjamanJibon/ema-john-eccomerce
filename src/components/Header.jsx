import React from "react";
import logo from "../assets/images/Logo.svg";

const Header = () => {
  return (
    <div className="w-full  py-6 bg-[#1C2B35] ">
      <header className="max-w-7xl mx-auto flex justify-between items-center sticky">
        <img src={logo} alt="" />
        <nav className="flex gap-10">
          <a
            className="capitalize text-white hover:text-orange-500 transition-all font-semibold"
            href="#"
          >
            Order
          </a>
          <a
            className="capitalize text-white hover:text-orange-500 transition-all font-semibold"
            href="#"
          >
            Order review
          </a>
          <a
            className="capitalize text-white hover:text-orange-500 transition-all font-semibold"
            href="#"
          >
            Manage Inventory
          </a>
          <a
            className="capitalize text-white hover:text-orange-500 transition-all font-semibold"
            href="#"
          >
            Login
          </a>
        </nav>
      </header>
    </div>
  );
};

export default Header;
