import React,{useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";


   




const ExchangeRates = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <section data-aos="fade-in" className="lg:my-32 bg-[#073A42] my-12 lg:px-28 px-4  p-20 relative exchange-container">
        
      <div className='exchange-ball'>

<div><span className='dot2'></span> </div>
<div><span className='dot2'></span> </div>

</div>
     <div className="relative z-50">

      <h1 className="lg:text-5xl text-3xl font-bold text-white">
        Our Online And ATM <br /> Exchange Rates{" "}
      </h1>
      <p className="text-gray-400 mt-4 lg:w-5/12 text-lg">
        Rate valide as of 12:19 PM, Auguest 5,2021 Currency exchange rates with
        Paywise Online Better then in Branches. All rates
      </p>
     </div>
     

    
        
          <div class="overflow-x-auto mt-12 relative z-50">
        
            <table className="text-[#ABC3C6] lg:w-8/12 mx-auto ">
              <tr>
                <th className="lg:w-3/12"></th>
                <th className="text-start text-sm lg:w-3/12">Your Sell</th>
                <th className="text-start text-sm lg:w-3/12">Your Buy</th>
              </tr>
              <tr className="">
                <td className="lg:text-2xl font-bold">USD</td>
                <td>71,35</td>
                <td>74,35</td>
                <td className="pb-5">
                  <span className="block text-[#ABC3C6] ">
                    I'd like to sell
                  </span>
                  <span className="border-2 border-[#ABC3C6] rounded grid grid-cols-2 w-9/12">
                    <input
                      className="bg-[#073A42] text-lg font-semibold pl-4 "
                      type="text"
                      value="1000"
                    />
                    <select class="select  select-bordered  bg-[#073A42] text-white">
                      <option className="bg-none" selected>
                        RUB
                      </option>
                      <option className="bg-none">USD</option>
                      <option className="bg-none">TAKA</option>
                    </select>
                  </span>
                </td>
              </tr>
              <tr>
                <td className="lg:text-2xl font-bold">EUR</td>
                <td>84,98</td>
                <td>87,97</td>
                <td>
                  <span className="block text-[#ABC3C6]">I'll get</span>
                  <span className="border-2 border-[#ABC3C6] rounded grid grid-cols-2 w-9/12">
                    <input
                      className="bg-[#073A42] text-lg font-semibold pl-4 "
                      type="text"
                      value="1000"
                    />
                    <select class="select  select-bordered  bg-[#073A42] text-white">
                      <option className="bg-none" selected>
                        RUB
                      </option>
                      <option className="bg-none">USD</option>
                      <option className="bg-none">TAKA</option>
                    </select>
                  </span>
                </td>
              </tr>
            </table>
          </div>
          <hr className="w-full h-[1px] bg-[#ABC3C6] my-12" />
          <div className="grid lg:grid-cols-2 lg:w-8/12 mx-auto">
            <p className="text-lg text-[#ABC3C6]">Purchase foreign currency with Paywise Online and get your cash at a bank branch</p>
            <div className="">
            <button className='btn mx-auto block btn-primary px-20 mt-5 lg:mt-0 rounded  py-3 h-auto text-[#073A42] bg-[#F8BF88] border-none font-bold'>Exchange Now</button>
            </div>
          </div>
     
       
    
    </section>
  );
};

export default ExchangeRates;
