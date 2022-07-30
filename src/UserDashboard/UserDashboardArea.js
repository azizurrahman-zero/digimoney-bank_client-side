import React from 'react';
import './UserDashboardArea.css'
import { Link, Outlet } from 'react-router-dom';



const UserDashboardArea = () => {


    
    return (
        <div className='md:flex my-5'>
            {/* Left Side  */}
            <div className="flex-none left-side bg-gray-300 p-6">
                <Link to={'summary'} className='bg-white px-4 py-1 block'>Summary</Link>
                <Link to={'profile'} className=' px-4 py-1 block'>Profile</Link>
            </div>
            {/* Middle Side  */}
            <div className="grow right-side p-6">
                <Outlet></Outlet>
            </div>
            
        </div>
    );
};

export default UserDashboardArea;