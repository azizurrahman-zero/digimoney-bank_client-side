
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'
import { BsArrowLeftCircle } from 'react-icons/bs'
import { RiBarChartHorizontalLine } from 'react-icons/ri'
import { AiOutlineUsergroupAdd, AiFillHome } from 'react-icons/ai'
import { FiSettings, FiLogOut } from 'react-icons/fi'
import { FaMoneyCheck,FaMoneyBill, FaUsers } from 'react-icons/fa'
import { MdRateReview, MdDashboard, MdAdminPanelSettings } from 'react-icons/md'
import { ImProfile } from 'react-icons/im'
import { Outlet } from 'react-router-dom'
import DashboardMenu from './DashboardMenu';
import './dashboard.css'

import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import { signOut } from 'firebase/auth';


const Dashboard = () => {
  const logout = () => {
    signOut(auth);
  };
  const { pathname } = useLocation()
  const [user]=useAuthState(auth)
  const {admin}=useAdmin(user)
  console.log(admin,"check admin from dashboard")
  const [open, setOpen] = useState(true)
  const Menus = [

    {isAdmin:true,dualUser:true, title: "Go To Home", path: "/", src: <AiFillHome className='w-5 h-5' /> },
    {isAdmin:true,dualUser:true, title: "Dashboard", path: "/dashboard", src: <MdDashboard className='w-5 h-5' /> },
    {isAdmin:true, title: "User Request", path: "/dashboard/user-request", src: <AiOutlineUsergroupAdd className='w-5 h-5' />, gap: true },
    {isAdmin:false, title: "Balance", path: "/dashboard/balance", src: <FaMoneyBill className='w-5 h-5' /> },
    {isAdmin:false, title: "Review", path: "/dashboard/review", src: <MdRateReview className='w-5 h-5' /> },
    {isAdmin:false, title: "Transection", path: "/dashboard/transection", src: <FaMoneyCheck className='w-5 h-5' /> },
    {isAdmin:true, title: "All User", path: "/dashboard/allusers", src: <FaUsers className='w-5 h-5' /> },
    {isAdmin:true, title: "All Admin", path: "/", src: <MdAdminPanelSettings className='w-5 h-5' />, gap: true },
    {isAdmin:false, title: "Send Money", path: "/dashboard/sendmoney", src: <FaMoneyCheck className='w-5 h-5' /> },
    {isAdmin:true, title: "Profile", path: "/dashboard/profile", src: <ImProfile className='w-5 h-5' /> },
    {isAdmin:true, title: "Setting", path: "/", src: <FiSettings className='w-5 h-5' />, setting: true },

  ]
  return (

    <div className="drawer drawer-mobile rounded-3xl ">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content custom-scroll">

        <label htmlFor="my-drawer-2" className="block mx-8 mt-3 drawer-button lg:hidden">
          < RiBarChartHorizontalLine
            htmlFor="my-drawer-2"

            className={` cursor-pointer block ml-auto
              w-8 h-8 text-black     rounded-full ${!open && 'rotate-180'}
             `} />
        </label>
        <div className='min-h-screen pt-5 bg-white lg:px-5 lg:pl-16'>

          {!pathname.includes("dashboard/") && <DashboardMenu />}
          <Outlet />
        </div>


      </div>
      <div className="duration-100 drawer-side custom-sidebar ">
        <label htmlFor="my-drawer-2" className="drawer-overlay "></label>

        <ul className={`pt-6   ${!open ? "w-20" : "w-52"} duration-75    p-5 bg-[#6160DC] `}>
          < BsArrowLeftCircle
            onClick={() => setOpen(!open)}
            className={`absolute cursor-pointer
             -right-3  top-3 w-8 h-8 bg-black text-white    rounded-full ${!open && 'rotate-180'}
             `} />
          <div className='mt-8 duration-300'>

            {
              Menus.map((menu,i) => (
               <>
               {(admin === menu?.isAdmin || menu.dualUser )&&
                 <Link key={menu.id} to={menu?.path}> <li  className={`text-gray-300 ${!open && "justify-center"}    rounded-md text-sm flex items-center gap-x-4 p-2 cursor-pointer hover:bg-slate-500`} key={i}>
                 {menu.src} <span className={`${!open && "hidden"} origin-left  text-md font-bold`}>{menu.title}</span>
               </li>
               </Link>
               }
               
               
               </>
              ))
            }
            <li className={` text-white font-bold ${!open && "justify-center"}   rounded-md text-sm flex items-center gap-x-4 p-2 cursor-pointer hover:bg-red-700`}>
              <FiLogOut className='w-5 h-5' />
              <span onClick={logout} className={`${!open && "hidden"} origin-left duration-200 text-md font-semibold`}>Logout</span>
            </li>
          </div>
        </ul>

      </div>
    </div>
  );
};

export default Dashboard;