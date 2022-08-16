import React from 'react';
import TransectionRow from './TransectionRow';
import useUserInfo from "../../hooks/useUserInfo";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import moment from "moment";

const Transection = () => {
    const [user]=useAuthState(auth)
    const {userInfo,isLoading}=useUserInfo(user)
    
   
    const transection=userInfo?.transection
    let sortedTransection=[];
    if(transection?.length>0){
  
      sortedTransection = [...transection].sort((a,b) =>new moment(a.date).format('YYYYMMDD') - new moment(b.date).format('YYYYMMDD'))
    }
  
    console.log(sortedTransection.reverse());
    return (
        <div>
            <h1 className='text-3xl font-bold text-black'>Total Transection</h1>
            <section className="mt-12 shadow-2xl rounded-2xl">
        
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            <tbody>
              {transection?.length>0 && sortedTransection?.map((rowdata,i) => (
                <TransectionRow key={i} userInfo={userInfo} rowdata={rowdata} />
              ))}
            </tbody>
          </table>
        </div>
      </section>
        </div>
    );
};

export default Transection;