import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { toast } from "react-toastify";


const SendMoney = () => {
  const [user] = useAuthState(auth);
 
  const handleSubmit = (e) => {
    e.preventDefault();
    const amount = e.target.amount.value;
    const confirmAmount = e.target.confirmAmount.value;

    if (amount !== confirmAmount) {
      toast.error("Please, check amount again!");
      return;
    }
    const transferData = {
      accountNumber: e.target.accountNumber.value,
      amount,
    };

    const url = `https://tranquil-lake-95777.herokuapp.com/transfer?email=${user?.email}`;
 
    fetch(url, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(transferData),
    })
    .then(res=>res.json())
    .then(data=>{
        if(data?.finalResult?.modifiedCount>0 && data?.insertTransection?.modifiedCount>0 && data?.insertTransectionDataToReceiver?.modifiedCount>0){
           e.target.reset()
           toast.success("Money sent successfully!")
        }
    })
  };
  return (
    <div>
      <h1 className="text-[#2366B5] text-3xl font-bold mb-5 underline">
        Send Money
      </h1>
      <div className="flex justify-center items-center min-h-[60vh]">
        <form onSubmit={handleSubmit}>
          <div className="flex items-center gap-x-4 mt-8">
            <label className="w-[250px] text-xl">Account Number</label>
            <input
              name="accountNumber"
              required
              className="input input-primary border-[#2366B5] rounded-none pr-32 focus:outline-none"
              type="text"
              placeholder="***"
            />
          </div>
          <div className="flex items-center gap-x-4 mt-8">
            <label className="w-[250px] text-xl">Amount </label>
            <input
              name="amount"
              required
              className="input input-primary border-[#2366B5] rounded-none pr-32 focus:outline-none"
              type="text"
              placeholder="$"
            />
          </div>
          <div className="flex items-center gap-x-4 mt-8">
            <label className="w-[250px] text-xl">Confirm Amount </label>
            <input
              name="confirmAmount"
              required
              className="input input-primary border-[#2366B5] rounded-none pr-32 focus:outline-none"
              type="text"
              placeholder="$"
            />
          </div>
          <div className="flex items-center gap-x-4 mt-8">
            <label className="w-[250px] text-xl"> </label>

          
            <button   className="btn btn-primary block w-[300px] bg-[#2366B5] border-none text-white font-bold  hover:bg-[#2366B5]  ">Send</button>
          </div>
       {/* {isTrue &&  <SendMoneyModal setIsture={setIsture} handleSubmit={handleSubmit} />} */}
        </form>
      </div>
    </div>
  );
};

export default SendMoney;
