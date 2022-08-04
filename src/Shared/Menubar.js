import React from "react";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";

const Menubar = () => {
<<<<<<< HEAD
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
=======

  const menuItem = <>
    <li><Link to="/">Home</Link></li>
    
    <li><Link to="/blog">Blog</Link></li>
    
    <li className='bg-primary z-50' tabindex="0">
        <a>
          Company
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul className="p-2 bg-primary">
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/team">Team</Link></li>
        </ul>
      </li>

    <li><Link to="/cards">Cards</Link></li>
    <li><Link to="/services">Services</Link></li>
    {/* <li><Link to="/service">Portfolio</Link></li> */}
    <li><Link to="/service">News</Link></li>
    <li><Link to="/dashboard">Dashboard</Link></li>
    <li><Link to="/login">Login</Link></li>
  </>


  return (
    <div>
      <div className="navbar bg-primary text-[#F2F2F2]">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabindex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
>>>>>>> f4c4003370f950e4919b2cea2deb289fdd4e6e61
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
<<<<<<< HEAD
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary text-accent rounded-box w-52"
=======
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary text-accent rounded-box w-52"
>>>>>>> f4c4003370f950e4919b2cea2deb289fdd4e6e61
            >
              {menuItem}
            </ul>
          </div>
<<<<<<< HEAD
          <ul class="menu hidden lg:flex menu-horizontal p-0">{menuItem}</ul>
        </div>

        <div class="navbar-end">
=======
          <ul className="menu hidden lg:flex menu-horizontal p-0">{menuItem}</ul>
        </div>

        <div className="navbar-end">
>>>>>>> f4c4003370f950e4919b2cea2deb289fdd4e6e61
          <div className="flex items-center ">
            <input
              type="text"
              placeholder="Type here"
<<<<<<< HEAD
              class="input  text-black   rounded-none"
=======
              className="input  text-black   rounded-none"
>>>>>>> f4c4003370f950e4919b2cea2deb289fdd4e6e61
            />
            <BsSearch className="w-12 h-auto p-2 text-white border-2 cursor-pointer bg-primary" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menubar;
