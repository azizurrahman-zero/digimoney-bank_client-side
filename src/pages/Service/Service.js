import React, { useState } from "react";
import image1 from "../../assets/images/bank-img-1.jpg";
import Menubar from "../../Shared/Menubar";
import "./service.css";

const Service = () => {
  const [showall, setShowAll] = useState(false);
  const serviceDAta = [
    {
      id: 1,
      title: "SEND MONEY",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.",
      image: image1,
    },
    {
      id:2,
      title: "CASH IN",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.",
      image: image1,
    },
    {
      id: 3,
      title: "BILL PAY",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.",
      image: image1,
    },
    {
      id: 4,
      title: "RECHARGE",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.",
      image: image1,
    },
    {
      id: 5,
      title: "GAS BILL",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.",
      image: image1,
    },
    {
      id: 6,
      title: "PAYMENT",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.",
      image: image1,
    },
    {
      id: 7,
      title: "CALL US",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.",
      image: image1,
    },
 
  ];
  const services = !showall ? serviceDAta.slice(0, 6) : serviceDAta;
  return (
    <>
 
    <main className="mb-32">
      <h1 className="text-5xl text-center mt-20 mb-20 text-primary">Our Services</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div key={service.id} className="service-card text-white cursor-pointer">
            <div className="service-card-wraper ">
              <div className="  mx-auto   ">
                <figure className="px-10 pt-10">
                  <img
                    src="https://placeimg.com/400/225/arch"
                    alt="Shoes"
                    className="rounded-xl"
                  />
                </figure>
                <div className="card-body  ">
                  <h2 className="card-title">{service.title}</h2>
                  <p>{service.desc}</p>
                
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="service-container flex justify-center"></div>

      <button
        onClick={() => setShowAll(!showall)}
        className="btn btn-primary bg-white hover:bg-[#005C53] hover:text-white  text-[#005C53] border-[#005C53] mx-auto block mt-16"
        >
        Learn More
      </button>
    </main>
        </>
  );
};

export default Service;
