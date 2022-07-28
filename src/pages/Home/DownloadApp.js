import React from "react";
import DownloadImg from "../../assets/images/app-2.png";

const DownloadApp = () => {
  return (
    <section className="grid lg:grid-cols-2 mt-20 download-section px-4 py-10">
      <div>
        <img src={DownloadImg} alt="" />
      </div>
      <div className="flex items-center justify-center">
        <div>
          <h1 className="text-md font-bold text-primary mb-3">
            Download Our Mobile App
          </h1>
          <h1 className="text-5xl text-secondary">
            You Can Find All Things You Need In our App
          </h1>
          <p className="text-lg text-gray-700 my-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed et non
            laboriosam unde ullam atque nam accusantium asperiores fugit
            consequatur.
          </p>
          <div>
            <button className="btn btn-primary px-12 mr-2 mb-2 lg:mb-0">
              Play Store Download
            </button>
            <button className="btn btn-primary px-12 mr-2">
              Google Download
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
