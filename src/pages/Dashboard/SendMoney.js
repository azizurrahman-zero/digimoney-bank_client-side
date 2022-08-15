import React from 'react';

import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const SendMoney = () => {
    const [user]=useAuthState(auth)
    const handleSubmit=(e)=>{
        e.preventDefault()
        const amount=e.target.amount.value 
        const confirmAmount=e.target.confirmAmount.value 

        if(amount!==confirmAmount){
            console.log("amount don't match")
            return
        }
        const transferData={
             accountNumber:e.target.accountNumber.value ,
             amount
        }
     
        const url=`http://localhost:4000/transfer?email=${user?.email}`
        console.log(url)
         fetch(url,{
            method:"PATCH",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(transferData)
         })
        
    }
    return (
        <div>
            <h1 className="text-[#2366B5] text-3xl font-bold mb-5 underline">
                Send Money
            </h1>
            <form onSubmit={handleSubmit}>
                <div className="flex items-center gap-x-4 mt-8">
                    <label className="w-[250px] text-xl">Account Number</label>
                    <input
                         name='accountNumber'
                        className="input input-primary border-[#2366B5] rounded-none pr-32 focus:outline-none"
                        type="text"
                        placeholder="***"
                    />
                </div>
                <div className="flex items-center gap-x-4 mt-8">
                    <label className="w-[250px] text-xl">Amount </label>
                    <input
                        name='amount'
                        className="input input-primary border-[#2366B5] rounded-none pr-32 focus:outline-none"
                        type="text"
                        placeholder="$"
                    />
                </div>
                <div className="flex items-center gap-x-4 mt-8">
                    <label className="w-[250px] text-xl">Confirm Amount </label>
                    <input
                       name='confirmAmount'
                        className="input input-primary border-[#2366B5] rounded-none pr-32 focus:outline-none"
                        type="text"
                        placeholder="$"
                    />
                </div>
                <div className="flex items-center gap-x-4 mt-8">
                    <label className="w-[250px] text-xl"> </label>

                    <button className="btn btn-primary w-[300px] bg-[#2366B5] border-none text-white font-bold  hover:bg-[#2366B5] block ">
                        Send
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SendMoney;