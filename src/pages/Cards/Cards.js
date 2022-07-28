import React from 'react';
import creditcard from '../../../src/assets/images/creditcard.jpg'
import visacard from '../../../src/assets/images/visacard.png'
import visacardmastercard from '../../../src/assets/images/visamastercardclassic.jpg'
import applepay from '../../../src/assets/images/applepay.png'


const Cards = () => {
    return (
        <div>
            {/* banner */}
            <div class="carousel w-full p-4 space-x-4">
                <div id="slide1" class="carousel-item relative w-full rounded-box shadow-xl">
                    <img src={creditcard} class="w-full" />

                </div>
            </div>
            {/* hero */}
            <div class="hero min-h-screen">
                <div class="hero-content flex-col lg:flex-row gap-26">
                    <img src={visacard} class="rounded-lg " />
                    <div>
                        <h1 class="text-5xl font-bold ">Visa and MasterCard Gold Cards!</h1>
                        <p class="py-6">Account currency: USD, EUR
                            Discounts and privileges from Visa and MasterCard payment systems
                            Issue of additional bank cards
                            Card issue within a payroll card programme.</p>
                        <button class="btn btn-primary ">Order Now</button>
                    </div>
                </div>
            </div>
            {/* hero2 */}
            <div class="hero pb-44 ">
                <div class="hero-content flex-col lg:flex-row-reverse gap-26">
                    <img src={visacardmastercard} class="max-w-md rounded-lg " />
                    <div>
                        <h1 class="text-5xl font-bold">Visa Classic and MasterCard Standard Cards</h1>
                        <p class="py-6">Account currency: USD, EUR
                            Discounts and privileges from Visa and MasterCard payment systems
                            Issue of additional bank cards
                            Card issue within a payroll card programme</p>
                        <button class="btn btn-primary ">Order Now</button>
                    </div>
                </div>
            </div>
            {/* card  */}
            <div class="card card-side mb-36">
                <figure><img src={applepay} className=" w-5/6" /></figure>
                <div class="card-body">
                    <h2 class="card-title">Buy with Apple Pay</h2>
                    <p>Download the DigiMonye Bank app and simplify your banking. Discover quick, simple and convenient way to take command of your bank account, on your mobile phone</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Buy with apple pay</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cards;