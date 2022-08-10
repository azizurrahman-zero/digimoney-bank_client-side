import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Profile = () => {

    const [user] = useAuthState(auth);
    return (
        <div>
            <h1 className='text-[#2366B5] text-3xl font-bold mb-5 underline'>My Profile</h1>
            <div className='flex gap-x-10'>


                <img className='w-[25vh]' src="https://cdn.pixabay.com/photo/2014/07/09/10/04/man-388104_960_720.jpg" alt="" />

                <div className='flex flex-col justify-end'>
                    <label className='bg-[#2366B5] text-white w-fit px-10 p-2 rounded-lg' htmlFor="upload">Choose a file</label>
                    <input className='hidden' id='upload' type="file" />
                    <p className='text-xs mt-2'>Acceptable formates jpg png only <br />
                        Max file size is 500kb and nim size 70kb
                    </p>
                </div>
            </div>
            <div className='mt-8'>
                <h1 className='text-3xl  font-semibold'>Account information</h1>
                <div className='flex items-center gap-x-4 mt-8'>
                    <label className='w-[250px] text-xl'>First Name </label>
                    <input className='input input-primary border-[#2366B5] rounded-none pr-32 focus:outline-none' type="text" value={user.displayName} />
                </div>
                <div className='flex items-center gap-x-4 mt-8'>
                    <label className='w-[250px] text-xl'>Last Name </label>
                    <input className='input input-primary border-[#2366B5] rounded-none pr-32 focus:outline-none' type="text" value="Hasan" />
                </div>
                <div className='flex items-center gap-x-4 mt-8'>
                    <label className='w-[250px] text-xl'>Email </label>
                    <input className='input input-primary border-[#2366B5] pr-32 rounded-none focus:outline-none' type="email" value={user.email} />
                </div>
            </div>
            <div className='mt-8'>
                <h1 className='uppercase text-3xl font-semibold'>Change password</h1>
                <form action="" >
                    <div className='flex items-center gap-x-4 mt-8'>
                        <label className='w-[250px] text-xl'>Current Password </label>
                        <input className='input input-primary border-[#2366B5] rounded-none pr-32 focus:outline-none' type="text" value="Istiak Hasan" />
                    </div>
                    <div className='flex items-center gap-x-4 mt-8'>
                        <label className='w-[250px] text-xl'>New Password </label>
                        <input className='input input-primary border-[#2366B5] rounded-none pr-32 focus:outline-none' type="text" value="Istiak Hasan" />
                    </div>
                    <div className='flex items-center gap-x-4 mt-8'>
                        <label className='w-[250px] text-xl'>Confirm Password </label>
                        <input className='input input-primary border-[#2366B5] rounded-none pr-32 focus:outline-none' type="text" value="Istiak Hasan" />
                    </div>
                    <div className='flex items-center gap-x-4 mt-8'>
                        <label className='w-[250px] text-xl'> </label>

                        <button className='btn btn-primary w-[300px] bg-[#2366B5] border-none text-white font-bold  hover:bg-[#2366B5] block '>Confirm</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Profile;