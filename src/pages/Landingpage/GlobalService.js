
import React,{useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";


   






const GlobalService = ({serviceTitle,serviceDescription}) => {
    
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
    return (
        <div data-aos="fade-in" className="mb-6 rounded-lg cursor-pointer min-h-[160px] global-card border-base-300 border-[1px]    bg-base-100 shadow-xl px-6 py-6 h-auto">
         <div className='relative z-50'>

          <h2 className="text-xl font-bold text-base-300 custom-hover">{serviceTitle}</h2>
          <p className='text-gray-500  w-[90%] custom-hover' >{serviceDescription}</p>
         </div>
         <div className='overlaytwo'></div>
         
        
        </div>
    );
};

export default GlobalService;