import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from '../../assets/images/logo.gif'
import arrowIcon from '../../assets/icons/arrow-right-top.svg'
import rightArrowIcon from '../../assets/icons/right-arrow.svg'
import aboutUs from '../../assets/images/about-us.png'
import ourApproach from '../../assets/images/approach.png'
import services from '../../assets/images/service.png'
import ourWork from '../../assets/images/work.png'
import getInTouch from '../../assets/images/contact.png'
import closeIconWhite from '../../assets/icons/delete-sign.png'
import closeIcon from '../../assets/icons/close.svg'
import hamburgerIcon from '../../assets/icons/hamburger.svg'
import facebookIcon from '../../assets/icons/facebook.svg'
import instagramIcon from '../../assets/icons/instagram.svg'
import linkedinIcon from '../../assets/icons/linkedin.svg'
import twitterIcon from '../../assets/icons/twitter.svg'

export default function Header() {
  const location = useLocation();


  const [scrolling, setScrolling] = useState<boolean>(false);
  const [isHamburgerOpen, setIsHamburgerOpen] = useState<boolean>(false);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [HoveredItem, setHoveredItem] = useState("About us");
  const [isHome, setIsHome] = useState(false);

  const currentPath = window.location.pathname;



  const toggleHamburger = () => {
    setIsHamburgerOpen(!isHamburgerOpen);
    setMobileSubmenu(null);
  };
  const openMobileSubmenu = (submenu: string) => {
    setMobileSubmenu(submenu);
  };


  useEffect(() => {

    if (mobileSubmenu) {
      setMobileSubmenu(mobileSubmenu)
    }
    if (currentPath == "/layouts/home") {
      setIsHome(true);
    } else {
      setIsHome(false);
    }

    const handleScroll = () => {
      if (window.scrollY > 90) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, [location]);

  const menuItems = [
    {
      name: "About us",
      key: "/layouts/about-us",
      link: "/layouts/about-us",
      img: aboutUs,
      submenu: null
    },
    {
      name: "Our approach",
      key: "/layouts/our-approach",
      link: "/layouts/our-approach",
      img: ourApproach,
      submenu: null,
    },
    {
      name:"Freelance Editing & Post Production",
      key: "/layouts/freelance-editing",
      link: "/layouts/freelance-editing",
      img: services,
      submenu: null,
    },
    {
      name: "Services",
      key: "/layouts/services",
      link: "/layouts/services",
      img: services,
      submenu: null,
    },
    {
      name: 'Our work',
      key: "/layouts/our-work",
      link: "/layouts/our-work",
      img: ourWork,
      submenu: null
    },
    {
      name: 'Get in touch',
      key: "/layouts/get-in-touch",
      link: "/layouts/get-in-touch",
      img: getInTouch,
      submenu: null
    }
  ];

  const socialMedia = [
    {
      name: 'Facebook',
      icon: facebookIcon,
      link: 'https://www.facebook.com'
    },
    {
      name: 'Instagram',
      icon: instagramIcon,
      link: 'https://www.instagram.com/saged_media?igsh=MTVreWVxMGliMGFwbw%3D%3D&utm_source=qr'
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

  return (
    <div>
      <header
        className={`transition-all duration-300 ease-in-out z-[30] fixed top-0 w-full border-[#FFFFFF1A] border-b ${scrolling && !isHamburgerOpen
          ? " fixed top-0 w-full"
          : ""
          } ${isHamburgerOpen
            ? "w-full h-[100%] bg-black flex flex-col gap-[5%] overflow-hidden fixed top-0 text-white"
            : ""
          }`}
      >
        <div
          className={`relative top-0 left-0 flex flex-row justify-between w-full items-center underline-bottom-white lg:px-32 px-1 py-[20px] lg:py-[21px]  ${scrolling || !isHome ? "py-[10px] bg-black rounded-b-3xl" : "bg-transparent"
            }`}
        >
          <div >
            <Link to="/" className="flex items-center ">
              <img
                src={Logo}
                width={100}
                alt="logo"
                className={`${!scrolling && "hidden"}`}
              />
              <img
                src={Logo}
                width={100}
                alt="logo"
                className={`${scrolling && "hidden"}`}
              />
              <div className="text-white text-xl font-medium">Sage-D <br/><span className="text-[#00ff26]">Marketing</span> </div>
            </Link>
          </div>
          <div className="lg:flex gap-2 hidden">
            <Link to="https://calendly.com/d/cqyy-j3g-6yg" className="bg-[#00ff26] text-[#1D1D1B] flex gap-1 px-6 py-4 cursor-pointer rounded-xl font-semibold " target="_blank">
              <p>Book a call</p>
              <img src={arrowIcon} alt="icon" width={20} className="font-semibold" />
            </Link>
            {!menuOpen ? (
              <div className="bg-[#282826] border-[#FFFFFF1A] border text-white font-semibold px-6 py-4 rounded-xl cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
                Menu &nbsp;:&nbsp;:
              </div>
            ) : (
              <div className="bg-[#282826] border-[#FFFFFF1A] border text-white font-semibold px-6 py-4 rounded-xl cursor-pointer flex items-center gap-2" onClick={() => setMenuOpen(!menuOpen)}>
                close
                <img src={closeIconWhite} alt="icon" width={20} />
              </div>
            )}
          </div>
          <div className="flex lg:hidden text-[#00ff26]">
            {isHamburgerOpen ? (
              <img src={closeIcon} alt="icon" width={36} className="cursor-pointer" onClick={() => setIsHamburgerOpen(!isHamburgerOpen)} />
            ) : (
              <img src={hamburgerIcon} alt="icon" width={36} className="cursor-pointer" onClick={() => setIsHamburgerOpen(!isHamburgerOpen)} />
            )}
          </div>
        </div>
        {isHamburgerOpen && (
          <div className="flex flex-col gap-[5%] w-full h-full">
            <ul
              className={`header-before-event flex flex-col gap-[5px] font-medium uppercase justify-center items-center responsive-header-font ${scrolling && !isHamburgerOpen ? "text-black" : "text-white"
                }`}
            >
              {menuItems.map((item) => (
                <li
                  key={item.key}
                  className={`cursor-pointer relative hover:text-[#00ff26]`}
                  onClick={() => {
                    if (item.submenu) {
                      openMobileSubmenu(item.key);
                      toggleHamburger();
                    } else {

                      toggleHamburger();
                    }
                  }}
                >
                  <Link
                    to={item.link}
                    onClick={(e) => {
                      if (item.submenu) e.preventDefault();
                    }}
                    className="w-full text-center text-lg"
                  >
                    {item.name}
                  </Link>
                  <span className="underline-effect" />
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-6 justify-center items-center">
              <Link to="https://calendly.com/d/cqyy-j3g-6yg" target="_blank" className="bg-[#00ff26] text-[#1D1D1B] flex gap-1 px-6 py-4 cursor-pointer rounded-xl font-semibold ">
                <p>Book a call</p>
                <img src={arrowIcon} alt="icon" width={20} className="" />
              </Link>
              <div className="flex gap-4">
                {socialMedia.map((item, index) => (
                  <Link key={index} to={item.link} className="cursor-pointer">
                    <img src={item.icon} alt="icon" width={50} className="transition-opacity duration-300" style={{ filter: 'brightness(0) invert(1)' }} />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </header>
      {!!menuOpen && !isHamburgerOpen && (
        <div className={`fixed top-[145px] w-full h-full bg-[#1D1D1B] transition-all duration-500 ease-in-out z-20 ${menuOpen
          ? 'right-0'
          : 'right-[-100%]'
          }`}>
          <div className="container mx-auto px-32 py-16">
            <div className="flex flex-col gap-10">
              {menuItems.map((item) => (
                <div className="flex justify-end w-full" key={item.key}>
                  <div className={`${HoveredItem === item.name ? "flex" : "hidden"} absolute left-0 top-[10px]`}>
                    <img src={item.img} alt="img" width={900} className="w-full max-w-[600px] xl:max-w-[800px] 2xl:max-w-[900px] h-auto" />
                  </div>
                  <div className="flex justify-start w-full pl-[500px] xl:pl-[700px] 2xl:pl-[750px]">
                    <Link
                      
                      to={item.link}
                      className="text-white lg:text-4xl 2xl:text-6xl font-medium hover:text-[#00ff26] transition-colors flex items-center gap-4 w-full justify-start"
                      onMouseEnter={() => {
                        setHoveredItem(item.name);
                      }}
                      onClick={() => {

                        setMenuOpen(false);
                      }}
                    >
                      {HoveredItem === item.name && <img src={rightArrowIcon} alt="icon" width={50} className="transition-opacity duration-300" style={{ filter: 'brightness(0) invert(1)' }} />}
                      {item.name}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
      }
    </div>

  );
}
