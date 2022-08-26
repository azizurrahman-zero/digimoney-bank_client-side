import React, { useEffect } from 'react';
import Mission from './Mission';
import AOS from "aos";
import "aos/dist/aos.css";


   

const Missions = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);
    return (
        <section className='lg:my-32   my-12 lg:mx-28 px-4 lg:px-0'>
            <h1 data-aos="fade-in" className='lg:text-5xl text-base-300 text-3xl font-bold text-center mb-3 '>One Mission. Two Cards</h1>
            <p data-aos="fade-in" className='text-gray-400  text-lg lg:w-[34%] text-center mx-auto'>We are providing our clients two cards for their one  mission and finance.</p>
            <div data-aos="fade-in" className='grid lg:grid-cols-2 lg:gap-32 gap-y-12 lg:mt-28 mt-12'>
                 <Mission title="Visa and MasterCard Gold Cards!" information="No limits" aros="AORs 15.99%-30.49%" cashback="5%-10% cash back at select merchants"/>
                 <Mission  title="Visa Classic and MasterCard Standard Card" information="$500-$5,000 limits" aros="AORs 19.99%-29.49%" cashback="2%-5% cash back at select merchants"/>
            </div>
            

        </section>
    );
};

export default Missions;