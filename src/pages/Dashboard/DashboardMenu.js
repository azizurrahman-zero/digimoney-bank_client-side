import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import {AiOutlineArrowDown} from 'react-icons/ai'
import auth from '../../firebase.init';

const DashboardMenu = () => {
  const [user]=useAuthState(auth)
    return (
        
        <div className="navbar bg-base-100 m-0 p-0">
  <div className="flex-1">
  <input type="text" placeholder="Search..." className="input  outline-none border-b-4 focus:outline-none  border-[#2366B5] input-primary w-full max-w-xs" />
  </div>
  <div className="flex-none">
        
    <div className="dropdown dropdown-end ">
     <div className='flex items-center g-x-2 px-2 bg-[#2366B5] text-white font-semibold border-2 rounded-full'>
     <AiOutlineArrowDown />
     <p className='text-sm'>{user?.displayName}</p>
      <label tabindex="0" className="btn btn-ghost btn-circle avatar flex">
        
        <div className="w-8 rounded-full">
       
          <img src="https://placeimg.com/80/80/people" />
        </div>
      </label>
     </div>
      <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li onClick={()=>signOut(auth)}><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
       
    );
};

export default DashboardMenu;