import React from 'react';
import {useNavigate} from 'react-router-dom'

const AccountUnderVerication = () => {
    const navigate=useNavigate()
    return (
        <div className='h-[100vh] w-[100%] flex justify-center items-center'>
              <div className=' bg-[#C70A9F] h-[500px] custom-border w-[450px] flex flex-col justify-center'>
                <div className='w-8/12 mx-auto'>

                <h1 className='mx-auto mb-4 text-white font-semibold'>Your account is under verificatin , please wait for the confirmation message</h1>
                <button onClick={()=>navigate("/")} className='btn btn-accent  mx-auto'>Go To Home</button>
                </div>

              </div>
        </div>
    );
};

export default AccountUnderVerication;