import React from 'react';

const Profile = () => {
    return (
        <div className='ml-5'>
            <h1 className='text-2xl font-bold mb-3'>Profile</h1>
            <div>
                <div class="avatar">
                    <div class="w-24 rounded-full">
                      <img src="https://placeimg.com/192/192/people" />
                    </div>
                </div>
            </div>
            <div>
                <h2 className="text-xl font-semibold">User Name</h2>
                <p>Account Type:</p>
                <p>Phone</p>
                <p>Email</p>
                <p>Address</p>
            </div>
        </div>
    );
};

export default Profile;