import React from 'react';
import BottomBanner from './BottomBanner';
import CustomerReview from './CustomerReview';
import ExchangeRates from './ExchangeRates';
import GlobalServices from './GlobalServices';
import Header from './Header';
import './landingpage.css'
import Missions from './Missions';

const Landingpage = () => {
    return (
        <div>
            <Header />
            <Missions />
            <ExchangeRates />
            <GlobalServices />
            <CustomerReview />
            <BottomBanner />
            
        </div>
    );
};

export default Landingpage;