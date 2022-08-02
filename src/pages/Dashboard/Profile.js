import React from 'react';

const Profile = () => {
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
            <div>
                <h1 className='text-3xl text-black'>Account information</h1>
                <div>
                    
                </div>
            </div>
        </div>
    );
};

export default Profile;