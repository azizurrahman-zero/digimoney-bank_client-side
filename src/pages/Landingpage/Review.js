import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";


   

const Review = ({review}) => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);
    return (
        <div data-aos="fade-in" className='shadow-lg py-16 rounded-xl bg-white'>
            <div className='px-12'>

            <h1 className='text-2xl  font-bold'>{review.title}</h1>
            <p className='text-lg my-8 text-gray-500'>{review.comment}</p>
            </div>
            <div className='flex gap-x-8 lg:ml-[-45px] px-12 lg:px-0 mt-12 items-center'>
                   <div className="avatar">
                       <div className="w-24 rounded">
                           <img className='border-[#073A42] border' src={review.src} alt="" />
                        </div>
                    </div>

                    <div >
                        <h1 className='text-lg font-bold'>{review.name}</h1>
                        <h1 className='text-gray-500'>{review.address}</h1>
                    </div>
            </div>
        </div>
    );
};

export default Review;