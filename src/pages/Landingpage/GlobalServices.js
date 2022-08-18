import React,{useEffect} from 'react';
import GlobalService from './GlobalService';
import AOS from "aos";
import "aos/dist/aos.css";

const GlobalServices = () => {
   
  useEffect(() => {
   AOS.init({ duration: 1000 });
 }, []);
    return (
        <section data-aos="fade-in" className=' px-4 lg:px-28'>
           <h1 className='lg:text-5xl text-3xl text-base-300 font-bold text-center mb-3 '>Our Global Services</h1>
            <p className='text-gray-400  text-lg lg:w-[34%] text-center mx-auto'>We are providing our clients two cards for their one  mission and finance.</p>
              <div className='grid md:grid-cols-3 lg:grid-cols-3  lg:gap-x-40 gap-12 lg:mt-28'>

             <div>
                <GlobalService serviceDescription="Send a secure bank transfer directly to hundreds of major bank  worldwide" serviceTitle="Money Transfer" />
                <GlobalService serviceDescription="Send direct to mobile money accounts across the globe, within minutes" serviceTitle="Mobile Money" />
             </div>
             <div>
                <img className='w-12/12 mx-auto' src="https://www.bgci.org/tree-search/img/globe.png" alt="" />
             </div>
             <div>
                <GlobalService serviceDescription="Cash is available to collect within minutes from many locations across the country" serviceTitle="Cash Pickup" />
                <GlobalService serviceDescription="Add mobile airtime instantly to any phone on hundreds of networks across    75+ countries." serviceTitle="Airtime Top Up" />
             </div>
              </div>
           
        </section>
    );
};

export default GlobalServices;