import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import BalanceCard from './BalanceCard';

const Balance = () => {
    const [user]=useAuthState(auth)
    const email=user?.email
    const handleSubmit=(e)=>{
        console.log(email)
      

            const url=`http://localhost:4000/user?email=${email}`
            e.preventDefault()
            const data={
                amount:e.target.amount.value ,
                accountNumber:e.target.account.value
                
            }
            fetch(url,{
                method:"PATCH",
                headers:{
                    "content-type":"application/json"
                },
                body:JSON.stringify(data)
            })
            .then(res=>res.json())
            .then(data=>console.log(data))
        
    
    }
    return (
        <div className=''>
             <div className=' grid grid-cols-2 gap-x-5'>

             <BalanceCard />
            <div>
                <h1>Transfer Balance</h1>
                <form onSubmit={handleSubmit}>
                    <input name='account' className='input input-primary' type="text" placeholder='account number' /><br />
                    <input name="amount" className='input input-primary mt-2' type="text" placeholder='amount' /><br />
                    <button className='btn btn-primary mt-2' type='submit'>Transfer</button>
                </form>
            </div>
             </div>
        </div>
    );
};

export default Balance;