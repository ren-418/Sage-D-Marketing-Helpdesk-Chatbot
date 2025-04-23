import { Link } from 'react-router-dom'

import image1 from '../../assets/images/about-us.png'
import image2 from '../../assets/images/IMG_5069.png'
import image3 from '../../assets/images/approach.png'

import Logo from '../../assets/images/logo.gif'
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

import attachement from '../../assets/images/IMG_5044.png'
import arrowIcon from '../../assets/icons/arrow-right-top.svg'
import bg2 from '../../assets/images/bg2.png'

const AboutUs = () => {

    const images = [image1, image2, image3]

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
    return (
        <>
            <section className="flex flex-col items-start md:mt-36 mt-40 w-full lg:px-32 px-5 md:px-10 overflow-hidden">
                <div className="flex transition-transform duration-300 ease-in-out">
                    {images.map((image, index) => (
                        <div key={index} className="flex-shrink-0 w-full md:w-[600px]">
                            <img
                                src={image}
                                alt="about-us"
                                className="w-full rounded-b-2xl"
                            />
                        </div>
                    ))}
                </div>
            </section>
            <section className="flex flex-col items-center gap-5 md:gap-10 lg:px-32 px-5 md:px-10 w-full">
                <div className="text-black flex items-center text-xl md:mt-24 mt-16">
                    <img
                        src={Logo}
                        width={45}
                        alt="logo"
                    />
                    About Sage-D Marketing
                </div>
                <div className="flex flex-col gap-5 md:flex-row text-center md:text-left items-center justify-between">
                    <div className="text-black md:text-6xl text-4xl font-medium w-full  title">
                        Building Purpose-Driven Brands with Impactful Marketing
                    </div>
                    <div className='text-black text-lg w-full'>
                        At Sage-D Marketing Group, we are committed to crafting brands that resonate through bold content and exceptional marketing strategies. We foster a culture of creativity and diverse thinking, believing that our innovative approaches can make a meaningful difference for businesses and communities alike. Our clients are visionaries who seek to challenge the status quo, push boundaries, and redefine excellence. Embracing challenges as opportunities, we strive to deliver transformative solutions that elevate brands and inspire audiences.
                    </div>
                </div>
                <div className='w-full border-b border-gray md:mt-24 mt-16'>
                </div>
            </section>
            <section className="flex flex-col items-center gap-5 md:gap-10 lg:px-32 px-5 md:px-10 w-full">
                <div className="text-black md:mt-24 mt-16 flex flex-col md:gap-10 gap-5 items-center">
                    <div className="relative flex items-center md:text-xl text-sm">
                        <img
                            src={Logo}
                            width={45}
                            alt="logo"
                        />
                        Our Clients
                    </div>
                    <div className="text-black  text-center md:text-6xl text-4xl font-medium title">
                        Brands Who Trust Us
                    </div>
                </div>
                <div className="w-full grid grid-cols-3 lg:grid-cols-8 justify-items-center justify-center">
                    {companyItems.map((item, index) => (
                        <div className="w-[100px] 2xl:w-[150px] aspect-[4/3]" key={index}>
                            <img src={item.image} alt="brand" className="w-full h-full" />
                        </div>
                    ))}
                </div>
                <div className="w-full border-b border-gray md:mt-24 mt-16">
                </div>
            </section>
            <section className="flex flex-col items-center gap-5 md:gap-10 lg:px-32 px-5 md:px-10 w-full bg-cover bg-center md:h-[90%] h-[40%] ">
                <div className="w-full h-full bg-cover bg-center rounded-2xl flex gap-5 items-center justify-between md:px-20 lg:px-32 2xl:px-48 px-5 py-10 md:py-20" style={{ backgroundImage: `url(${bg2})` }}>
                    <div className="flex flex-col gap-10 items-start">
                        <div className="text-white md:text-6xl text-4xl font-medium  title">Let's Get You <span className="text-[#00ff26]">Started!</span></div>
                        <div className="w-full flex items-center justify-start ">
                            <Link to="https://calendly.com/mrsteevtvw418/new-meeting" target="_blank" className="bg-[#00ff26] text-[#1D1D1B] hover:text-[#1D1D1B] text-sm md:text-base flex gap-1 px-6 py-4 cursor-pointer rounded-xl font-semibold ">
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

export default AboutUs
