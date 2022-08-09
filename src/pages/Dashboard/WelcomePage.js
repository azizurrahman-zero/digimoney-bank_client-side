import React from 'react';
import income from "../../assets/images/income.png"
import outgoing from "../../assets/images/outgoing.png"
import Barchart from './Barchart';
import Piechart from './Piechart';

const WelcomePage = () => {
    return (
        <div className=''>
            {/* card  */}
            <div class=" grid grid-cols-3 gap-4">

                <div class="">

                    <div class="w-72 p-3 bg-gradient-to-r from-gray-600 to-black rounded-lg shadow-xl">
                        <h1 class="text-3xl font-semibold text-gray-100 pb-4">$:0000</h1>

                        <span class="text-xs  text-gray-200 shadow-2xl">John Snow</span>


                        <div class="flex justify-between items-center pt-4">

                            <div class="flex flex-col">
                                <span class="text-xs text-gray-300 font-bold">1234 4567 8901 2345</span>
                                <span class="text-xs text-gray-300 font-bold">09/10</span>
                            </div>

                            <img src="https://img.icons8.com/offices/80/000000/sim-card-chip.png" width="48" />

                        </div>

                    </div>

                </div>


                {/* incoming card  */}
                <div class="card w-72 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <div className='flex flex-row gap-2'>
                            <img src={income} style={{ height: '24px' }} alt="" />
                            <div>
                                <h2 class="">Income</h2>
                                <div className='flex'>
                                    <div className='flex-initial w-48'>
                                        <h2 class="card-title">$: 0000000</h2>
                                    </div>
                                    <h2 className='text-xs'>Last month</h2>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                {/* incoming finish */}
                {/* out going start */}
                <div class="card w-72 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <div className='flex flex-row gap-2'>
                            <img src={outgoing} style={{ height: '24px' }} alt="" />
                            <div>
                                <h2 class="">Outgoin</h2>
                                <div className='flex'>
                                    <div className='flex-initial w-48'>
                                        <h2 class="card-title">$: 00000</h2>
                                    </div>
                                    <h2 className='text-xs'>Last month</h2>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                {/* out going finish  */}
                {/* Charts  */}
                <div className='flex flex-row gap-4 my-16'>

                    <Barchart />
                    <Piechart />
                </div>
            </div>
        </div>
    );
};

export default WelcomePage;