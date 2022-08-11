import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Logo from "../assets/images/logo/logo.png";

import { Link } from "react-router-dom";
import auth from "../firebase.init";

const Menubar = () => {
  const [user] = useAuthState(auth);
  const [show, setIsShow] = useState(false);
  const bgColorChange = () => {
    if (window.scrollY >= 5) {
      setIsShow(true);
    } else {
      setIsShow(false);
    }
  };
  window.addEventListener("scroll", bgColorChange);

  const logout = () => {
    signOut(auth);
  };

  const menuItem = (
    <>
      <li className="mr-8 ">
        <Link to="/home">
          <span className="text-4xl font-mono">DigiMoney</span>{" "}
        </Link>
      </li>
      <li className="mr-8">
        <Link to="/">Home</Link>
      </li>

      <li className="mr-8">
        <Link to="/blog">Blog</Link>
      </li>

      <li className="mr-8 z-50" tabindex="0">
        <a>
          Company
          <svg
            className="fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
          </svg>
        </a>
        <ul className="p-2 bg-[#234044] ">
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/team">Team</Link>
          </li>
        </ul>
      </li>

      <li className="mr-8">
        <Link to="/cards">Cards</Link>
      </li>
      <li className="mr-8">
        <Link to="/services">Services</Link>
      </li>

      {user && (
        <li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </li>
      )}
    </>
  );

  return (
    <div
      className={`navbar m-0 p-0 duration-500 ${
        show ? "bg-[#234044]" : "bg-[#073A42]"
      } z-[1000]  sticky top-0    text-[#F2F2F2]`}
    >
      <div className="navbar-start ">
        <div className="dropdown">
          <label tabindex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary text-accent rounded-box w-52"
          >
            {menuItem}
          </ul>
        </div>

        <ul className="menu hidden lg:flex menu-horizontal p-0">{menuItem}</ul>
      </div>

      <div className="navbar-end">
        <ul
          tabindex="0"
          className="menu menu-compact dropdown-content mt-3 p-2 shadow  text-accent rounded-box w-52"
        >
          <li className="justify-center items-center">
            {user ? (
              <button
                onClick={logout}
                className="btn btn-error bg-red-500 text-white capitalize"
              >
                Sign Out
              </button>
            ) : (
              <Link
                className="btn btn-secondary text-white px-14 font-bold"
                to="/login"
              >
                Login
              </Link>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menubar;
