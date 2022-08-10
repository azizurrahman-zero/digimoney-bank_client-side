import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Logo from "../assets/images/logo/logo.svg";
import { Link } from "react-router-dom";
import auth from "../firebase.init";
import "../App.css";

const Menubar = () => {
  const [user] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
  };

  const menuItem = (
    <>
      <li>
        <Link to="/home" className="p-0 mr-4 logo">
          <img className="max-w-none w-9" src={Logo} alt="logo" />
        </Link>
      </li>
      <li>
        <Link to="/" className="font-semibold font-barlow py-0">
          Home
        </Link>
      </li>
      <li>
        <Link to="/blog" className="font-semibold font-barlow py-0">
          Blog
        </Link>
      </li>
      <li className="z-50 font-semibold font-barlow py-0" tabIndex="0">
        <Link to="#" className="py-0">
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
        </Link>
        <ul className="px-4 pt-6 pb-4 bg-white">
          <li>
            <Link to="/about" className="font-semibold font-barlow py-2">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/team" className="font-semibold font-barlow py-2">
              Team
            </Link>
          </li>
        </ul>
      </li>
      <li>
        <Link to="/cards" className="font-semibold font-barlow py-0">
          Cards
        </Link>
      </li>
      <li>
        <Link to="/services" className="font-semibold font-barlow py-0">
          Services
        </Link>
      </li>
      {user && (
        <li>
          <li>
            <Link to="/dashboard" className="font-semibold font-barlow py-0">
              Dashboard
            </Link>
          </li>
        </li>
      )}
    </>
  );

  return (
    <div>
      <div className="navbar bg-[#ffff] text-[#323232] rounded-2xl py-4 px-5">
        <div className="navbar-start ">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
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
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary text-accent rounded-box w-52"
            >
              {menuItem}
            </ul>
          </div>
          <ul className="menu hidden lg:flex menu-horizontal p-0">
            {menuItem}
          </ul>
        </div>
        <div className="navbar-end">
          <ul>
            <li>
              {user ? (
                <button onClick={logout} className="btn btn-ghost capitalize">
                  Sign Out
                </button>
              ) : (
                <Link
                  className="btn btn-neutral px-14 border-none rounded-md text-[#073A42] font-bold font-roboto"
                  to="/login"
                >
                  Log In
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menubar;
