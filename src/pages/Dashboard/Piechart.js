import React from 'react';
import {
    ResponsiveContainer,
    PieChart,
    Pie,
    Tooltip
  } from "recharts";

const Piechart = ({transection}) => {
   

  
    const data01 = [
        {
            "name": "Group A",
            "value": 400
        },
        {
            "name": "Group B",
            "value": 300
        },
        {
            "name": "Group C",
            "value": 300
        },
        {
            "name": "Group D",
            "value": 200
        },
        {
            "name": "Group E",
            "value": 278
        },
        {
            "name": "Group F",
            "value": 189
        }
    ];
    const data02 = [
        {
            "name": "Group A",
            "value": 2400
        },
        {
            "name": "Group B",
            "value": 4567
        },
        {
            "name": "Group C",
            "value": 1398
        },
        {
            "name": "Group D",
            "value": 9800
        },
        {
            "name": "Group E",
            "value": 3908
        },
        {
            "name": "Group F",
            "value": 4800
        }
    ];

    return (
        <div className="h-[45vh] bg-white  shadow-2xl rounded-xl px-4  mt-2">
          <h1 className="text-3xl font-bold text-black">OutComes Categories</h1>
          <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            dataKey="send_money"
            isAnimationActive={false}
            data={transection}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
        
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
        </div>
    );
};

export default Piechart;