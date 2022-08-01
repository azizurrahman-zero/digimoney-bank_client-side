
import React, { useState } from 'react';
 import {BsFillArrowLeftCircleFill} from 'react-icons/bs'
 import {AiOutlineUsergroupAdd,AiFillEdit} from 'react-icons/ai'
 import {FiSettings,FiLogOut} from 'react-icons/fi'
 import {FaMoneyCheck} from 'react-icons/fa'
 import {MdRateReview,MdDashboard} from 'react-icons/md'
 import {Outlet} from 'react-router-dom'


const Dashboard = () => {
    const [open,setOpen]=useState(true)
        const Menus=[
        {title:"Dashboard",src:<MdDashboard className='h-5 w-5' />},
        {title:"Review",src:<MdRateReview className='h-5 w-5'/>},
        {title:"Make Admin",src:<AiFillEdit className='h-5 w-5' />,gap:true},
        {title:"Transection",src:<FaMoneyCheck className='h-5 w-5' />},
        {title:"All User",src:<AiOutlineUsergroupAdd className='h-5 w-5'  />},
        {title:"Setting",src:<FiSettings className='h-5 w-5' />,setting:true},
      
    ]
    return (

      <div class="drawer drawer-mobile      rounded-3xl ">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col items-center justify-center">
      
       <Outlet />

        <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
      
      </div> 
      <div class="drawer-side  custom-sidebar">
        <label for="my-drawer-2" class="drawer-overlay "></label> 
      
           <ul className={`pt-6  ${!open?"w-20":"w-52"} p-5 bg-[#2366B5] `}>
           < BsFillArrowLeftCircleFill
              onClick={()=>setOpen(!open)}
              className={`absolute cursor-pointer
             -right-4  top-3 w-8 h-8 bg-white     rounded-full ${!open && 'rotate-180'}
             `} />
             <div className='mt-8'>

                   {
                     Menus.map((menu,i)=>(
                       <li className={`text-gray-300 ${!open&&"justify-center"} ${menu.gap?"mt-9":"mt-2"} ${menu.setting&& "mt-60"}  rounded-md text-sm flex items-center gap-x-4 p-2 cursor-pointer hover:bg-slate-500`} key={i}>
                            {menu.src} <span className={`${!open&&"hidden"} origin-left duration-200 text-md font-semibold`}>{menu.title}</span>
                        </li>
                    ))
                  }
                         <li className={`text-gray-300 ${!open&&"justify-center"}   rounded-md text-sm flex items-center gap-x-4 p-2 cursor-pointer hover:bg-slate-500`}>
                            <FiLogOut className='w-5 h-5' />
                            <span className={`${!open&&"hidden"} origin-left duration-200 text-md font-semibold`}>Logout</span>
                        </li>
                  </div>
             </ul> 
      
      </div>
    </div>
    );
};

export default Dashboard;