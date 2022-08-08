import React, { useEffect } from 'react';
import Review from './Review';
import AOS from "aos";
import "aos/dist/aos.css";




const CustomerReview = () => {
    const reviewData=[
        {id:1,name:"John Carter",address:"San Francisco,CA",title:"The Best Finance Site",comment:" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate cum ea quidem atque. Consequuntur culpa neque corrupti non iusto nostrum ipsam debitis.",src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJfa758-9Zet25uR43OnWUDxPh_5ivrKWg4g&usqp=CAU"},
        {id:1,name:"John Carter",address:"San Francisco,CA",title:"The Best Finance Site",comment:" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate cum ea quidem atque. Consequuntur culpa neque corrupti non iusto nostrum ipsam debitis.",src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJfa758-9Zet25uR43OnWUDxPh_5ivrKWg4g&usqp=CAU"},
        {id:1,name:"John Carter",address:"San Francisco,CA",title:"The Best Finance Site",comment:" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate cum ea quidem atque. Consequuntur culpa neque corrupti non iusto nostrum ipsam debitis.",src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJfa758-9Zet25uR43OnWUDxPh_5ivrKWg4g&usqp=CAU"},
        {id:1,name:"John Carter",address:"San Francisco,CA",title:"The Best Finance Site",comment:" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate cum ea quidem atque. Consequuntur culpa neque corrupti non iusto nostrum ipsam debitis.",src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJfa758-9Zet25uR43OnWUDxPh_5ivrKWg4g&usqp=CAU"},
    ]
       
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
    return (
        <section data-aos="fade-in" className='lg:my-32 my-12 lg:mx-28 px-4 lg:px-0'>
                <h1 data-aos="fade-in" className='lg:text-5xl text-3xl font-bold text-center mb-3 '>See Some Words</h1>
                <p data-aos="fade-in" className='text-gray-400  text-lg lg:w-[34%] text-center mx-auto'>We are providing our clients two cards for their one  mission and finance.</p> 
                 <div className='grid lg:grid-cols-2 lg:gap-32  lg:mx-0 gap-12 mt-28'>
                        {
                            reviewData.map(review=><Review review={review} />)
                        }
                 </div>
       
       
        </section>
    );
};

export default CustomerReview;