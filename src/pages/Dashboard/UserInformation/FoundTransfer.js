import React from "react";
import { FaArrowRight } from 'react-icons/fa';

const FoundTransfer = ({userInfo}) => {
  const { amount, accountNumber } = userInfo;
  return (
    <>
      <input type="checkbox" id="found-transfer" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="found-transfer"
            className="absolute btn btn-sm btn-circle right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-2xl px-12">Found Transfer!</h3>
          <form action="">
            <div className="flex w-full my-5">
              <div className="grid h-20 flex-grow ">
              <label htmlFor="accountNumber">ACCOUNT NUMBER</label>
                <input
                  id="account-number"
                  name="accountNumber"
                  
                  value={accountNumber}
                  type="number"
                  disabled
                />
                 <label htmlFor="accountNumber">CURRENT BALANCE</label>
                <input
                  id="account-number"
                  name="accountNumber"
                  className="px-2"
                  value={amount}
                  type="number"
                  disabled
                />
                <label htmlFor="accountNumber">CURRENT BALANCE</label>
                <input
                  id="account-number"
                  name="accountNumber"
                  
                  value=""
                  type="number"
                 
                />
              </div>
              <div className="divider divider-horizontal"><FaArrowRight className="font-bold text-7xl"/></div>
              <div className="grid h-20 flex-grow ">
              <label htmlFor="accountNumber">ACCOUNT NUMBER</label>
                <input
                  id="account-number"
                  name="accountNumber"
                 
                  value=""
                  type="number"
                  
                />
                <label htmlFor="accountNumber">CURRENT BALANCE</label>
                <input
                  id="account-number"
                  name="accountNumber"
                  className="px-2"
                  value={amount}
                  type="number"
                  disabled
                />
               
              </div>
            </div>
            <div className="text-center mt-20">
              <label for="found-transfer" className="btn btn-primary">
                Found Transfer now
              </label>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default FoundTransfer;
