"use client";
import { Link } from "react-router-dom"


import ApproachVideo from '../../assets/video/Marketing video 2.mp4'

import arrowIcon from '../../assets/icons/arrow-right-top.svg'
import brand1 from '../../assets/images/brands/1.png'
import brand2 from '../../assets/images/brands/2.png'
import brand3 from '../../assets/images/brands/3.png'
import brand4 from '../../assets/images/brands/4.png'
import brand5 from '../../assets/images/brands/5.png'
import brand6 from '../../assets/images/brands/6.png'
import brand7 from '../../assets/images/brands/7.png'
import brand8 from '../../assets/images/brands/8.png'
import brand9 from '../../assets/images/brands/9.png'
import brand10 from '../../assets/images/brands/10.png'
import brand11 from '../../assets/images/brands/11.png'
import brand12 from '../../assets/images/brands/12.png'
import brand13 from '../../assets/images/brands/13.png'
import brand14 from '../../assets/images/brands/14.png'
import brand16 from '../../assets/images/brands/15.png'
import brand17 from '../../assets/images/brands/16.png'
import brand18 from '../../assets/images/brands/17.png'
import brand19 from '../../assets/images/brands/18.png'
import brand20 from '../../assets/images/brands/19.png'
import brand21 from '../../assets/images/brands/20.png'

import bg from '../../assets/images/bg.png'
import bg2 from '../../assets/images/bg2.png'

import portfolio1 from '../../assets/images/portfolio-01.png'
import portfolio2 from '../../assets/images/portfolio-02.png'
import portfolio3 from '../../assets/images/portfolio-03.png'
import portfolio4 from '../../assets/images/portfolio-04.png'


import attachement from '../../assets/images/IMG_5044.png'



// const initialPositions = [
//   { x: 50, y: 50 }, // Position for Image 1
//   { x: 90, y: 70 }, // Position for Image 2
//   { x: 50, y: 80 }, // Position for Image 3
//   { x: 10, y: 70 }, // Position for Image 4
// ];

