import React from 'react';

const SendMoney = () => {
    return (
        <div>
            <h1 className="text-[#2366B5] text-3xl font-bold mb-5 underline">
                Send Money
            </h1>
            <form action="">
                <div className="flex items-center gap-x-4 mt-8">
                    <label className="w-[250px] text-xl">Account Number</label>
                    <input
                        className="input input-primary border-[#2366B5] rounded-none pr-32 focus:outline-none"
                        type="text"
                        placeholder="***"
                    />
                </div>
                <div className="flex items-center gap-x-4 mt-8">
                    <label className="w-[250px] text-xl">Amount </label>
                    <input
                        className="input input-primary border-[#2366B5] rounded-none pr-32 focus:outline-none"
                        type="text"
                        placeholder="$"
                    />
                </div>
                <div className="flex items-center gap-x-4 mt-8">
                    <label className="w-[250px] text-xl">Confirm Amount </label>
                    <input
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