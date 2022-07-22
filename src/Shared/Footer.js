import React from 'react';
import './footer.css'
import { AiOutlineArrowRight,AiFillFacebook,AiFillTwitterSquare,AiFillLinkedin,AiFillInstagram,AiOutlineCopyrightCircle} from 'react-icons/ai'

const Footer = () => {
    return (
        <footer className='bg-[#E0E0E0] rounded-xl'>
            <div className='grid lg:grid-cols-4 py-10 px-4 gap-5'>
                <div>
                    <h1 className='text-3xl font-bold text-primary'>Digimoney</h1>
                    <hr />
                     <h6 className=' mt-5 text-lg'>On the other hand, we denounce whteous indig nation and dislike men wh beguiled moraized er hand consec teturus adipis iscing elit eiusmod tempordunt labore dolore magna aliqua consector tetur adip iscing.</h6> 
                   <div className='flex mt-10'>
                     <AiFillFacebook   className='w-10 h-10 text-[#0674E1]'/>
                     <AiFillTwitterSquare  className='w-10 h-10 text-[#0674E1]'/>
                     <AiFillLinkedin  className='w-10 h-10 text-[#0674E1]'/>
                     <AiFillInstagram  className='w-10 h-10 text-[#B0358B]'/>
                   </div>
                </div>
                <div>
                    <h1 className='text-3xl font-bold text-primary'>Our Company</h1>
                    <hr /> 
                    <p className='flex items-center mb-5'><AiOutlineArrowRight className='w-6 mr-4 h-6 text-primary' /> Company & Team</p>
                    <p className='flex items-center mb-5'><AiOutlineArrowRight className='w-6 mr-4 h-6 text-primary' /> OurServices</p>
                    <p className='flex items-center mb-5'><AiOutlineArrowRight className='w-6 mr-4 h-6 text-primary' /> News & Blog</p>
                    <p className='flex items-center mb-5'><AiOutlineArrowRight className='w-6 mr-4 h-6 text-primary' /> Pricing Plan</p>
                    <p className='flex items-center mb-5'><AiOutlineArrowRight className='w-6 mr-4 h-6 text-primary' /> Contact Us</p>
                    <p className='flex items-center mb-5'><AiOutlineArrowRight className='w-6 mr-4 h-6 text-primary' /> Privacy Policy</p>
                
                </div>
                <div>
                    <h1 className='text-3xl font-bold text-primary'>Products</h1>
                    <hr />
                    <p className='flex items-center mb-5'><AiOutlineArrowRight className='w-6 mr-4 h-6 text-primary' /> Online Payment</p>
                    <p className='flex items-center mb-5'><AiOutlineArrowRight className='w-6 mr-4 h-6 text-primary' /> Deposite Skim</p>
                    <p className='flex items-center mb-5'><AiOutlineArrowRight className='w-6 mr-4 h-6 text-primary' /> Online Shopping</p>
                    <p className='flex items-center mb-5'><AiOutlineArrowRight className='w-6 mr-4 h-6 text-primary' /> Master Card</p>
                    <p className='flex items-center mb-5'><AiOutlineArrowRight className='w-6 mr-4 h-6 text-primary' /> Receive Money</p>
                    <p className='flex items-center mb-5'><AiOutlineArrowRight className='w-6 mr-4 h-6 text-primary' /> Affiliate Program</p>
                
                </div>
                <div>
                    <h1 className='text-3xl font-bold text-primary'>Subscibe</h1>
                    <hr />
                    <h6 className='mb-4 text-lg'>Tablished fact that a reader will be distrated by the readable content</h6>
                    <input className='input  input-primary text-black w-full mb-2' placeholder='Your Email' />
                    <button className='btn btn-primary w-full font-bold'>Subscribe</button>
                </div>
            </div>
            <hr className='bg-black h-[2px]' />
            <div className='flex justify-center items-center'>

                <h5 className='flex flex-wrap items-center font-semibold text-sm lg:text-xl'><AiOutlineCopyrightCircle /> 2022 DigiMoney. All Rights Reserved By <span className='text-primary'>Team Bug Finders</span></h5>
            </div>
        </footer>
    );
};

export default Footer;