import React from 'react';
import './team.css'
import TeamMember from './TeamMember';



const Team = () => {
    const teamData=[
        {id:1,name:"Istiak Hasan",designation:"Web Developer",desc:"Hello, I am Grace. I am a full-time Website designer and Graphics designer with many years of experience working for people( business organizations). I have used my skills and knowledge to help organizations and individuals build their website to fit their business brand and expectations. On a personal ground, I have also done project that has helped me gain experience in areas like WordPress, Squarespace, Shopify, Wix, Godaddy, Big-commerce, Woo-commerce, and lots more.",facebook:"https://www.facebook.com/istieak",linkedin:"https://www.linkedin.com/",twitter:"https://www.twiter.com/",image:"https://i.ibb.co/wMD5qkJ/istiak.png"},
        {id:1,name:"Istiak Hasan",designation:"Web Developer",desc:"Hello, I am Grace. I am a full-time Website designer and Graphics designer with many years of experience working for people( business organizations). I have used my skills and knowledge to help organizations and individuals build their website to fit their business brand and expectations. On a personal ground, I have also done project that has helped me gain experience in areas like WordPress, Squarespace, Shopify, Wix, Godaddy, Big-commerce, Woo-commerce, and lots more.",facebook:"https://www.facebook.com/istieak",linkedin:"https://www.linkedin.com/",twitter:"https://www.twiter.com/",image:"https://i.ibb.co/wMD5qkJ/istiak.png"},
        {id:1,name:"Istiak Hasan",designation:"Web Developer",desc:"Hello, I am Grace. I am a full-time Website designer and Graphics designer with many years of experience working for people( business organizations). I have used my skills and knowledge to help organizations and individuals build their website to fit their business brand and expectations. On a personal ground, I have also done project that has helped me gain experience in areas like WordPress, Squarespace, Shopify, Wix, Godaddy, Big-commerce, Woo-commerce, and lots more.",facebook:"https://www.facebook.com/istieak",linkedin:"https://www.linkedin.com/",twitter:"https://www.twiter.com/",image:"https://i.ibb.co/wMD5qkJ/istiak.png"},
        {id:1,name:"Istiak Hasan",designation:"Web Developer",desc:"Hello, I am Grace. I am a full-time Website designer and Graphics designer with many years of experience working for people( business organizations). I have used my skills and knowledge to help organizations and individuals build their website to fit their business brand and expectations. On a personal ground, I have also done project that has helped me gain experience in areas like WordPress, Squarespace, Shopify, Wix, Godaddy, Big-commerce, Woo-commerce, and lots more.",facebook:"https://www.facebook.com/istieak",linkedin:"https://www.linkedin.com/",twitter:"https://www.twiter.com/",image:"https://i.ibb.co/wMD5qkJ/istiak.png"},
        {id:1,name:"Istiak Hasan",designation:"Web Developer",desc:"Hello, I am Grace. I am a full-time Website designer and Graphics designer with many years of experience working for people( business organizations). I have used my skills and knowledge to help organizations and individuals build their website to fit their business brand and expectations. On a personal ground, I have also done project that has helped me gain experience in areas like WordPress, Squarespace, Shopify, Wix, Godaddy, Big-commerce, Woo-commerce, and lots more.",facebook:"https://www.facebook.com/istieak",linkedin:"https://www.linkedin.com/",twitter:"https://www.twiter.com/",image:"https://i.ibb.co/wMD5qkJ/istiak.png"},
        {id:1,name:"Istiak Hasan",designation:"Web Developer",desc:"Hello, I am Grace. I am a full-time Website designer and Graphics designer with many years of experience working for people( business organizations). I have used my skills and knowledge to help organizations and individuals build their website to fit their business brand and expectations. On a personal ground, I have also done project that has helped me gain experience in areas like WordPress, Squarespace, Shopify, Wix, Godaddy, Big-commerce, Woo-commerce, and lots more.",facebook:"https://www.facebook.com/istieak",linkedin:"https://www.linkedin.com/",twitter:"https://www.twiter.com/",image:"https://i.ibb.co/wMD5qkJ/istiak.png"},
    ]
    return (
        <main className='team-container min-h-screen w-full p-10 mt-2'>
             <h1 className='text-3xl mb-10 text-white uppercase'>Our team</h1>


             <div className='grid grid-cols-3 gap-5'>
                    {
                        teamData.map(team=><TeamMember team={team} />)
                    }
             </div>
        </main>
    );
};

export default Team;