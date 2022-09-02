import React, { useEffect } from 'react';
import './footer.css'

import { AiOutlineArrowRight} from 'react-icons/ai'
import AOS from "aos";
import "aos/dist/aos.css";
import { toast } from 'react-toastify';
const Footer = () => { 
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleSubmit=(e)=>{
    e.preventDefault()
    const email=e.target.email.value 
   
    fetch("https://tranquil-lake-95777.herokuapp.com/subscribe",{
      method:"POST",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify({email})
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      if(data?.message){
        toast.error(data.message)
        e.target.reset()
        return;
      }
      toast.success("Thanks for Subscrie")
      e.target.reset()
    })
   
}
    return (
        <footer data-aos="fade-in" className='bg-primary mt-4 lg:px-28 px-4 py-16'>

            <div className='grid lg:grid-cols-3'>
                <div>
                   <h1 className='text-lg font-bold text-white'>DigiMoney</h1>

                    <p className='text-md text-gray-400 mt-10'>Subscribe to keep up with <br />the latest news</p>
                     <form action="" onSubmit={handleSubmit}>

                    <div className='flex items-center my-4 gap-x-2 '>
                        <input name="email" required className='input border-none focus:outline-none w-7/12 input-primary rounded-none' type="text" placeholder='Enter your email here' />
                      <button><AiOutlineArrowRight type='submit' className='text-white bg-secondary  w-12 h-[100%] ' /></button>
                        
                    </div>
                     </form>
                    <p className='text-gray-400'>By submitting this form , you acknwledge that <br />
                    you have the terms of our privacy statement</p>
                </div>
                <div >
                    <div className='w-fit lg:mx-auto mt-5'>
                    
                        
                    <h1 className='text-lg font-bold text-white'>Solution</h1>
                    <p className='text-gray-400 mt-4'>Bank Assets</p>
                    <p className='text-gray-400 mt-4'>ARS Network</p>
                    <p className='text-gray-400 mt-4'>Mobile Bank</p>
                    <p className='text-gray-400 mt-4'>Open Finance APIs</p>
                    </div>
                </div>
                <div>
                    <div className='w-fit lg:mx-auto mt-5'>

                    <h1 className='text-lg font-bold text-white'>Company</h1>
                    <p className='text-gray-400 mt-4'>About Us</p>
                    <p className='text-gray-400 mt-4'>Careers</p>
                    <p className='text-gray-400 mt-4'>Contact Us</p>
                    <p className='text-gray-400 mt-4'>News & Insights</p>
                    </div>
                </div>
             
            </div>


  
        </footer>
    );
};

export default Footer;