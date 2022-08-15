import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';
import {useQuery} from '@tanstack/react-query'

const Balance = () => {
    const [user]=useAuthState(auth)
    const url=`https://tranquil-lake-95777.herokuapp.com/finduser?email=${user?.email}`
    const {data:userEmail,isLoading,refetch}=useQuery([`singleuserdata${user?.email}`],()=>fetch(url).then(res=>res.json()))
    

    const { register, handleSubmit,reset } = useForm();
    const onSubmit = (data) => {
        console.log(data,"data")
        console.log(userEmail.amount,"amount")
        const withdrawAmount=parseFloat(data.withdrawAmount)
        if (userEmail.amount>withdrawAmount) {
           const newAmount = userEmail.amount-withdrawAmount;
           const updatedAmount={amount:newAmount}
           const url=`https://tranquil-lake-95777.herokuapp.com/approvedUsers/${userEmail._id}`;
          fetch(url,{ 
               method:'PATCH',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(updatedAmount)
            })
            .then(res=>res.json())
            .then(result=>{
                console.log(result,"this is result")
               refetch()
               reset()
            })
        }
        else{
            console.log('You cannot withdraw');
        }
    };
 
  if(isLoading){
    return ;
  }
      

    return (
      <div>
      {/* balance card  */}
      <div className="card balance-card  bg-[#6160DC] text-gray-200">
          <div className=" p-5">
              <p className="text-xl">
                  <small>My Balance</small>
              </p>

              <h2 className="card-title text-3xl mb-5">{userEmail.amount}</h2>
              <p className="text-end font-bold">{userEmail.amount}</p>

              <div className="card-actions gap-x-10 mt-5">
                  <div>
                      <p className="text-xs font-[500]">Card Holder</p>
                      <h1 className="text-lg font-bold">{userEmail.displayName}</h1>
                  </div>
                  <div>
                      <p className="text-xs font-[500]">Valid Thru</p>
                      <h1 className="text-lg font-bold">03/21</h1>
                  </div>
              </div>
          </div>
      </div>
      {/* withdraw card */}
      <div className="card card-side bg-base-100 shadow-xl mt-10">
          <div className="card-body">
              <h2 className="card-title">Withdraw</h2>

              <form onSubmit={handleSubmit(onSubmit)}>
                  <label className="label">
                      <span className="label-text">Amount to withdraw</span>
                  </label>
                  <input type="number" placeholder="Provide Amount" className="input input-bordered w-full max-w-xs" {...register("withdrawAmount")} />
                  <input className="btn btn-primary ml-4"  type="submit" />
              </form>

          </div>
      </div>
  </div>

    );
};

export default Balance;