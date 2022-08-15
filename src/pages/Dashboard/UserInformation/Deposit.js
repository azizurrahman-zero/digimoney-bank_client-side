import React from "react";

const Deposit = ({ userInfo }) => {
  const { amount, accountNumber } = userInfo;
  return (
    <>
      <input type="checkbox" id="deposit" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="deposit"
            className="absolute btn btn-sm btn-circle right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-2xl px-12">Deposit!</h3>
          <form action="">
            <div className="px-12">
              <div className="w-full max-w-full my-4 form-control">
                <label htmlFor="accountNumber">ACCOUNT NUMBER</label>
                <input
                  id="account-number"
                  name="accountNumber"
                  className="px-5"
                  value={accountNumber}
                  type="number"
                  disabled
                />
              </div>

              <div className="w-full max-w-full my-4 form-control">
                <label htmlFor="accountNumber">CURRENT BALANCE</label>
                <input
                  id="account-number"
                  name="accountNumber"
                  className="px-5"
                  value={amount}
                  type="number"
                  disabled
                />
              </div>

              <div className="w-full max-w-full my-4 form-control">
                <label htmlFor="accountNumber">AMOUNT TO DEPOSIT</label>
                <input
                  type="number"
                  className="px-5"
                  name=""
                  id=""
                  placeholder="Enter Your Amount"
                />
              </div>
            </div>
            <div className="text-center">
              <label for="deposit" className="btn btn-accent ">
                Deposit now
              </label>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Deposit;
