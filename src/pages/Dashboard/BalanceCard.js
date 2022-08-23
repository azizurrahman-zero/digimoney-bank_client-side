import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useUserInfo from '../../hooks/useUserInfo';

const BalanceCard = () => {
  const [user]=useAuthState(auth)
  const {userInfo,isLoading} =useUserInfo(user)

  if(isLoading){
    return ;
  }
    return (
        <div className="card balance-card  bg-[#6160DC] text-gray-200">
          <div className=" p-5">
            <p className="text-xl">
              <small>My Balance</small>
            </p>

            <h2 className="card-title text-3xl mb-5">${userInfo.amount}</h2>
            <p className="text-end font-bold">{userInfo.accountNumber}</p>

            <div className="card-actions gap-x-10 mt-5">
              <div>
                <p className="text-xs font-[500]">Card Holder</p>
                <h1 className="text-lg font-bold">{userInfo.displayName}</h1>
              </div>
              <div>
                <p className="text-xs font-[500]">Valid Thru</p>
                <h1 className="text-lg font-bold">03/21</h1>
              </div>
            </div>
          </div>
        </div>
    );
};

export default BalanceCard;