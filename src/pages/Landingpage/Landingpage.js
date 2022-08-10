import React from "react";
import Footer from "../../Shared/Footer";
import BottomBanner from "./BottomBanner";
import CustomerReview from "./CustomerReview";
import ExchangeRates from "./ExchangeRates";
import GlobalServices from "./GlobalServices";
import Header from "./Header";
import "./LandingPage.css";
import Missions from "./Missions";

const LandingPage = () => {
  return (
    <div>
      <Header />
      <Missions />
      <ExchangeRates />
      <GlobalServices />
      <CustomerReview />
      <BottomBanner />
      <Footer />
    </div>
  );
};

export default LandingPage;
