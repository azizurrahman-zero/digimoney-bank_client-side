import React from 'react';

const GlobalService = ({serviceTitle,serviceDescription}) => {
    return (
        <div class="mb-6 rounded-lg cursor-pointer min-h-[160px] global-card    bg-base-100 shadow-xl px-6 py-6 h-auto">
         <div className='relative z-50'>

          <h2 class="text-xl font-bold text-[#010C27] custom-hover">{serviceTitle}</h2>
          <p className='text-gray-500  w-[90%] custom-hover' >{serviceDescription}</p>
         </div>
         <div className='overlaytwo'></div>
         
        
        </div>
    );
};

export default GlobalService;