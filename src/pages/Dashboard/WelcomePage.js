import React,{useEffect} from "react";
import { LineChart, Line, ResponsiveContainer, AreaChart, CartesianGrid, XAxis, YAxis, Tooltip, Area, ComposedChart, Legend, Bar } from "recharts";
import { FaPlay } from "react-icons/fa";
import { ImUpload, ImDownload } from "react-icons/im";
import TransectionRow from "./TransectionRow";
import Piechart from "./Piechart";
import Barchart from "./Barchart";
import BalanceCard from "./BalanceCard";
import useUserInfo from "../../hooks/useUserInfo";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import {useDispatch,useSelector} from 'react-redux'
import { fetchTransection } from "../../redux/reducers/TransectionReducer";

const WelcomePage = () => {
  const [user] = useAuthState(auth);
  const { userInfo } = useUserInfo(user);
  const {transection}=useSelector(state=>state.transection)
  const dispatch=useDispatch()
  useEffect(()=>{
  dispatch(fetchTransection({accountNumber:userInfo?.accountNumber,page:0}))
  },[dispatch,userInfo])
  let totalSendMoney=0;
  transection.map(money=> totalSendMoney+=parseFloat(money.send_money))
  let totalReceiveMoney=0;
  transection.map(money=> totalReceiveMoney+=parseFloat(money.reveive_money))
  let robin=[]
transection.forEach(element => {
 const kashem=  element.send_money
 const tashem=Number(kashem)
 
 const newArray={...element,send_money:tashem}

robin.push(newArray)

 });
 console.log(robin)


  const data = [
    {
      name: "Page A",
      uv: 22,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 22,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 1000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 250,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 200,
      pv: 4800,
      amt: 2181,
    }
   
  ];




  return (
    <section className="mt-8">
      <div className="grid lg:grid-cols-3 gap-12">
        {/* Balance Cart start */}
        <BalanceCard />
        {/* Balance CArd End */}

        {/* Income Card Chart start */}
        <div className="card   shadow-2xl  text-gray-200">
          <div className=" p-5">
            <div className="flex items-center justify-between mb-8 gap-x-8">
              <span>
                <ImDownload className="h-12 w-12 bg-[#6160DC] p-2 rounded-full" />
              </span>
              <div>
                <p className="text-gray-400">Reveive Money</p>
                <h1 className="text-xl font-bold text-black">${totalReceiveMoney?totalReceiveMoney:0}</h1>
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
            <div className="h-[120px]">

            <ResponsiveContainer width="100%" height="100%">
        <LineChart width={500} height={300} data={robin}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="reveive_money" padding={{ left: 30, right: 30 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="receive_money" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="send_money" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
            </div>
          </div>
        </div>
        {/* Income Card Chart end */}

        {/* Expense Card Start */}
        <div className="card   shadow-2xl  text-gray-200">
          <div className=" p-5">
            <div className="flex items-center justify-between mb-8 gap-x-8">
              <span>
                <ImUpload className="h-12 w-12 bg-[#54C5EB] p-2 rounded-full" />
              </span>
              <div>
                <p className="text-gray-400">Send Money</p>
                <h1 className="text-xl font-bold text-black">${totalSendMoney}</h1>
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
            <div className="h-[120px]">

<ResponsiveContainer width="100%" height="100%">
<LineChart width={500} height={300} data={robin}>
<CartesianGrid strokeDasharray="3 3" />
<XAxis dataKey="reveive_money" padding={{ left: 30, right: 30 }} />
<YAxis />
<Tooltip />
<Legend />
<Line type="monotone" dataKey="send_money" stroke="#8884d8" activeDot={{ r: 8 }} />
<Line type="monotone" dataKey="reveive_money" stroke="#82ca9d" />
</LineChart>
</ResponsiveContainer>
</div>
            {/* <LineChart
              width={350}
              height={60}
              data={transection}
              margin={{ top: 15, right: 30, left: 20, bottom: 0 }}
            >
              <Line type="monotone" dataKey="send_money" stroke="#8884d8" />
            </LineChart> */}
          </div>
        </div>
        {/* Expense Card End */}
      </div>

      <div className="grid lg:grid-cols-2 gap-x-16 mt-12">
        {/* Bar Chart Start Start */}
         <Barchart transection={robin} /> 
        {/* Bar Chart end */}
        {/* Pie Chart Start */}

         <Piechart transection={robin} /> 
        {/* Pie chart end */}
      </div>
      {/* Transection table start  */}
      <section className="mt-12 shadow-2xl rounded-2xl">
        <h1 className="text-3xl font-bold my-8 ml-2">Lastest Transaction</h1>
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            <tbody>
              {transection.slice(0, 6).map((rowdata, i) => (
                <TransectionRow key={i} userInfo={userInfo} rowdata={rowdata} />
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
