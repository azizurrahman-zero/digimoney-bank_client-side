import React from "react";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";

const Menubar = () => {
  const menuItem = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <a>Company</a>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      <li>
        <Link to="/cards">Cards</Link>
      </li>
      <li>
        <Link to="/about">About Us</Link>
      </li>
      <li>
        <a>News</a>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </>
  );
  return (
    <div>
      <div class="navbar bg-[#0D0D0D] text-[#F2F2F2]">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary text-accent rounded-box w-52"
            >
              {menuItem}
            </ul>
          </div>
          <ul class="menu hidden lg:flex menu-horizontal p-0">{menuItem}</ul>
        </div>

        <div class="navbar-end">
          <div className="flex items-center ">
            <input
              type="text"
              placeholder="Type here"
              class="input  text-black   rounded-none"
            />
            <BsSearch className="w-12 h-auto p-2 text-white border-2 cursor-pointer bg-primary" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menubar;
