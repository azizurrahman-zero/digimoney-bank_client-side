import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { toast } from "react-toastify";

const BottomBanner = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const handleSubmit=(e)=>{
        e.preventDefault()
        const email=e.target.email.value 
        const zip=e.target.zip.value 
        const visitor={email,zip}
        fetch("https://tranquil-lake-95777.herokuapp.com/visitordata",{
          method:"POST",
          headers:{
            "content-type":"application/json"
          },
          body:JSON.stringify(visitor)
        })
        .then(res=>res.json())
        .then(data=>{
       
          if(data?.message){
            toast.error(data.message)
            e.target.reset()
            return;
          }
          toast.success("Thanks for prodive your email ")
          e.target.reset()
        })
       
  }
  return (
    <section data-aos="fade-in" className="bg-neutral lg:pt-28 pt-12 px-2 lg:px-0 lg:pb-36 pb-1 ">
      <div className="mx-auto border-[#0C444B] px-2  py-16 lg:px-16 lg:w-8/12 border-2">
        <div className=" grid lg:grid-cols-2 ">
        <div>
          <h1 className="text-5xl font-bold lg:mt-8 text-base-300">
            Let's stay in touch
          </h1>
          <p className="text-lg text-gray-500 mt-5">
            Just enter your email address and ZIP code to get the scoop on
            everything Cox
          </p>
        </div>

        <div >
      
          <form onSubmit={handleSubmit}>

             <div className="flex mt-4 lg:mt-0 lg:gap-x-5 gap-x-2">
             <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-lg">Enter Your Email</span>
            </label>
            <input
              type="text"
              name="email"
              required
              className="input bg-neutral focus:outline-none text-[#114C54] text-xl input-bordered border-base-300 w-full max-w-xs"
            />
          </div>
          <div className="form-control lg:w-6/12 max-w-xs">
            <label className="label">
              <span className="label-text text-lg">ZIP Code</span>
            </label>
            <input
              type="text"
              name="zip"
              required
              className="input bg-neutral focus:outline-none text-[#114C54] text-xl input-bordered border-base-300 w-full max-w-xs"
              />
          </div>
             </div>
             <button type="submit" className='btn  bg-base-300 hover:bg-base-300  py-3 mt-5 ml-auto block h-auto text-[#F8BF88] border-none font-bold'>Get Started</button>
              </form>
        </div>
        </div>
         
         <p className="text-center font-semibold text-base-300 mt-8 lg:my-16">We Care about your privacy. 
         {/* <span  className="underline font-bold text-[#073A42]">See details</span> */}
         </p>
      </div>
      {/* <p className="text-center text-[#88776a] my-16">See <span className="underline font-bold text-[#82bfc9]">30-Day Money-Back Gurantee </span> terms and conditions</p> */}
    </section>
  );
};

export default BottomBanner;
