import React from 'react';
import Menubar from '../../Shared/Menubar';
import {BsBank} from 'react-icons/bs'

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
                            <p>Make here your online transactions!</p>
                         </div>
                         <div className='flex py-8 px-2 rounded  bg-[rgba(0,0,0,0.6)]'>
                            <input type="text" className='input rounded-none mr-1' placeholder='whire something'/>
                            <input type="text" className='input rounded-none mr-1' placeholder='whire something'/>
                            <button className='btn bg-[#73061A] rounded-none'>Go</button>
                         </div>
                    </div>
            </div>
           <Menubar /> 
        </header>
    );
};

export default Header;