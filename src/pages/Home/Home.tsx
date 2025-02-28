"use client";
import { Link } from "react-router-dom"

import ServiceCard from "../../components/service-card";

import aboutUsVideo from '../../assets/video/Cadac GRILLOGAS.mp4'
import ApproachVideo from '../../assets/video/Marketing video 2.mp4'

import arrowIcon from '../../assets/icons/arrow-right-top.svg'
import Upwork from '../../assets/images/upwork-dark.png'
import Loom from '../../assets/images/loom-dark.png'
import Slack from '../../assets/images/slack.png'
import Sportify from '../../assets/images/spotify-dark.png'
import Square from '../../assets/images/square-dark.png'
import Stripe from '../../assets/images/stripe-brand.png'
import Tinder from '../../assets/images/tinder-dark.png'
import Trello from '../../assets/images/trello.png'
import Zoom from '../../assets/images/zoom-dark.png'
import bg from '../../assets/images/bg.png'
import bg2 from '../../assets/images/bg2.png'

import portfolio1 from '../../assets/images/portfolio-01.png'
import portfolio2 from '../../assets/images/portfolio-02.png'
import portfolio3 from '../../assets/images/portfolio-03.png'
import portfolio4 from '../../assets/images/portfolio-04.png'

import service1 from '../../assets/images/service-image-1.png'
import service2 from '../../assets/images/service-image-2.png'
import service3 from '../../assets/images/service-image-3.png'
import service4 from '../../assets/images/service-image-4.png'
import service5 from '../../assets/images/service-image-5.png'

import attachement from '../../assets/images/IMG_5044.png'




