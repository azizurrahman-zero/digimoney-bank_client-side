import React, { useState } from 'react';
import TransectionRow from './TransectionRow';
import useUserInfo from "../../hooks/useUserInfo";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import useFindTransection from '../../hooks/useFindTransection';
import { useEffect } from 'react';
import useTransection from '../../hooks/useTransection';

const Transection = () => {
    const [user]=useAuthState(auth)
    const {userInfo,isLoading}=useUserInfo(user)
   
    const [page,setPage]=useState(1)
    const {pageCount,setPageCount}=useFindTransection(userInfo)
   
    const {transection}=useTransection(userInfo,page)
   
    
  
 
    return (
        <div>
            <h1 className='text-3xl font-bold text-black'>Total Transection</h1>
            <section className="mt-12 shadow-2xl rounded-2xl">
        
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            <tbody>
              {transection?.map((rowdata,i) => (
                <TransectionRow key={i} userInfo={userInfo} rowdata={rowdata} />
              ))}
            </tbody>
          </table>
          {/* pagenation div  */}
          <div className="text-center my-8">
             {
              [...Array(pageCount).keys()].map(number=>(
                <button
                
                key={number}
                className={page===number+1?'bg-[#6160DC] text-white  w-8 h-8 mr-2':'border-[#6160DC] border-2 w-8 h-8 mr-2'} 
                onClick={()=>setPage(number+1)}
                >
                  {number+1}
                </button>
              ))
            } 

           
            </div>
          {/* pagenation div  */}
        </div>
      </section>
        </div>
    );
};

export default Transection;