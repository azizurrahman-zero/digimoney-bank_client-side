import React from "react";

const Withdraw = ({ userInfo }) => {
  const { amount, accountNumber } = userInfo;
  return (
    <div>
      <input type="checkbox" id="withdraw" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="withdraw"
            className="absolute btn btn-sm btn-circle right-2 top-2"
          >
            ✕
          </label>
          <form>
            <div className="px-12">
              <h3 className="font-bold text-2xl">Withdraw!</h3>

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
                <label htmlFor="accountNumber">AMOUNT TO WITHDRAW</label>
                <input
                  type="number"
                  className="px-5"
                  name=""
                  id=""
                  placeholder="Enter Your Amount"
                />
              </div>
              <div className="text-center">
                <label for="withdraw" className="btn btn-secondary">
                  Withdraw now
                </label>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Withdraw;
