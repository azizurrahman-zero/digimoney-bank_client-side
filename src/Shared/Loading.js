import React from "react";
import { BarLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <BarLoader />
    </div>
  );
};

export default Loading;
