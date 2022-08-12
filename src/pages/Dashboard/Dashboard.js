
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'
import { BsArrowLeftCircle } from 'react-icons/bs'
import { RiBarChartHorizontalLine } from 'react-icons/ri'
import { AiOutlineUsergroupAdd, AiFillEdit, AiFillHome } from 'react-icons/ai'
import { FiSettings, FiLogOut } from 'react-icons/fi'
import { FaMoneyCheck,FaMoneyBill } from 'react-icons/fa'
import { MdRateReview, MdDashboard } from 'react-icons/md'
import { ImProfile } from 'react-icons/im'
import { Outlet } from 'react-router-dom'
import DashboardMenu from './DashboardMenu';
import './dashboard.css'


const Dashboard = () => {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(true)
  const Menus = [
    { title: "Go To Home", path: "/", src: <AiFillHome className='w-5 h-5' /> },
    { title: "Dashboard", path: "/dashboard", src: <MdDashboard className='w-5 h-5' /> },
    { title: "Profile", path: "/dashboard/profile", src: <ImProfile className='w-5 h-5' /> },
    { title: "Balance", path: "/dashboard/balance", src: <FaMoneyBill className='w-5 h-5' /> },

    { title: "Review", path: "/dashboard/review", src: <MdRateReview className='w-5 h-5' /> },
    { title: "Make Admin", path: "/", src: <AiFillEdit className='w-5 h-5' />, gap: true },
    { title: "User Request", path: "/dashboard/user-request", src: <AiFillEdit className='w-5 h-5' />, gap: true },
    { title: "Transection", path: "/dashboard/transection", src: <FaMoneyCheck className='w-5 h-5' /> },
    { title: "All User", path: "/dashboard/allusers", src: <AiOutlineUsergroupAdd className='w-5 h-5' /> },
    { title: "Setting", path: "/", src: <FiSettings className='w-5 h-5' />, setting: true },
    { title: "Go To Home", path: "/", src: <AiFillHome className='w-5 h-5' /> },
    { title: "Dashboard", path: "/dashboard", src: <MdDashboard className='w-5 h-5' /> },
    { title: "Profile", path: "/dashboard/profile", src: <ImProfile className='w-5 h-5' /> },
    { title: "Review", path: "/dashboard/review", src: <MdRateReview className='w-5 h-5' /> },
    { title: "Send Money", path: "/dashboard/sendmoney", src: <FaMoneyCheck className='w-5 h-5' /> },
    { title: "Make Admin", path: "/", src: <AiFillEdit className='w-5 h-5' />, gap: true },
    { title: "Transection", path: "/", src: <FaMoneyCheck className='w-5 h-5' /> },

    // { title: "All User", path: "/dashboard/allusers", src: <AiOutlineUsergroupAdd className='w-5 h-5' /> },
    { title: "Setting", path: "/", src: <FiSettings className='w-5 h-5' />, setting: true },
  ]
  return (

    <div className="drawer drawer-mobile      rounded-3xl ">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content custom-scroll">

        <label for="my-drawer-2" className="block mx-8 mt-3   drawer-button lg:hidden">
          < RiBarChartHorizontalLine
            for="my-drawer-2"

            className={` cursor-pointer block ml-auto
              w-8 h-8 text-black     rounded-full ${!open && 'rotate-180'}
             `} />
        </label>
        <div className='lg:px-5 lg:pl-16 pt-5 bg-white min-h-screen'>

          {!pathname.includes("dashboard/") && <DashboardMenu />}
          <Outlet />
        </div>


      </div>
      <div className="drawer-side  custom-sidebar">
        <label for="my-drawer-2" className="drawer-overlay "></label>

        <ul className={`pt-6  ${!open ? "w-20" : "w-52"} p-5 bg-[#6160DC] `}>
          < BsArrowLeftCircle
            onClick={() => setOpen(!open)}
            className={`absolute cursor-pointer
             -right-3  top-3 w-8 h-8 bg-black text-white    rounded-full ${!open && 'rotate-180'}
             `} />
          <div className='mt-8'>

            {
              Menus.map((menu, i) => (
                <Link to={menu?.path}> <li className={`text-gray-300 ${!open && "justify-center"} ${menu.gap ? "mt-9" : "mt-2"} ${menu.setting && "mt-60"}  rounded-md text-sm flex items-center gap-x-4 p-2 cursor-pointer hover:bg-slate-500`} key={i}>
                  {menu.src} <span className={`${!open && "hidden"} origin-left duration-200 text-md font-bold`}>{menu.title}</span>
                </li>
                </Link>
              ))
            }
            <li className={` text-white font-bold ${!open && "justify-center"}   rounded-md text-sm flex items-center gap-x-4 p-2 cursor-pointer hover:bg-red-700`}>
              <FiLogOut className='w-5 h-5' />
              <span className={`${!open && "hidden"} origin-left duration-200 text-md font-semibold`}>Logout</span>
            </li>
          </div>
        </ul>

      </div>
    </div>
  );
};

export default Dashboard;