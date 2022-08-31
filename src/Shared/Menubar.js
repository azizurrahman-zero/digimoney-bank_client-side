import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../firebase.init";

const Menubar = ({ setDarkMood,darkMood }) => {
  const [user, loading] = useAuthState(auth);
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
    localStorage.removeItem("accessToken");
  };

  // =============================================darkmood====================================//
  const handleDarkMood=(e)=>{
     const darkMood=e.target.checked 
     localStorage.setItem('darkmood',JSON.stringify(darkMood))
     setDarkMood(darkMood)
  }


  const menuItem = (
    <>
      <li className="mr-8 ">
        <Link to="/home">
          <span className="font-mono text-4xl">DigiMoney</span>{" "}
        </Link>
      </li>
      <li className="mr-8">
        <Link to="/">Home</Link>
      </li>

      <li className="mr-8">
        <Link to="/blog">Blog</Link>
      </li>

      <li className="z-50 mr-8" tabIndex="0">
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
          <Link to="/dashboard">Dashboard</Link>
        </li>
      )}

      <li className="flex items-center justify-center ml-14">
        <input
          onChange={handleDarkMood}
          name="dark"
          type="checkbox"
          checked={darkMood}
          className="toggle toggle-lg mr-14"
        />
      </li>
    </>
  );
  if (loading) {
    return;
  }

  return (
    <div
      className={`navbar m-0 p-0 duration-500 ${
        show ? "bg-base-content" : "bg-primary"
      } z-[1000]  sticky top-0    text-[#F2F2F2]`}
    >
      <div className="navbar-start ">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="p-2 mt-3 shadow menu menu-compact dropdown-content bg-primary text-white rounded-box w-52"
          >
            {menuItem}
          </ul>
        </div>

        <ul className="hidden p-0 menu lg:flex menu-horizontal">{menuItem}</ul>
      </div>

      <div className="navbar-end ">
        <ul
          tabIndex="0"
          className="flex-row items-center p-2 mt-3 shadow menu menu-compact dropdown-content text-accent rounded-box w-52"
        >
          <li className="items-center justify-center">
            {user ? (
              <button
                onClick={logout}
                className="capitalize btn btn-secondary text-base-300"
              >
                Sign Out
              </button>
            ) : (
              <Link
                className="font-bold text-white btn btn-secondary px-14"
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
