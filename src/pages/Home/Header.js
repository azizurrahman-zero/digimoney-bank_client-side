import React from 'react';
import Menubar from '../../Shared/Menubar';
import {BsBank} from 'react-icons/bs'
import BannerSlider from './BannerSlider';

const Header = () => {
    return (
        <header>
            <div className='flex justify-between items-center header-top mb-1 p-2'>
                    <div className='flex items-center'>
                         <BsBank className='w-16 text-white h-16' />
                         <h1 className='text-5xl text-white ml-5'>Digimoney Bank</h1>
                    </div>
                    <div >
                         <div className='flex  bg-[rgba(0,0,0,0.9)] text-white items-center justify-between'>
                            <h1 className='bg-[#73061A] px-4 text-md register-button'>Regester Here</h1>
                            <p className='text-md px-2'>Make here your online transactions!</p>
                         </div>
                         <div className='flex py-8 px-2 rounded  bg-[rgba(0,0,0,0.6)]'>
                            
                            <select class="select   rounded-none mr-1">
                                        <option disabled selected>Card Type</option>
                                        <option>Card number one  asdfsaf adfadsf</option>
                                        <option>Marge</option>
                                        <option>Bart</option>
                                        <option>Lisa</option>
                                        <option>Maggie</option>
                            </select>
                            <select class="select   rounded-none mr-1">
                                        <option disabled selected>Number of Document</option>
                                        <option>Card number one  asdfsaf adfadsf</option>
                                        <option>Marge</option>
                                        <option>Bart</option>
                                        <option>Lisa</option>
                                        <option>Maggie</option>
                            </select>
                            
                            <button className='btn bg-[#73061A] rounded-none'>Go</button>
                         </div>
                    </div>
            </div>
           <Menubar /> 
           <div className='grid grid-cols-6 mt-2'>
             <div className='col-span-4'>

             <BannerSlider />
             </div>
             <div className=' col-span-2  border-red-100 flex justify-center items-center'>

                         <div  className='bg-secondary h-[98%] flex justify-center items-center  w-[95%] ml-auto py-10 px-5'>
                            <form action="">

                            <input type="text" className='input input-primary w-full mb-6'  placeholder='Your Name'/>
                            <input type="text" className='input input-primary w-full mb-6'  placeholder='Your Email'/>
                            <input type="text" className='input input-primary w-full mb-6' placeholder='Phone Number'/>
                            
                            <button className='btn btn-primary w-full'>Request A Quote</button>
                            </form>
                         </div>
             </div>
           </div>
        </header>
    );
};

export default Header;