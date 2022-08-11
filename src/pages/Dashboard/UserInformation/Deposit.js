import React from "react";

const Deposit = ({ userInfo }) => {
  const { amount, accountNumber } = userInfo;
  return (
    <>
      <input type="checkbox" id="deposit" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <label
            htmlFor="deposit"
            className="absolute btn btn-sm btn-circle right-2 top-2"
          >
            ✕
          </label>
          <div className="px-12">
            <h3 class="font-bold text-2xl">Deposit!</h3>

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
                id="amount"
                name="amount"
                className="px-5"
                value="amount"
                type="number"
              />
            </div>
          </div>
          <div class="text-center">
            <label for="deposit" class="btn btn-accent ">
              Deposit now
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Deposit;
