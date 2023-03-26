import React from "react";
import logo from "../assets/images/Logo.svg";

const Header = () => {
  return (
    <div className="w-full  py-6 bg-[#1C2B35]">
      <div className="navbar max-w-7xl mx-auto flex justify-between items-center sticky">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="#fff"
                viewBox="0 0 24 24"
                stroke="#fff"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  fill="#fff"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a
                  className="capitalize text-black hover:text-orange-500 transition-all font-semibold"
                  href="#"
                >
                  Order
                </a>
              </li>
              <li tabIndex={0}>
                <a
                  className="capitalize text-black hover:text-orange-500 transition-all font-semibold"
                  href="#"
                >
                  Order review
                </a>
              </li>
              <li>
                <a
                  className="capitalize text-black hover:text-orange-500 transition-all font-semibold"
                  href="#"
                >
                  Manage Inventory
                </a>
              </li>
              <li>
                <a
                  className="capitalize text-black hover:text-orange-500 transition-all font-semibold"
                  href="#"
                >
                  Login
                </a>
              </li>
            </ul>
          </div>
          <img src={logo} alt="" />
        </div>
        <div className="navbar-end hidden lg:flex gap-10">
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
        </div>
      </div>
      {/* <header className="max-w-7xl mx-auto flex justify-between items-center sticky">
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
      </header> */}
    </div>
  );
};

export default Header;