export default function Home() {

  const companyItems = [
    {
      image: Upwork,
      name: "Upwork",
    },
    {
      image: Loom,
      name: "Loom",
    },
    {
      image: Slack,
      name: "Slack",
    },
    {
      image: Sportify,
      name: "Sportify",
    },
    {
      image: Square,
      name: "Square",
    },
    {
      image: Stripe,
      name: "Stripe",
    },
    {
      image: Tinder,
      name: "Tinder",
    },
    {
      image: Trello,
      name: "Trello",
    },
    {
      image: Zoom,
      name: "Zoom",
    },
  ];

  const portfolioItems = [
    {
      title: "Cyber Security Landing Page",
      description: "Unveil a world of creativity, strategy, and technology as we offer a spectrum of services tailored to elevate your brand's presence.",
      image: portfolio1,
    },
    {
      title: "E-Commerce App Development",
      description: "Unveil a world of creativity, strategy, and technology as we offer a spectrum of services tailored to elevate your brand's presence.",
      image: portfolio2,
    },
    {
      title: "Web Design For Your Business",
      description: "Unveil a world of creativity, strategy, and technology as we offer a spectrum of services tailored to elevate your brand's presence.",
      image: portfolio3,
    },
    {
      title: "Shopify Responsive Website Design",
      description: "Unveil a world of creativity, strategy, and technology as we offer a spectrum of services tailored to elevate your brand's presence.",
      image: portfolio4,
    },
  ];

  const serviceItems = [
    {
      number: "01",
      title: "Comprehensive Marketing Solutions",
      description: "Sage-D Marketing Group specializes in end-to-end marketing solutions that elevate your brand in a competitive landscape. Our innovative campaigns are tailored to captivate and convert your target audience, ensuring your message resonates effectively.",
      image: service1,
    },
    {
      number: "02",
      title: "Digital Presence Optimization",
      description: "Enhance your online visibility with our expert social media and LinkedIn management services. We create engaging content and execute targeted campaigns that foster growth, drive business success, and strengthen your brand’s online presence.",
      image: service2,
    },
    {
      number: "03",
      title: "Targeted Advertising & Analytics",
      description: "Maximize your reach with our data-driven advertising strategies. We develop and manage targeted campaigns across multiple platforms, providing deep insights and analytics to optimize performance and drive conversions effectively.",
      image: service3,
    },
    {
      number: "04",
      title: "Creative Media Production",
      description: "Bring your brand story to life with our professional videography and photography services. From promotional videos and corporate films to high-quality imagery, we deliver impactful visual content that enhances your brand identity and engages your audience.",
      image: service4,
    },
    {
      number: "05",
      title: "Innovative Brand Design",
      description: "Our graphic design team crafts eye-catching branding materials tailored to your unique needs. From logos and brochures to CGI and packaging designs, we ensure your visual identity stands out and communicates your brand’s essence effectively.",
      image: service5,
    },
  ];

  return (
    <>
      <section className="flex flex-col items-start md:gap-10 gap-5 justify-start lg:px-32 px-5 md:px-10 w-full  bg-cover bg-center h-screen" style={{ backgroundImage: `url(${bg})` }}>
        <div className="text-xl md:text-2xl mt-48 md:mt-56 font-medium px-3 py-2 rounded-xl text-[#00ff26] cursor-pointer bg-[#282826] border-[#FFFFFF1A] border">Your Brand Our Passion</div>
        <h1 className="text-white md:text-6xl text-4xl font-medium">We Are Shaping Concepts <br className="hidden md:block" />Into Digital Innovations</h1>
        <p className="text-white text-lg md:text-xl">We are a passionate collective of creatives, designers, and strategists dedicated to<br className="hidden md:block" /> shaping remarkable brand experiences.</p>
        <Link to="https://google.com" className="bg-[#00ff26] text-[#1D1D1B] text-sm md:text-base flex gap-1 px-6 py-4 cursor-pointer rounded-xl font-semibold ">
          <p>Book a call</p>
          <img src={arrowIcon} alt="icon" width={20} className="font-semibold" />
        </Link>
      </section>
      <section className="flex flex-col items-center gap-5 md:gap-10 lg:px-32 px-5 md:px-10 w-full">
        <div className="text-black  md:mt-24 mt-16 flex flex-col md:gap-10 gap-5 items-center">
          <div className="relative pl-6 md:text-xl text-base">
            <span className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-[#00ff26] mr-2 "></span>
            About Sage-D Marketing
          </div>
          <div className="text-black  text-center md:text-6xl text-4xl font-medium">
            We are Creative Digital Agency
          </div>
          <Link to="/layouts/about-us" className="flex gap-1 px-6 py-4 cursor-pointer rounded-xl md:text-xl text-noremal">
            <p>More aboout us</p>
            <img src={arrowIcon} alt="icon" width={20} className="font-semibold" />
          </Link>
        </div>
        <div className="w-full flex items-center justify-center ">
          <video controls className="w-full max-w-8xl rounded-2xl">
            <source src={aboutUsVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="w-full border-b border-gray md:mt-24 mt-16">
        </div>
      </section>
      <section className="flex flex-col items-center gap-5 md:gap-10 lg:px-32 px-5 md:px-10 w-full">
        <div className="text-black md:mt-24 mt-16 flex flex-col md:gap-10 gap-5 items-center">
          <div className="relative pl-6 md:text-xl text-base">
            <span className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-[#00ff26] mr-2"></span>
            Our Clients
          </div>
          <div className="text-black  text-center md:text-6xl text-4xl font-medium">
            Companies Who Trust Us
          </div>
        </div>
        <div className="w-full grid md:grid-cols-3 grid-cols-1 items-center justify-center">
          {companyItems.map((item, index) => (
            <div className="px-24 py-10">
              <img src={item.image} alt={item.name} key={index} className="w-full md:max-w-[150px] max-w-[130px]" />
            </div>
          ))}
        </div>
        <div className="w-full border-b border-gray md:mt-24 mt-16">
        </div>
      </section>
      <section className="flex flex-col items-center gap-5 md:gap-10 lg:px-32 px-5 md:px-10 w-full">
        <div className="text-black  text-center md:text-6xl text-4xl font-medium md:mt-24 mt-16">
          Featured Work
        </div>
        <div className="w-full grid xl:grid-cols-2 grid-cols-1 gap-y-5 gap-x-5">
          {portfolioItems.map((item, index) => (
            <div className=" flex flex-col items-center gap-5">
              <img src={item.image} alt={item.title} key={index} className="w-full max-w-[900px] rounded-2xl" />
              <div className="text-black text-center md:text-3xl text-xl font-medium">
                {item.title}
              </div>
            </div>
          ))}
        </div>
        <Link to="/layouts/about-us" className="flex gap-1 px-6 py-4 cursor-pointer rounded-xl md:text-xl text-base">
          <p>View all work</p>
          <img src={arrowIcon} alt="icon" width={20} className="font-semibold" />
        </Link>
        <div className="w-full border-b border-gray md:mt-24 mt-16">
        </div>
      </section>
      <section className="flex flex-col items-center gap-5 md:gap-10 lg:px-32 px-5 md:px-10 w-full">
        <div className="text-black md:mt-24 mt-16 flex flex-col md:gap-10 gap-5 items-center">
          <div className="relative pl-6 md:text-xl text-base">
            <span className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-[#00ff26] mr-2"></span>
            WHAT WE DO
          </div>
          <div className="text-black  text-center md:text-6xl text-4xl font-medium">
            We Provide Top Notch Services For You
          </div>
        </div>
        <div className="flex flex-col gap-7 items-center justify-center w-full">
          {serviceItems.map((item, index) => (
            <ServiceCard key={index} number={item.number} title={item.title} description={item.description} image={item.image} />
          ))}
        </div>
        <Link to="/layouts/about-us" className="flex gap-1 px-6 py-4 cursor-pointer rounded-xl md:text-xl text-base">
          <p>View all services</p>
          <img src={arrowIcon} alt="icon" width={20} className="font-semibold" />
        </Link>
        <div className="w-full border-b border-gray md:mt-24 mt-16">
        </div>
      </section>
      <section className="flex flex-col items-center gap-5 md:gap-10 lg:px-32 px-5 md:px-10 w-full">
        <div className="text-black md:mt-24 mt-16 flex flex-col md:gap-10 gap-5 items-center">
          <div className="relative pl-6 md:text-xl text-base">
            <span className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-[#00ff26] mr-2"></span>
            How WE DO
          </div>
          <div className="text-black  text-center md:text-6xl text-4xl font-medium">
            The Framework Of Thought
          </div>
        </div>
        <div className="w-full flex items-center justify-center ">
          <video controls className="w-full max-w-6xl rounded-2xl">
            <source src={ApproachVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <Link to="/" className="flex gap-1 px-6 py-4 cursor-pointer rounded-xl md:text-xl text-base">
          <p>View Our Approach</p>
          <img src={arrowIcon} alt="icon" width={20} className="font-semibold" />
        </Link>
        <div className="w-full border-b border-gray md:mt-24 mt-16">
        </div>
      </section>
      <section className="flex flex-col items-center gap-5 md:gap-10 lg:px-32 px-5 md:px-10 w-full bg-cover bg-center md:h-[90%] h-[40%] ">
        <div className="w-full h-full bg-cover bg-center rounded-2xl flex gap-5 items-center justify-between md:px-20 lg:px-32 2xl:px-48 px-5 py-10 md:py-20" style={{ backgroundImage: `url(${bg2})` }}>
          <div className="flex flex-col gap-10 items-start">
            <div className="text-white md:text-6xl text-4xl font-medium">Prepared to <br className="hidden md:block" /><span className="text-[#00ff26]">shine?</span></div>
            <div className="w-full flex items-center justify-start ">
              <Link to="https://google.com" className="bg-[#00ff26] text-[#1D1D1B] text-sm md:text-base flex gap-1 px-6 py-4 cursor-pointer rounded-xl font-semibold ">
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
  );
}
