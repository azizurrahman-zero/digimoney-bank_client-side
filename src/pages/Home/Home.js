import React from "react";
import DownloadApp from "./DownloadApp";
import Features from "./Features";
import Header from "./Header";
import "./Home.css";
import NewsPortal from "./NewsPortal";

const Home = () => {
  return (
    <div>
      <Header />
      <NewsPortal />
      <DownloadApp />
      <Features />
    </div>
  );
};

export default Home;
