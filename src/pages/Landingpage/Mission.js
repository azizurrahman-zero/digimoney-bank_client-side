import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


   



const Mission = ({title}) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div data-aos="fade-in" className="mission-card p-12 rounded-xl">
      <button className="btn mb-8 border-none  btn-primary font-bold text-[rgb(7,58,66)] bg-[#F8BF88]">
        Petal 1
      </button>
      <h1 className="lg:text-3xl text-lg lg:w-[60%] font-bold text-[#010C27]">
    {title}
      </h1>
      <ul className="mission-decription ml-12  lg:text-lg">
        <li className="mt-5 ">No annual fee(Late and   returned payment less apply)</li>
        <li className="mt-5 ">$500-$5,000 limits</li>
        <li className="mt-5 ">AORs 19.99%-29.49%</li>
        <li className="mt-5 ">2%-10% cash back at select merchants</li>
      </ul>
      <button  className="btn mt-8 border-none  btn-primary font-bold text-[rgb(7,58,66)] bg-[#F8BF88]">
        Learned More
      </button>

      <img className="lg:w-[40%] ml-auto" src="https://uploads-ssl.webflow.com/609c10361da7b5749cae41a9/609c10361da7b565d4ae4228_card-intro-center.png" alt="" />


    </div>
  );
};

export default Mission;
