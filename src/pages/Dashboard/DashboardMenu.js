import React from 'react';
import {AiOutlineArrowDown} from 'react-icons/ai'

const DashboardMenu = () => {
    return (
        
        <div class="navbar bg-base-100">
  <div class="flex-1">
  <input type="text" placeholder="Search..." class="input  outline-none border-b-4 focus:outline-none  border-[#2366B5] input-primary w-full max-w-xs" />
  </div>
  <div class="flex-none">
        
    <div class="dropdown dropdown-end ">
     <div className='flex items-center g-x-2 px-2 bg-[#2366B5] text-white font-semibold border-2 rounded-full'>
     <AiOutlineArrowDown />
     <p className='text-sm'>Istiak Hasan</p>
      <label tabindex="0" class="btn btn-ghost btn-circle avatar flex">
        
        <div class="w-8 rounded-full">
       
          <img src="https://placeimg.com/80/80/people" />
        </div>
      </label>
     </div>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a class="justify-between">
            Profile
            <span class="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
       
    );
};

export default DashboardMenu;