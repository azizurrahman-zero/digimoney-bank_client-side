import React from 'react';

const Feature = ({feature}) => {
    return (
        <div class="card rounded-none feature-card  bg-accent shadow-lg   text-secondary">
          <div class="card-body custom-body">
              <div className="flex">
              <div class="avatar">
        <div class="w-16 mr-3 rounded border-2 border-[#73061A] p-3">
            <img src={feature.image} alt="Tailwind-CSS-Avatar-component" />
        </div>
        </div>
            <h2 class="card-title">{feature.title}</h2>
              </div>
            <p>{feature.desc}</p>
            
          </div>
          <div className='overlly'>

          </div>
        
        </div>
    );
};

export default Feature;