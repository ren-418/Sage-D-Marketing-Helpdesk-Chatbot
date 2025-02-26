"use client";
import { useState } from "react";
// import Header from "./components/Header";
import { Link } from "react-router-dom";
import arrowIcon from '../../assets/icons/arrow-right-top.svg'

import { toast } from "react-toastify";

import Upwork from '../../assets/images/upwork-dark.png'
import Loom from '../../assets/images/loom-dark.png'
import Slack from '../../assets/images/slack.png'
import Sportify from '../../assets/images/spotify-dark.png'
import Square from '../../assets/images/square-dark.png'
import Stripe from '../../assets/images/stripe-brand.png'
import Tinder from '../../assets/images/tinder-dark.png'
import Trello from '../../assets/images/trello.png'
import Zoom from '../../assets/images/zoom-dark.png'

export default function Home() {
  const [zipcode, setZipcode] = useState<string>("");

  function isValidZipCode(zipCode: string): boolean {
    const zipCodePattern = /^\d{5}(-\d{4})?$/;
    const caPattern = /^[A-Za-z]\d[A-Za-z] \d[A-Za-z]\d$/;
    const usPattern = /^\d{5}(-\d{4})?$/;

    return (
      usPattern.test(zipCode) ||
      caPattern.test(zipCode) ||
      zipCodePattern.test(zipCode)
    );
  }

  const goToAvailibility = (): void => {

    if (!isValidZipCode(zipcode)) {
      toast.warning("Please input correct information", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } else {
      console.log(zipcode);
      window.location.href = "/register";
    }
  };
  const handleKeyPress = (
    event: React.KeyboardEvent<HTMLInputElement>
  ): void => {
    if (event.key === "Enter") {
      goToAvailibility();
    }
  };

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

  return (
    <>
      <div className="h-screen">
        <section className="flex flex-col items-start md:gap-10 gap-5 justify-start lg:px-32 px-5 md:px-10 w-full h-full bg-[#1D1D1B]">
          <div className=" text-xl md:text-2xl mt-48 md:mt-56 font-medium px-3 py-2 rounded-xl text-[#00ff26] cursor-pointer bg-[#282826] border-[#FFFFFF1A] border">Your Brand Our Passion</div>
          <h1 className="text-white md:text-6xl text-4xl font-medium">We Are Shaping Concepts <br className="hidden md:block" />Into Digital Innovations</h1>
          <p className="text-white text-lg md:text-xl">We are a passionate collective of creatives, designers, and strategists dedicated to<br className="hidden md:block" /> shaping remarkable brand experiences.</p>
          <Link to="https://google.com" className="bg-[#00ff26] text-[#1D1D1B] text-sm md:text-base flex gap-1 px-6 py-4 cursor-pointer rounded-xl font-semibold ">
            <p>Book a call</p>
            <img src={arrowIcon} alt="icon" width={20} className="font-semibold" />
          </Link>
        </section>
        <section className="flex flex-col items-center  gap-5 md:gap-10 lg:px-32 px-5 md:px-10 w-full">
          <div className="text-black  md:mt-24 mt-16 flex flex-col md:gap-10 gap-5 items-center">
            <div className="relative pl-6">
              <span className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-[#00ff26] mr-2"></span>
              About Sage-D Marketing
            </div>
            <div className="text-black  text-center md:text-6xl text-4xl font-medium">
              We are Creative Digital Agency
            </div>
            <Link to="/layouts/about-us" className="flex gap-1 px-6 py-4 cursor-pointer rounded-xl">
              <p>More aboout us</p>
              <img src={arrowIcon} alt="icon" width={20} className="font-semibold" />
            </Link>
          </div>
          <div className="w-full flex items-center justify-center ">
            <video controls className="w-full max-w-8xl rounded-2xl">
              <source src="your-video-file.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </section>
        <section className="flex flex-col items-center gap-5 md:gap-10 lg:px-32 px-5 md:px-10 w-full">
          <div className="text-black md:mt-24 mt-16 flex flex-col md:gap-10 gap-5 items-center">
            <div className="relative pl-6">
              <span className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-[#00ff26] mr-2"></span>
              Our Clients
            </div>
            <div className="text-black  text-center md:text-6xl text-4xl font-medium">
              Companies who trust us
            </div>
          </div>
          <div className="w-full grid md:grid-cols-3 grid-cols-1 items-center justify-center">
            {companyItems.map((item, index) => (
              <div className="px-24 py-10">
                <img src={item.image} alt={item.name} key={index} className="w-full md:max-w-[150px] max-w-[130px]" />
              </div>
            ))}
          </div>
          <div className="w-full border-b border-gray md:mt-24 md-16">
          </div>
        </section>
        <section className="flex flex-col items-center gap-5 md:gap-10 lg:px-32 px-5 md:px-10 w-full">
          <div className="text-black  text-center md:text-6xl text-4xl font-medium md:mt-24 mt-16">
            Featured work
          </div>
          <div>

          </div>
          <Link to="/layouts/about-us" className="flex gap-1 px-6 py-4 cursor-pointer rounded-xl">
            <p>View all work</p>
            <img src={arrowIcon} alt="icon" width={20} className="font-semibold" />
          </Link>
        </section>
      </div>
    </>
  );
}
