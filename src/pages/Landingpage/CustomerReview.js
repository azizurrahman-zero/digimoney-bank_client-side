import React, { useEffect } from 'react';
import Review from './Review';
import AOS from "aos";
import "aos/dist/aos.css";
import {useSelector,useDispatch} from 'react-redux'
import { fetchUsers } from '../../redux/reducers/ReviewReducer';




const CustomerReview = () => {
  const review=useSelector(state=>state.reviews)
  const userReview=[...review.review].reverse()
  


  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(fetchUsers())
  },[dispatch])
  
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
 


    return (
        <section data-aos="fade-in" className='lg:my-32 my-12 lg:mx-28 px-4 lg:px-0'>
                <h1 data-aos="fade-in" className='lg:text-5xl text-3xl font-bold text-base-300 text-center mb-3 '>See Some Words</h1>
                <p data-aos="fade-in" className='text-gray-400  text-lg lg:w-[34%]  text-center mx-auto'>We are providing our clients two cards for their one  mission and finance.</p> 
                 <div className='grid lg:grid-cols-2 lg:gap-32  lg:mx-0 gap-12 mt-28'>
                        {
                            userReview.slice(0,4).map(review=><Review key={review._id} review={review} />)
                        }
                 </div>
       
       
        </section>
    );
};

export default CustomerReview;