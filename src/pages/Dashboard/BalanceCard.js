import React from 'react';

const BalanceCard = () => {
    return (
        <div className="card balance-card  bg-[#6160DC] text-gray-200">
          <div className=" p-5">
            <p className="text-xl">
              <small>My Balance</small>
            </p>

            <h2 className="card-title text-3xl mb-5">$12,345,789</h2>
            <p className="text-end font-bold">6589 2157 6325 2564</p>

            <div className="card-actions gap-x-10 mt-5">
              <div>
                <p className="text-xs font-[500]">Card Holder</p>
                <h1 className="text-lg font-bold">Rara Avis</h1>
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