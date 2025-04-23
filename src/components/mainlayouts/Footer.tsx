import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.gif'

import facebookIcon from '../../assets/icons/facebook.svg'
import instagramIcon from '../../assets/icons/instagram.svg'
import linkedinIcon from '../../assets/icons/linkedin.svg'
import twitterIcon from '../../assets/icons/twitter.svg'

import arrowIcon from '../../assets/icons/arrow-right-top.svg'

export default function Footer() {

  const socialMedia = [
    {
      name: 'Facebook',
      icon: facebookIcon,
      link: 'https://www.facebook.com'
    },
    {
      name: 'Instagram',
      icon: instagramIcon,
      link: 'https://www.instagram.com'
    },
    {
      name: 'Linkedin',
      icon: linkedinIcon,
      link: 'https://www.linkedin.com'
    },
    {
      name: 'Twitter',
      icon: twitterIcon,
      link: 'https://www.twitter.com'
    }

  ]

  const menuItems = [
    {
      name: "About us",
      key: "/layouts/about-us",
      link: "/layouts/about-us",

      submenu: null
    },
    {
      name: "Our approach",
      key: "/layouts/our-approach",
      link: "/layouts/our-approach",

      submenu: null,
    },
    {
      name: "Services",
      key: "/layouts/services",
      link: "/layouts/services",

      submenu: null,
    },
    {
      name: 'Our work',
      key: "/layouts/our-work",
      link: "/layouts/our-work",

      submenu: null
    },
    {
      name: 'Get in touch',
      key: "/layouts/get-in-touch",
      link: "/layouts/get-in-touch",
      submenu: null
    }
  ];

  return (
    <footer
      className='lg:px-32 px-1 bg-black flex md:flex-row flex-col gap-10 justify-between py-10'
    >
      <div className='flex flex-col gap-4'>
        <Link to="/" className="flex items-center gap-0 ">
          <img
            src={Logo}
            width={100}
            alt="logo"
          />
          <div className="text-white text-xl font-medium ">Sage-D <br/><span className="text-[#00ff26]">Marketing</span> </div>
        </Link>
        <div className="flex gap-4">
          {socialMedia.map((item, index) => (
            <Link key={index} to={item.link} className="cursor-pointer">
              <img src={item.icon} alt="icon" width={30} className="transition-opacity duration-300" style={{ filter: 'brightness(0) invert(1)' }} />
            </Link>
          ))}
        </div>
      </div>
      <div className='flex flex-col gap-4'>
        {menuItems.map((item, index) => (
          <Link
            key={index}
            to={item.link}
            className="w-full text-lg cursor-pointer relative hover:text-[#00ff26] text-white"
          >
            {item.name}
          </Link>
        ))}
      </div>
      <div className='flex flex-col gap-10'>
        <div className='flex flex-col gap-4'>
          <Link

            to='/layouts/privacy-policy'
            className="w-full  text-lg cursor-pointer relative hover:text-[#00ff26] text-white"
          >
            Privacy Policy
          </Link>
          <Link
            to="/layouts/terms-of-service"
            className="w-full  text-lg cursor-pointer relative hover:text-[#00ff26] text-white"
          >
            Terms of Service
          </Link>
        </div>
        <div className='text-white'>© 2025 SAGE-D Marketing. All rights reserved.</div>
      </div>
      <div className='flex flex-col gap-7'>
        <Link to="/layouts/get-in-touch" className="bg-[#00ff26] text-[#1D1D1B] hover:text-[#1D1D1B] flex gap-1 px-6 py-4 cursor-pointer rounded-xl font-semibold w-[45%] md:w-full ">
          <p>Get In Touch</p>
          <img src={arrowIcon} alt="icon" width={20} className="" />
        </Link>
        <Link to="https://calendly.com/mrsteevtvw418/new-meeting" target="_blank" className="bg-[#00ff26] hover:text-[#1D1D1B] text-[#1D1D1B] flex gap-1 px-6 py-4 cursor-pointer rounded-xl font-semibold w-[45%] md:w-full target">
          <p>Book a call</p>
          <img src={arrowIcon} alt="icon" width={20} className="" />
        </Link>
      </div>
    </footer>
  );
}
