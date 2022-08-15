import React from "react";
import {
  LineChart,
 
  Line,

} from "recharts";
import { FaPlay } from "react-icons/fa";
import { ImUpload, ImDownload } from "react-icons/im";
import useTransection from "../../hooks/useTransection";
import TransectionRow from "./TransectionRow";
import Piechart from "./Piechart";
import Barchart from "./Barchart";
import BalanceCard from "./BalanceCard";

const WelcomePage = () => {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
 
  const [transection] = useTransection();
  
  return (
    <section className="mt-8">
      <div className="grid lg:grid-cols-3 gap-12">
        {/* Balance Cart start */}
         <BalanceCard />
        {/* Balance CArd End */}

        {/* Income Card Chart start */}
        <div className="card   shadow-2xl  text-gray-200">
          <div className=" p-5">
            <div className="flex items-center mb-8 gap-x-8">
              <span>
                <ImDownload className="h-12 w-12 bg-[#6160DC] p-2 rounded-full" />
              </span>
              <div>
                <p className="text-gray-400">Income</p>
                <h1 className="text-4xl font-bold text-black">$45,741</h1>
              </div>
              <div>
                <p className="flex justify-end ">
                  <span className="flex flex-col items-center">
                    <span>
                      <FaPlay className="text-[#00A389] rotate-[30deg]" />
                    </span>
                    <span className="text-[#00A389] font-bold">+0,5%</span>
                  </span>
                </p>
                <span className="text-gray-500">last month</span>
              </div>
            </div>
            <LineChart
              width={350}
              height={80}
              data={data}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <Line type="monotone" dataKey="pv" stroke="#8884d8" />
            </LineChart>
          </div>
        </div>
        {/* Income Card Chart end */}

        {/* Expense Card Start */}
        <div className="card   shadow-2xl  text-gray-200">
          <div className=" p-5">
            <div className="flex items-center mb-8 gap-x-8">
              <span>
                <ImUpload className="h-12 w-12 bg-[#54C5EB] p-2 rounded-full" />
              </span>
              <div>
                <p className="text-gray-400">Expense</p>
                <h1 className="text-4xl font-bold text-black">$45,741</h1>
              </div>
              <div>
                <p className="flex justify-end ">
                  <span className="flex flex-col items-center">
                    <span>
                      <FaPlay className="text-[#00A389] rotate-[-30deg]" />
                    </span>
                    <span className="text-[#00A389] font-bold">+0,5%</span>
                  </span>
                </p>
                <span className="text-gray-500">last month</span>
              </div>
            </div>
            <LineChart
              width={350}
              height={80}
              data={data}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <Line type="monotone" dataKey="pv" stroke="#8884d8" />
            </LineChart>
          </div>
        </div>
        {/* Expense Card End */}
      </div>

      <div className="grid lg:grid-cols-2 gap-x-16 mt-12">
        {/* Bar Chart Start Start */}
        <Barchart />
        {/* Bar Chart end */}
        {/* Pie Chart Start */}
        
        <Piechart />
        {/* Pie chart end */}
      </div>
      {/* Transection table start  */}
      <section className="mt-12 shadow-2xl rounded-2xl">
        <h1 className="text-3xl font-bold my-8 ml-2">Lastest Transaction</h1>
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            <tbody>
              {transection.slice(0, 6).map((rowdata,i) => (
                <TransectionRow key={i} rowdata={rowdata} />
              ))}
            </tbody>
          </table>
        </div>
      </section>
      {/* Transection table end */}
    </section>
  );
};

export default WelcomePage;
