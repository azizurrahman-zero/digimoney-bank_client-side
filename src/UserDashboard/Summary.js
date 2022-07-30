import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';


const Summary = () => {

    const data = [
        {
          name: 'Page A',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Page D',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Page E',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Page F',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];


    return (
        <div>
            <div className='md:flex gap-2'>
                <div className="flex-1 border p-4 shadow rounded mb-2">
                    <h2 className="">Current Blance</h2>
                    <h3 className="text-2xl font-bold">10,000.00 USD</h3>
                </div>
                <div className="flex-1 border p-4 shadow rounded mb-2">
                    <h2 className="">Last Month Income</h2>
                    <h3 className="text-2xl font-bold">1,000.00 USD</h3>
                </div>
            </div>
            <div className='flex justify-between mt-4'>
                <h1>Last Week Summary</h1>
                <div>
                    <button className='btn btn-sm text-green-600 bg-transparent border-none capitalize'>Income</button>
                    <button className='btn btn-sm text-gray-700 bg-transparent border-none capitalize'>Outcome</button>
                </div>
            </div>
            {/* Rechart  */}
            <div className='for_rechart'>
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart width={300} height={100} data={data}>
                      <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
                        <Tooltip />
                        <XAxis />
                        <YAxis />
                    </LineChart>
                </ResponsiveContainer>
            </div>
            {/* Trnsition History */}
            <div>
                <h2 className="text-2xl">Recent Transition history</h2>
                <div className='flex justify-between mb-2'>
                    <p>06/06/2022</p>
                    <p className='hidden md:block'>Email@gmial.com</p>
                    <div className='flex'>
                        <p className='text-green-500 mr-2'>Income</p>
                        <p>USD 100.00</p>
                    </div>
                </div>
                <div className='flex justify-between mb-2'>
                    <p>06/06/2022</p>
                    <p className='hidden md:block'>Email@gmial.com</p>
                    <div className='flex'>
                        <p className='mr-2'>Outcome</p>
                        <p>USD 100.00</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Summary;