
import { Link } from 'react-router-dom'

import portfolio1 from '../../assets/images/portfolio-01.png'
import portfolio2 from '../../assets/images/portfolio-02.png'
import portfolio3 from '../../assets/images/portfolio-03.png'
import portfolio4 from '../../assets/images/portfolio-04.png'

import arrowIcon from '../../assets/icons/arrow-right-top.svg'
import bg2 from '../../assets/images/bg2.png'
import attachement from '../../assets/images/IMG_5044.png'

const OurWork = () => {

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
            <section className="flex flex-col gap-5 md:gap-10 lg:px-32 px-5 md:px-10 w-full bg-cover bg-center mt-48">
                <h1 className="relative z-10 text-black 2xl:text-start text-center md:text-6xl text-4xl font-medium">Our Talent Exhibit
                </h1>
                <div className="w-full md:mt-24 mt-16"></div>
            </section>
            <section className="flex flex-col items-center gap-5 md:gap-10 lg:px-32 px-5 md:px-10 w-full">
                <div className="w-full grid xl:grid-cols-2 grid-cols-1 gap-y-5 gap-x-5">
                    {portfolioItems.map((item, index) => (
                        <div className=" flex flex-col items-center gap-5" key={index}>
                            <img src={item.image} alt={item.title}  className="w-full max-w-[900px] rounded-2xl" />
                            <div className="text-black text-center md:text-3xl text-xl font-medium">
                                {item.title}
                            </div>
                        </div>
                    ))}
                </div>
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
    )
}

export default OurWork

