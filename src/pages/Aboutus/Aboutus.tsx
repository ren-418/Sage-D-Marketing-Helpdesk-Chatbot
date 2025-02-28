import { Link } from 'react-router-dom'

import image1 from '../../assets/images/about-us.png'
import image2 from '../../assets/images/IMG_5069.png'
import image3 from '../../assets/images/approach.png'

import Upwork from '../../assets/images/upwork-dark.png'
import Loom from '../../assets/images/loom-dark.png'
import Slack from '../../assets/images/slack.png'
import Sportify from '../../assets/images/spotify-dark.png'
import Square from '../../assets/images/square-dark.png'
import Stripe from '../../assets/images/stripe-brand.png'
import Tinder from '../../assets/images/tinder-dark.png'
import Trello from '../../assets/images/trello.png'
import Zoom from '../../assets/images/zoom-dark.png'

import attachement from '../../assets/images/IMG_5044.png'
import arrowIcon from '../../assets/icons/arrow-right-top.svg'
import bg2 from '../../assets/images/bg2.png'

const AboutUs = () => {

    const images = [image1, image2, image3]

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
                <div className="text-black pl-6 relative flex flex-col md:gap-10 gap-5 items-center text-xl md:mt-24 mt-16">
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-[#00ff26] mr-2"></span>
                    About Sage-D Marketing
                </div>
                <div className="flex flex-col gap-5 md:flex-row text-center md:text-left items-center justify-between">
                    <div className="text-black md:text-6xl text-4xl font-medium w-full">
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
    )
}

export default AboutUs
