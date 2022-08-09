import React, { useEffect } from 'react';
import Menubar from '../../Shared/Menubar';
import BankAdvantage from './BankAdvantage';
import {FiChevronRight} from 'react-icons/fi'
import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);
    return (
        <header  className='bg-[rgb(7,58,66)] min-h-screen lg:px-28  px-4'>
            <div className='walpaper'>

            <div><span className='dot'></span> </div>
            <div><span className='dot'></span> </div>
          
            </div>
            <Menubar />
            <div className='grid md:grid-cols-2 relative z-50    mt-4 lg:mt-10'>
                 <div data-aos="zoom-in" className=' '>
                    <h1 className='text-white text-4xl lg:text-8xl font-bold'>Your Next <br /> Online Bank.</h1>
                    <hr className='h-[3px] w-[80%] my-10 bg-white' />
                    <div className='grid grid-cols-3 lg:w-[95%]'>
                        <BankAdvantage advantage="Faster finance transaction" score="6X" />
                        <BankAdvantage advantage="Faster finance transaction" score="-15%" />
                        <BankAdvantage advantage="Faster finance transaction" score="3M+" />
                    </div>
                    <div className='mt-16 flex relative z-50 items-center gap-x-3 lg:gap-x-10'>
                    <button className='btn btn-primary  py-3 rounded-none h-auto text-[#073A42] bg-[#F8BF88] border-none font-bold'>Download Now</button>
                    <div className='flex items-center gap-x-3 '>
                       <img className='h-14' src="https://cdn.picpng.com/icon/play-icon-free-wallpaper-vector-65968.png" alt="" />
                       <span className='text-white font-semibold text-lg'>How its work</span>
                    </div>
                    </div>
                 </div>
                 <div data-aos="zoom-in" className='header-left my-20 lg:my-0'>
                     <div className='bg-white banking   w-[330px] py-6 mx-auto'>
                        <div className='px-6'>
                        <p className='text-md'>Log in to Internet Banking</p>
                        <div className='flex gap-x-3 my-3'>
                            <button className='btn btn-primary px-8 py-3 h-auto text-[#073A42] bg-[#F8BF88] border-none font-bold'>Personal</button>
                            <button className='btn btn-primary px-8 py-5 h-auto bg-[#FF9F88] border-none text-[#073A42] font-bold'>Business</button>
                        </div>
                        </div>
                   
                        <p className='my-5 flex items-center justify-between px-6'><span className='w-9/12'>Your Car Finance  options </span> <FiChevronRight /></p>
                        <hr />
                        <p className='my-5 flex items-center justify-between px-6'><span className='w-9/12'>Check your credit card eligibilty </span> <FiChevronRight /></p>
                        <hr />
                        <p className='my-5 flex items-center justify-between px-6'><span className='w-9/12'>Coronavirus: Help and Support </span> <FiChevronRight /></p>
                        <hr />
                        <p className='my-5 flex items-center justify-between px-6'><span className='w-9/12'>Find the right mortgage for you </span> <FiChevronRight /></p>

                       
                     </div>
                        <div className="wraper">
                        <div><span className='dot'></span> </div>
                        <div><span className='dot'></span> </div>
                       </div>
                 </div>
            </div>


            <div data-aos="zoom-in" className='grid md:grid-cols-3 lg:mt-96 pb-20 lg:pb-0 mt-52'>
                <div  className='banner-bottom'>
                  <img className=' mx-auto' src="https://www.thecentralamericangroup.com/wp-content/uploads/2018/10/Man-Transparent.png" alt="" />
                </div>
                <div className='flex justify-center items-center'>
                    <hr className='bg-white  w-[80%] mx-auto h-[1px]' />
                </div>
                <div className='flex items-center mt-10 lg:mt-0'>
                    <div>
                    <p className='text-lg text-gray-300'>Improve your finances</p>
                        
                    <h1 className='text-3xl text-white font-semibold mt-2'>100% flexible online banking platform that gives you more total finance control</h1>
                    </div>
                </div>
            </div>
            
        </header>
    );
};

export default Header;