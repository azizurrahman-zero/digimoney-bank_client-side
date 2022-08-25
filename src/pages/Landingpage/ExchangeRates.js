import React,{useState,useEffect, useRef} from 'react';
import Axios from 'axios';
import Dropdown from 'react-dropdown';
import { HiSwitchHorizontal } from 'react-icons/hi';
import 'react-dropdown/style.css';
import './ExchangeRates.css';

const ExchangeRates = () => {

  // Initializing all the state variables 
  const [info, setInfo] = useState([]);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("bdt");
  const [options, setOptions] = useState([]);
  const [output, setOutput] = useState(0);
  const [inputAmount, setInputAmount] = useState(0);
  const amountRef = useRef();

  
  // Calling the api whenever the dependency changes
  useEffect(() => {
    Axios.get(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from}.json`)
      .then((res) => {
      setInfo(res.data[from]);
    })
  }, [from]);
  
  // Calling the convert function whenever
  // a user switches the currency
  useEffect(() => {
    setOptions(Object.keys(info));
    convert();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [info])
    
  // Function to convert the currency
  function convert() {
    let input = amountRef.current.value;
    setInputAmount(input);
    var rate = info[to];
    setOutput(input * rate);
  }
  
  // Function to switch between two currency
  function flip() {
    var temp = from;
    setFrom(to);
    setTo(temp);
  }

  return (
    <div className="bg-primary lg:px-28 px-4 py-10 mb-16">
      <div className="c-heading">
        <h1 className='text-white text-center text-4xl'>Exchange Your Currency</h1>
      </div>
      <div className='grid md:grid-cols-2 items-center justify-center gap-26 mt-10 mb-5'>
        <div className="flex md:items-center flex-col gap-5">
          <div>
            <h3 className='text-white mb-1'>Amount</h3>
            <input
              ref={amountRef}
              className='p-3 md:w-96 w-full rounded'
              type="text"
              placeholder="Enter the amount"
              />
          </div>
          <div className='md:flex gap-5 justify-center items-end'>
          <div>
            <h3 className='text-white mb-1'>From</h3>
            <Dropdown
              options={options} 
              onChange={(e) => { setFrom(e.value) }}
              value={from}
              placeholder="From" />
          </div>
          <div className='flex justify-center'>
            <HiSwitchHorizontal
              className='md:mb-2 mt-3 mb-0.5' 
              size="30px" 
              onClick={() => { flip()}}/>
          </div>
          <div>
            <h3 className='text-white mb-1'>To</h3>
            <Dropdown
            options={options} 
            onChange={(e) => {setTo(e.value)}} 
            value={to}
            placeholder="To" />
          </div>
          <button className='btn btn-secondary text-white flex content-center font-bold px-6 btn-sm py-5 my-5 md:my-0 w-full md:w-auto' onClick={()=>{convert()}}>Convert</button>
          </div>
        </div>
        <div className="result mt-4 md:mt-0">
          <h2 className='md:text-xl text-base text-white font-medium mb-1 text-center'>Converted Amount:</h2>
          <p className='inputP font-bold md:text-3xl text-xl text-[#ecf1fd] text-center'>{inputAmount +" "+from+" = "+output.toFixed(2) + " " + to}</p>
        </div>
      </div>
    </div>
  );
};

export default ExchangeRates;
