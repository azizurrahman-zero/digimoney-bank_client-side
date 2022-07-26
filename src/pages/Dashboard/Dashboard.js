
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom'
import { BsArrowLeftCircle } from 'react-icons/bs'
import { RiBarChartHorizontalLine } from 'react-icons/ri'
import { AiOutlineUsergroupAdd, AiFillHome } from 'react-icons/ai'
import {  FiLogOut } from 'react-icons/fi'
import { FaMoneyCheck,FaMoneyBill, FaUsers } from 'react-icons/fa'
import { MdRateReview, MdDashboard } from 'react-icons/md'
import { ImProfile } from 'react-icons/im'
import { Outlet } from 'react-router-dom'
import DashboardMenu from './DashboardMenu';
import './dashboard.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import { signOut } from 'firebase/auth';
import { useDispatch,useSelector } from 'react-redux';
import { fetchApprovedUser } from '../../redux/reducers/ApprovedUsersReducers';
import AccountUnderVerication from './AccountUnderVerication';


const Dashboard = () => {
  const [user]=useAuthState(auth)
  //check if approved user
  const dispatch=useDispatch()
  const check =useSelector(state=>state.checkUser)
  useEffect(()=>{
    dispatch(fetchApprovedUser({email:user?.email}))
    },[dispatch,user?.email])
 const {userexist,loading}= check?.checkUser

  const logout = () => {
    signOut(auth);
  };
  const { pathname } = useLocation()
  const {admin,loadingAdmin}=useAdmin(user)

  const [open, setOpen] = useState(true)
  const Menus = [

    {isAdmin:true,dualUser:true, title: "Go To Home", path: "/", src: <AiFillHome className='w-5 h-5' /> },
    {isAdmin:true,dualUser:true, title: "Dashboard", path: "/dashboard", src: <MdDashboard className='w-5 h-5' /> },
    {isAdmin:true, title: "User Request", path: "/dashboard/user-request", src: <AiOutlineUsergroupAdd className='w-5 h-5' />, gap: true },
    {isAdmin:false, title: "Balance", path: "/dashboard/balance", src: <FaMoneyBill className='w-5 h-5' /> },
    {isAdmin:false, title: "Review", path: "/dashboard/review", src: <MdRateReview className='w-5 h-5' /> },
    {isAdmin:false, title: "Transection", path: "/dashboard/transection", src: <FaMoneyCheck className='w-5 h-5' /> },
    {isAdmin:true, title: "Find Transection", path: "/dashboard/findtransection", src: <FaMoneyCheck className='w-5 h-5' /> },
    {isAdmin:true, title: "All User", path: "/dashboard/allusers", src: <FaUsers className='w-5 h-5' /> },
  
    {isAdmin:false, title: "Send Money", path: "/dashboard/sendmoney", src: <FaMoneyCheck className='w-5 h-5' /> },
    {isAdmin:true, dualUser:true, title: "Profile", path: "/dashboard/profile", src: <ImProfile className='w-5 h-5' /> },
  

  ]
  if(loadingAdmin || loading){
    return ;
  }
 if(!userexist){
  return <AccountUnderVerication />
 }

  return (

    <div className="drawer drawer-mobile  ">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content custom-scroll">

        <label htmlFor="my-drawer-2" className="block mx-8 mt-3 drawer-button lg:hidden">
          < RiBarChartHorizontalLine
            htmlFor="my-drawer-2"

            className={` cursor-pointer block ml-auto
              w-8 h-8 text-black     rounded-full ${!open && 'rotate-180'}
             `} />
        </label>
        <div className='min-h-screen lg:pt-5 bg-base-100 lg:px-5 lg:pl-16'>

          {!pathname.includes("dashboard/") && <DashboardMenu />}
          <Outlet />
        </div>


      </div>
      <div className="duration-100 drawer-side custom-sidebar ">
        <label htmlFor="my-drawer-2" className="drawer-overlay "></label>

        <ul className={`pt-6   ${!open ? "w-20" : "w-52"} duration-100    p-5 bg-[#6160DC] `}>
          < BsArrowLeftCircle
            onClick={() => setOpen(!open)}
            className={`absolute cursor-pointer
             -right-3  top-3 w-8 h-8 bg-black text-white    rounded-full ${!open && 'rotate-180'}
             `} />
          <div className='mt-8'>

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
            <li onClick={logout} className={` text-white font-bold ${!open && "justify-center"}   rounded-md text-sm flex items-center gap-x-4 p-2 cursor-pointer hover:bg-red-700`}>
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