import React from "react";

const Feature = ({ feature }) => {
  return (
    <div className="card rounded-none feature-card  bg-accent shadow-lg   text-secondary">
      <div className="card-body custom-body">
        <div className="flex">
          <div className="avatar">
            <div className="w-16 mr-3 rounded border-2 border-[#73061A] p-3">
              <img src={feature.image} alt="Tailwind-CSS-Avatar-component" />
            </div>
          </div>
          <h2 className="card-title">{feature.title}</h2>
        </div>
        <p>{feature.desc}</p>
      </div>
      <div className="overlay"></div>
    </div>
  );
};

export default Feature;
