import { Link } from 'react-router-dom'

import socialMedia from '../../assets/images/services/social-media.png'
import profiling from '../../assets/images/services/profiling.png'
import ads from '../../assets/images/services/ads& analytics.png'
import marketing from '../../assets/images/services/marketing.avif'
import videography from '../../assets/images/services/videograhpy.png'
import photography from '../../assets/images/services/photography.png'
import graphicDesign from '../../assets/images/services/grahic.png'
import cgi from '../../assets/images/services/CGI.webp'
import tvProduction from '../../assets/images/services/tv-production.avif'
import podcast from '../../assets/images/services/podcast.webp'
import drone from '../../assets/images/services/dron.webp'
import interactive from '../../assets/images/services/interactive.png'
import automation from '../../assets/images/services/automation.webp'
import webDevelopment from '../../assets/images/services/web development.avif'
import databaseMarketing from '../../assets/images/services/database-marketing.png'
import eventSetup from '../../assets/images/services/event.png'
import promotion from '../../assets/images/services/promotion for event.webp'


import arrowIcon from '../../assets/icons/arrow-right-top.svg'
import bg2 from '../../assets/images/bg2.png'
import attachement from '../../assets/images/IMG_5044.png'
import { useEffect, useState } from 'react'

const Services = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    
  
    useEffect(() => {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
        
      };
  
      
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []); 
    const serviceItems = [
        {
            title: " Digital Marketing & Brand Promotion",
            subItems: [
                {
                    title: "Social Media & LinkedIn Management",
                    image: socialMedia,
                    description: "We optimize social media and LinkedIn profiles, create engaging content, and execute targeted campaigns that grow your online presence and drive business success.",
                    imagePosition: "left"
                },
                {
                    title: "Profiling & Marketing for Corporate Clients",
                    image: profiling,
                    description: "Our corporate profiling services ensure that your business stands out in the industry, reinforcing credibility and thought leadership.",
                    imagePosition: "right"
                },
                {
                    title: "Paid Ads & Analytics",
                    image: ads,
                    description: "Our expert team develops and manages targeted advertising campaigns across multiple platforms, ensuring maximum reach and conversion while providing deep insights for data-driven decisions.",
                    imagePosition: "left"
                },
                {
                    title: " Marketing & Promotions",
                    image: marketing,
                    description: "We craft innovative promotional campaigns and brand activations designed to increase visibility,engagement, and customer retention.",
                    imagePosition: "right"
                },

            ]
        },
        {
            title: "Creative Media Production",
            subItems: [
                {
                    title: "Videography",
                    image: videography,
                    description: "From promotional videos and corporate films to product showcases, our professional videography services ensure high-impact visual storytelling.",
                    imagePosition: "left"
                },
                {
                    title: "Photography (Studio & Outdoor)",
                    image: photography,
                    description: "Whether in a controlled studio setting or dynamic outdoor locations, we produce high-quality imagery that enhances brand identity.",
                    imagePosition: "right"
                },
                {
                    title: "Graphic Design",
                    image: graphicDesign,
                    description: "Our team creates eye-catching branding materials, including logos, brochures, digital assets, and packaging designs tailored to your unique needs.",
                    imagePosition: "left"
                },
                {
                    title: "    Computer-Generated Imagery (CGI)",
                    image: cgi,
                    description: "Our CGI solutions bring complex visual ideas to life, perfect for advertisements, product visualizations,and architectural presentations.",
                    imagePosition: "right"
                },
                {
                    title: "TV Production",
                    image: tvProduction,
                    description: " We offer full-scale TV commercial production, from scriptwriting and shooting to post-production, to maximize audience engagement.",
                    imagePosition: "left"
                },
                {
                    title: "Podcast Short Clipping for Social Media",
                    image: podcast,
                    description: "We extract, edit, and optimize the most engaging parts of your podcast, turning them into bite-sized clips for social media marketing.",
                    imagePosition: "right"
                },
                {
                    title: "Drone Footage",
                    image: drone,
                    description: " Using advanced aerial drone technology, we capture breathtaking footage that adds cinematic value to marketing campaigns and corporate presentations.",
                    imagePosition: "left"
                },
            ]
        },
        {
            title: "Interactive & Immersive Experiences",
            subItems: [
                {
                    title: "Interactive Content",
                    image: interactive,
                    description: " We develop engaging digital experiences such as interactive quizzes, gamification strategies, and augmented reality (AR) features to captivate audiences and enhance brand interaction.",
                    imagePosition: "right"
                },
            ]
        },
        {
            title: " Business Technology & Web Solutions",
            subItems: [
                {
                    title: "Business Automations & CRM",
                    image: automation,
                    description: "We provide end-to-end automation solutions to streamline business processes, improve efficiency, and  optimize performance. Our Customer Relationship Management (CRM) solutions help businesses manage customer interactions, track sales pipelines, automate workflows, and enhance customer engagement.",
                    imagePosition: "left"
                },
                {
                    title: "Web Development",
                    image: webDevelopment,
                    description: "We design and develop fast, secure, and visually appealing websites tailored to your business needs,ensuring seamless user experience and high engagement rates.",
                    imagePosition: "right"
                },
                {
                    title: "Database Marketing",
                    image: databaseMarketing,
                    description: "We create targeted email campaigns, automate follow-ups, and manage customer data to drive sales and customer retention.",
                    imagePosition: "left"
                },
            ]
        },
        {
            title: "Event Planning & Execution ",
            subItems: [
                {
                    title: "Events Set Up",
                    image: eventSetup,
                    description: "We provide full-service event setup, ensuring branding and execution align with your vision to create a memorable and professional experience.",
                    imagePosition: "right"
                },
                {
                    title: " Marketing & Promotions for Events",
                    image: promotion,
                    description: " We offer specialized marketing and promotional strategies for events, ensuring maximum attendance, engagement, and visibility. Our services include pre-event digital promotions, influencer collaborations, on-site branding, and post-event media coverage to create a lasting impact.",
                    imagePosition: "left"
                },
            ]
        },

    ];
    return (
        <>
            <section className="flex flex-col gap-5 md:gap-10 lg:px-32 px-5 md:px-10 w-full bg-cover bg-center mt-48">
                {serviceItems.map((item, index) => (
                    <div key={index}>
                        <h1 className="relative z-10 text-black 2xl:text-start text-center md:text-6xl text-4xl font-medium underline underline-offset-8">{item.title}</h1>
                        <div className="w-full md:mt-24 mt-16"></div>
                        {item.subItems.map((subitem, subindex) => (
                            <>
                                <div key={subindex} className="flex flex-col 2xl:flex-row items-center justify-center gap-16">
                                    {subitem.imagePosition === 'left' || windowWidth < 1537 ? (
                                        <>
                                            <img src={subitem.image} alt={item.title} className="w-full max-w-[800px] rounded-xl" />
                                            <div className="flex flex-col items-center justify-center gap-5">

                                                <h1 className="relative z-10 text-black 2xl:text-start text-center md:text-6xl text-4xl font-medium">{subitem.title}</h1>
                                                <div className='text-black text-lg w-full 2xl:text-start text-center'>
                                                    {subitem.description}
                                                </div>
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <div className="flex flex-col items-center justify-center gap-5">
                                                <h1 className="relative z-10 text-black 2xl:text-start text-center md:text-6xl text-4xl font-medium">{subitem.title}</h1>
                                                <div className='text-black text-lg w-full 2xl:text-start text-center'>
                                                    {subitem.description}
                                                </div>
                                            </div>
                                            <img src={subitem.image} alt={item.title} className="w-full max-w-[800px] rounded-xl" />
                                        </>
                                    )}
                                </div>
                                <div className="w-full border-b border-gray md:mt-24 mt-16"></div>
                            </>
                        ))}
                    </div>
                ))}
            </section>
            <section className="flex flex-col items-center gap-5 md:gap-10 lg:px-32 px-5 md:px-10 w-full bg-cover bg-center md:h-[90%] h-[40%] ">
                <div className="w-full h-full bg-cover bg-center rounded-2xl flex gap-5 items-center justify-between md:px-20 lg:px-32 2xl:px-48 px-5 py-10 md:py-20" style={{ backgroundImage: `url(${bg2})` }}>
                    <div className="flex flex-col gap-10 items-start">
                        <div className="text-white md:text-6xl text-4xl font-medium">Prepared to <br className="hidden md:block" /><span className="text-[#00ff26]">shine?</span></div>
                        <div className="w-full flex items-center justify-start ">
                            <Link to="https://calendly.com/d/cqyy-j3g-6yg" target="_blank" className="bg-[#00ff26] text-[#1D1D1B] hover:text-[#1D1D1B]  text-sm md:text-base flex gap-1 px-6 py-4 cursor-pointer rounded-xl font-semibold ">
                                <p>Book a call</p>
                                <img src={arrowIcon} alt="icon" width={20} className="font-semibold" />
                            </Link>
                        </div>
                    </div>
                    <div>
                        <img src={attachement} alt="attachement" className="w-full md:max-w-[300px]  2xl:max-w-[400px] max-w-[200px] rounded-2xl" />
                    </div>
                </div>
                <div className="w-full border-b border-gray md:mt-24 mt-16">
                </div>
            </section>
        </>
    )
}

export default Services
