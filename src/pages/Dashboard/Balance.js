import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';

const Balance = () => {

    const [userEmail,setUserEmail]=useState({});
    const [user]=useAuthState(auth)
    useEffect(()=>{
        if (user) {
            fetch(`http://localhost:4000/finduser?email=${user.email}`)
        .then(res=>res.json())
        .then(data=>setUserEmail(data))
        }
    },[user])
    console.log(userEmail);

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        if (userEmail.amount>data.withdrawAmount) {
           const newAmount = userEmail.amount-data.withdrawAmount;
           const updatedAmount={amount:newAmount}
           const url=`http://localhost:4000/approvedUsers/${userEmail._id}`;
          fetch(url,{ 
               method:'PATCH',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(updatedAmount)
            })
            .then(res=>res.json())
            .then(result=>{console.log(result);})
        }
        else{
            console.log('You cannot withdraw');
        }
    };
      

    return (
      <div>
      {/* balance card  */}
      <div class="card balance-card  bg-[#6160DC] text-gray-200">
          <div class=" p-5">
              <p className="text-xl">
                  <small>My Balance</small>
              </p>

              <h2 class="card-title text-3xl mb-5">{userEmail.amount}</h2>
              <p className="text-end font-bold">{userEmail.amount}</p>

              <div class="card-actions gap-x-10 mt-5">
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
      <div class="card card-side bg-base-100 shadow-xl mt-10">
          <div class="card-body">
              <h2 class="card-title">Withdraw</h2>

              <form onSubmit={handleSubmit(onSubmit)}>
                  <label class="label">
                      <span class="label-text">Amount to withdraw</span>
                  </label>
                  <input type="number" placeholder="Provide Amount" class="input input-bordered w-full max-w-xs" {...register("withdrawAmount")} />
                  <input class="btn btn-primary ml-4"  type="submit" />
              </form>

          </div>
      </div>
  </div>

    );
};

export default Balance;