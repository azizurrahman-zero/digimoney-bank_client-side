import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom';


   



const Mission = ({title,information,aros,cashback}) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div data-aos="fade-in" className="mission-card bg-base-200 p-12 rounded-xl">
      {/* <button className="btn mb-8   btn-secondary font-bold text-base-300 ">
        Petal 1
      </button> */}
      <h1 className="lg:text-3xl text-lg lg:w-[60%] font-bold text-[#010C28]">
    {title}
      </h1>
      <ul className="mission-decription ml-12  lg:text-lg">
        <li className="mt-5 ">No annual fee(Late and  returned payment less apply)</li>
        <li className="mt-5 ">{information}</li>
        <li className="mt-5 ">{aros}</li>
        <li className="mt-5 ">{cashback}</li>
      </ul>
      <Link
                className="font-bold text-white btn btn-secondary mt-5"
                to="/cards"
              >
                Learn More
              </Link>

      <img className="lg:w-[40%] ml-auto" src="https://uploads-ssl.webflow.com/609c10361da7b5749cae41a9/609c10361da7b565d4ae4228_card-intro-center.png" alt="" />


    </div>
  );
};

export default Mission;
