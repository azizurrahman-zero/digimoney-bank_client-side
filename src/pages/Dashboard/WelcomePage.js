import React from "react";
import {
  LineChart,
  ResponsiveContainer,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  CartesianGrid,
  Tooltip,

} from "recharts";
import { FaPlay } from "react-icons/fa";
import { ImUpload, ImDownload } from "react-icons/im";
import useTransection from "../../hooks/useTransection";
import TransectionRow from "./TransectionRow";

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
  const data01 = [
    {
      name: "Group A",
      value: 400,
    },
    {
      name: "Group B",
      value: 300,
    },
    {
      name: "Group C",
      value: 300,
    },
    {
      name: "Group D",
      value: 200,
    },
    {
      name: "Group E",
      value: 278,
    },
    {
      name: "Group F",
      value: 189,
    },
  ];
  const [transection]=useTransection();
  console.log(transection)
  return (
    <section className="">
      <div className="grid lg:grid-cols-3 gap-12">
        <div class="card balance-card  bg-[#6160DC] text-gray-200">
          <div class=" p-5">
            <p className="text-xl">
              <small>My Balance</small>
            </p>

            <h2 class="card-title text-3xl mb-5">$12,345,789</h2>
            <p className="text-end font-bold">6589 2157 6325 2564</p>

            <div class="card-actions gap-x-10 mt-5">
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
        <div class="card   shadow-2xl  text-gray-200">
          <div class=" p-5">
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
        <div class="card   shadow-2xl  text-gray-200">
          <div class=" p-5">
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
      </div>

      <div className="grid lg:grid-cols-2 gap-x-16 mt-12">
        <div className="h-[45vh] shadow-2xl py-10 px-4 rounded-xl">
          <h1 className="text-3xl font-bold text-black ">Overview</h1>

          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 10,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />

              <Tooltip />

              <Bar dataKey="pv" fill="#8884d8" />
              <Bar dataKey="uv" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="h-[45vh] shadow-2xl rounded-xl px-4 py-12">
          <h1 className="text-3xl font-bold text-black">OutComes Categories</h1>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart width={600} height={600}>
              <Pie
                data={data01}
                dataKey="value"
                cx="50%"
                cy="50%"
                outerRadius={60}
                fill="#8884d8"
              />
              <Pie
                data={data01}
                dataKey="value"
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={90}
                fill="#82ca9d"
                label
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
      <section className="mt-12 shadow-2xl rounded-2xl">
        <h1 className="text-3xl font-bold my-5">Lastest Transaction</h1>
      <div class="overflow-x-auto">
  <table class="table table-zebra w-full">

  
    <tbody>
    
   {
    transection.slice(0,6).map(rowdata=>(
          <TransectionRow rowdata={rowdata} />
    ))
   }

     
   
   
     
    
    </tbody>
  </table>
</div>
      </section>
    </section>
  );
};

export default WelcomePage;
