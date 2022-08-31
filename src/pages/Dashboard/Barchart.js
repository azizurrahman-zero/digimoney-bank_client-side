import React from 'react';
import { BarChart, CartesianGrid, XAxis, YAxis,ResponsiveContainer, Tooltip, Legend, Bar } from 'recharts';

const Barchart = ({transection}) => {
    const data = [
        {
            "name": "Page A",
            "uv": 4000,
            "pv": 2400
        },
        {
            "name": "Page B",
            "uv": 3000,
            "pv": 1398
        },
        {
            "name": "Page C",
            "uv": 2000,
            "pv": 9800
        },
        {
            "name": "Page D",
            "uv": 2780,
            "pv": 3908
        },
        {
            "name": "Page E",
            "uv": 1890,
            "pv": 4800
        },
        {
            "name": "Page F",
            "uv": 2390,
            "pv": 3800
        },
        {
            "name": "Page G",
            "uv": 3490,
            "pv": 4300
        }
    ]

    return (
        <div className="h-[45vh] bg-white  shadow-2xl rounded-xl px-4  mt-2">
          <h1 className="text-3xl font-bold text-black mt-2">Overview</h1>

          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              width={500}
              height={300}
              data={transection}
              margin={{
                top: 25,
                right: 30,
                left: 20,
                bottom: 60,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />

              <Tooltip />

              <Bar dataKey="send_money" fill="#8884d8" />
               <Bar dataKey="reveive_money" fill="#82ca9d" /> 
            </BarChart>
          </ResponsiveContainer>
        </div>
    );
};

export default Barchart;
