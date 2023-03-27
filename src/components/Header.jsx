import React from "react";
import logo from "../assets/images/Logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import Modal from "./Modal";

const Header = () => {
  return (
    <header className="w-full py-1 bg-[#1C2B35] sticky top-0 z-40">
      <nav className="navbar max-w-7xl mx-auto flex justify-between items-center ">
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
                <a className="capitalize text-black  transition-all font-semibold">
                  Order
                </a>
              </li>
              <li tabIndex={0}>
                <a className="capitalize text-black  transition-all font-semibold">
                  Order Review
                </a>
              </li>
              <li>
                <a className="capitalize text-black  transition-all font-semibold">
                  Manage Inventory
                </a>
              </li>
              <li>
                <a className="capitalize text-black transition-all font-semibold">
                  Login
                </a>
              </li>
              <li>
                <label
                  htmlFor="my-modal-3"
                  className="capitalize text-black transition-all font-semibold"
                >
                  <FontAwesomeIcon icon={faCartPlus} />
                  <span>Cart</span>
                </label>
              </li>
            </ul>
          </div>
          <img src={logo} alt="" />
        </div>
        <div className="navbar-end hidden lg:flex gap-10">
          <a className="capitalize text-white hover:text-orange-500 transition-all font-semibold">
            Order
          </a>
          <a className="capitalize text-white hover:text-orange-500 transition-all font-semibold">
            Order review
          </a>
          <a className="capitalize text-white hover:text-orange-500 transition-all font-semibold">
            Manage Inventory
          </a>
          <a className="capitalize text-white hover:text-orange-500 transition-all font-semibold">
            Login
          </a>
        </div>
      </nav>
      <Modal />
    </header>
  );
};

export default Header;