export default function Home({ }) {

  // const [positions, setPositions] = useState(initialPositions);
  // const [sizes, setSizes] = useState<number[]>([100, 100, 100, 100]);
  // const isScrollingRef = useRef<boolean>(false);
  

  // // Function to calculate sizes based on the window width
  // const calculateSizes = (positions: { x: number; y: number }[]) => {
  //   const centerBottomIndex = positions.findIndex((pos) => pos.x === 50 && pos.y === 80);
  //   const centerUpIndex = positions.findIndex((pos) => pos.x === 50 && pos.y === 50);

  //   // Use window width to determine the image sizes
  //   const width = window.innerWidth;
  //   let sizes: number[] = [];

  //   if (width >= 1440) {
  //     // Desktop view
  //     sizes = positions.map((_, index) => {
  //       if (index === centerBottomIndex) return 300; // Center-Bottom should be 300px
  //       if (index === centerUpIndex) return 0; // Center-Up should be 50px
  //       return 120; // All others should be 100px
  //     });
  //   }
  //   else if (width >= 768) {
  //     // Tablet view
  //     sizes = positions.map((_, index) => {
  //       if (index === centerBottomIndex) return 200;
  //       if (index === centerUpIndex) return 0;
  //       return 100;
  //     });
  //   } else {
  //     // Mobile view
  //     sizes = positions.map((_, index) => {
  //       if (index === centerBottomIndex) return 150;
  //       if (index === centerUpIndex) return 0;
  //       return 80;
  //     });
  //   }

  //   return sizes;
  // };

  // // Update the sizes when the window is resized
  // useEffect(() => {
  //   setSizes(calculateSizes(positions)); // Initial size calculation
  //   const handleResize = () => {
  //     setSizes(calculateSizes(positions)); // Update sizes on resize
  //   };

  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, [positions]);

  // // Handle scroll event
  // useEffect(() => {
  //   const handleScroll = (event: WheelEvent) => {
  //     if (isScrollingRef.current) return;
  //     isScrollingRef.current = true;

  //     setTimeout(() => (isScrollingRef.current = false), 500);

  //     setPositions((prevPositions) => {
  //       return event.deltaY < 0
  //         ? [prevPositions[3], ...prevPositions.slice(0, 3)]
  //         : [...prevPositions.slice(1), prevPositions[0]];
  //     });
  //   };

  //   window.addEventListener("wheel", handleScroll, { passive: true });
  //   return () => window.removeEventListener("wheel", handleScroll);
  // }, []);

  const companyItems = [
    { image: brand1 },
    { image: brand2 },
    { image: brand3 },
    { image: brand4 },
    { image: brand5 },
    { image: brand6 },
    { image: brand7 },
    { image: brand8 },
    { image: brand9 },
    { image: brand10 },
    { image: brand11 },
    { image: brand12 },
    { image: brand13 },
    { image: brand14 },
    { image: brand16 },
    { image: brand17 },
    { image: brand18 },
    { image: brand19 },
    { image: brand20 },
    { image: brand21 },

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




  return (
    <>
      <section className="relative flex flex-col items-start gap-8  h-screen bg-cover bg-center lg:px-32 px-5 md:px-10" style={{ backgroundImage: `url(${bg})` }}>
        <div className="text-xl md:text-2xl mt-48 lg:mt-56 font-medium px-3 py-2 rounded-xl text-[#00ff26] cursor-pointer bg-[#282826] border-[#FFFFFF1A] border">Your Brand Our Passion</div>
        <h1 className="text-white md:text-6xl text-4xl font-medium ">We Are Shaping Concepts <br className="hidden md:block" />Into Digital Innovations</h1>
        <p className="text-white text-lg md:text-xl ">We are a passionate collective of creatives, designers, and strategists dedicated to<br className="hidden md:block" /> shaping remarkable brand experiences.</p>
        <div>
          <Link to="https://calendly.com/d/cqyy-j3g-6yg" className="bg-[#00ff26] text-[#1D1D1B] flex gap-1 px-6 py-4 cursor-pointer rounded-xl font-semibold " target="_blank">
            <p>Book a call</p>
            <img src={arrowIcon} alt="icon" width={20} className="font-semibold" />
          </Link>
        </div>
        {/* <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-full h-full">
            {items.map((item, index) => {
              const { x, y } = positions[index];
              const size = sizes[index];
              return (size > 120 ? (
                <div
                  onClick={() => gotoService()}
                  key={index}
                  className="absolute flex items-center justify-center transition-all duration-500 ease-in-out cursor-pointer"
                  style={{
                    width: `${size}px`,
                    height: `${size}px`,
                    left: `${x}%`,
                    top: `${y}%`,
                    transform: `translate(-50%, -50%)`,
                    zIndex: 1,
                  }}
                >
                  <img src={item.image} alt={item.title} className="w-full h-full rounded-full" />
                  <div className="absolute text-[#00FFFF] text-center text-sm md:text-xl font-medium">{item.title}</div>
                </div>
              ) : (
                <div
                  key={index}
                  onClick={() => gotoService()}
                  className="absolute flex items-center justify-center transition-all duration-500 ease-in-out cursor-pointer"
                  style={{
                    width: `${size}px`,
                    height: `${size}px`,
                    left: `${x}%`,
                    top: `${y}%`,
                    transform: `translate(-50%, -50%)`,
                    zIndex: 1,
                  }}
                >
                  <img src={item.image} alt={item.title} className="w-full h-full rounded-full" />
                </div>
              )

              );
            })}
          </div>
        </div> */}
      </section>
      <section className="flex flex-col items-center gap-5 md:gap-10 lg:px-32 px-5 md:px-10 w-full">
        <div className="text-black  md:mt-24 mt-16 flex flex-col md:gap-10 gap-5 items-center">
          <div className="relative pl-5 md:text-xl text-sm">
            <span className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-[#00ff26] mr-2 "></span>
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
            <source src={ApproachVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="w-full border-b border-gray md:mt-24 mt-16">
        </div>
      </section>
      <section className="flex flex-col items-center gap-5 md:gap-10 lg:px-32 px-5 md:px-10 w-full">
        <div className="text-black md:mt-24 mt-16 flex flex-col md:gap-10 gap-5 items-center">
          <div className="relative pl-5 md:text-xl text-sm">
            <span className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-[#00ff26] mr-2"></span>
            Our Clients
          </div>
          <div className="text-black  text-center md:text-6xl text-4xl font-medium">
            Brands Who Trust Us
          </div>
        </div>
        <div className="w-full grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 items-center justify-center">
          {companyItems.map((item, index) => (
            <div className="px-24 py-10" key={index}>
              <img src={item.image} alt="brand" className="w-full md:max-w-[150px] max-w-[130px]" />
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
            <div className=" flex flex-col items-center gap-5" key={index}>
              <img src={item.image} alt={item.title} className="w-full max-w-[900px] rounded-2xl" />
              <div className="text-black text-center md:text-3xl text-xl font-medium">
                {item.title}
              </div>
            </div>
          ))}
        </div>
        <Link to="/layouts/our-work" className="flex gap-1 px-6 py-4 cursor-pointer rounded-xl md:text-xl text-base">
          <p>View all work</p>
          <img src={arrowIcon} alt="icon" width={20} className="font-semibold" />
        </Link>
        <div className="w-full border-b border-gray md:mt-24 mt-16">
        </div>
      </section>
      {/* <section className="flex flex-col items-center gap-5 md:gap-10 lg:px-32 px-5 md:px-10 w-full">
        <div className="text-black md:mt-24 mt-16 flex flex-col md:gap-10 gap-5 items-center">
          <div className="relative pl-5 md:text-xl text-sm">
            <span className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-[#00ff26] mr-2"></span>
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
      </section> */}
      <section className="flex flex-col items-center gap-5 md:gap-10 lg:px-32 px-5 md:px-10 w-full">
        <div className="text-black md:mt-24 mt-16 flex flex-col md:gap-10 gap-5 items-center">
          <div className="relative pl-5 md:text-xl text-sm">
            <span className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-[#00ff26] mr-2"></span>
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
        <Link to="/layouts/our-approach" className="flex gap-1 px-6 py-4 cursor-pointer rounded-xl md:text-xl text-base">
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
              <Link to="https://calendly.com/d/cqyy-j3g-6yg" target="_blank" className="bg-[#00ff26] text-[#1D1D1B] text-sm md:text-base flex gap-1 px-6 py-4 cursor-pointer rounded-xl font-semibold ">
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
