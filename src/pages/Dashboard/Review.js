import React from 'react';

const Review = () => {
    return (
        <div className=''>
            <form className='w-8/12' action="">
            <div className='mt-32'>

            <input className='input input-primary w-full p-8 focus:outline-none pl-10 border-[#2366B5]' type="text" placeholder='Your Name...' />
            </div>
            <div className='mt-5'>

            <input className='input input-primary w-full p-8 focus:outline-none pl-10 border-[#2366B5]' type="text" placeholder='Your Email...' />
            </div>
            <div className='mt-5'>

            <textarea class="textarea textarea-primary pl-10 pt-8 border-[#2366B5] focus:outline-none w-full" rows={"8"} placeholder="Description..."></textarea>
            </div>
            <button className='block ml-auto btn btn-primary w-full lg:w-5/12 mt-5 bg-[#2366B5] hover:bg-[#0e2e54] border-none text-white'>Submit</button>
            </form>
        </div>
    );
};

export default Review;