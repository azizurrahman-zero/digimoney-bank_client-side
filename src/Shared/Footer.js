import React, { useEffect } from 'react';
import './footer.css'

import { AiOutlineArrowRight} from 'react-icons/ai'
import AOS from "aos";
import "aos/dist/aos.css";
const Footer = () => { 
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
    return (
        <footer data-aos="fade-in" className='bg-primary mt-4 lg:px-28 px-4 py-16'>

            <div className='grid lg:grid-cols-3'>
                <div>
                   <h1 className='text-lg font-bold text-white'>DigiMoney</h1>

                    <p className='text-md text-gray-400 mt-10'>Subscribe to keep up with <br />the latest news</p>
                    <div className='flex items-center my-4 gap-x-2 '>
                        <input className='input border-none focus:outline-none w-7/12 input-primary rounded-none' type="text" placeholder='Enter your email here' />
                        <AiOutlineArrowRight className='text-white bg-secondary  w-12 h-[100%] ' />
                    </div>
                    <p className='text-gray-400'>By submitting this form , you acknwledge that <br />
                    you have the terms of our privacy statement</p>
                </div>
                <div >
                    <div className='w-fit lg:mx-auto mt-5'>
                    
                        
                    <h1 className='text-lg font-bold text-white'>Solution</h1>
                    <p className='text-gray-400 mt-4'>Bank Assets</p>
                    <p className='text-gray-400 mt-4'>ARS Network</p>
                    <p className='text-gray-400 mt-4'>Mobile Bank</p>
                    <p className='text-gray-400 mt-4'>Open Finance APIs</p>
                    </div>
                </div>
                <div>
                    <div className='w-fit lg:mx-auto mt-5'>

                    <h1 className='text-lg font-bold text-white'>Company</h1>
                    <p className='text-gray-400 mt-4'>About Us</p>
                    <p className='text-gray-400 mt-4'>Careers</p>
                    <p className='text-gray-400 mt-4'>Contact Us</p>
                    <p className='text-gray-400 mt-4'>News & Insights</p>
                    </div>
                </div>
             
            </div>


  
        </footer>
    );
};

export default Footer;