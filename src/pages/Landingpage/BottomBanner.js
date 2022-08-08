import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const BottomBanner = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <section data-aos="fade-in" className="bg-[#F8BF8A] lg:pt-28 pt-12 px-2 lg:px-0 lg:pb-36 pb-1 ">
      <div className="mx-auto border-[#0C444B] px-2  py-16 lg:px-16 lg:w-8/12 border-2">
        <div className=" grid lg:grid-cols-2 ">
        <div>
          <h1 className="text-5xl font-bold lg:mt-8 text-[#114C54]">
            Let's stay in touch
          </h1>
          <p className="text-lg text-[#854A20] mt-5">
            Just enter your email address and ZIP code to get the scoop on
            everything Cox
          </p>
        </div>

        <div >
             <div className="flex mt-4 lg:mt-0 lg:gap-x-5 gap-x-2">
             <div class="form-control w-full max-w-xs">
            <label class="label">
              <span class="label-text text-lg">Enter Your Email</span>
            </label>
            <input
              type="text"
              class="input bg-[#F8BF8A] focus:outline-none text-[#114C54] text-xl input-bordered w-full max-w-xs"
            />
          </div>
          <div class="form-control lg:w-6/12 max-w-xs">
            <label class="label">
              <span class="label-text text-lg">ZIP Code</span>
            </label>
            <input
              type="text"
              class="input bg-[#F8BF8A] focus:outline-none text-[#114C54] text-xl input-bordered w-full max-w-xs"
            />
          </div>
             </div>
             <button className='btn btn-primary  py-3 mt-5 ml-auto block h-auto bg-[#073A42] text-[#F8BF88] border-none font-bold'>Get Started</button>
        </div>
        </div>
         
         <p className="text-center text-[#854A20] mt-8 lg:my-16">We Care about your privacy. <span className="underline font-bold text-[#073A42]">See details</span></p>
      </div>
      <p className="text-center text-[#854A20] my-16">See <span className="underline font-bold text-[#073A42]">30-Day Money-Back Gurantee </span> terms and conditions</p>
    </section>
  );
};

export default BottomBanner;
