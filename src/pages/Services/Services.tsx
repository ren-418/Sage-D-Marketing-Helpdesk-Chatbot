import { Link } from 'react-router-dom'
import service1 from '../../assets/images/service-image-1.png'
import service2 from '../../assets/images/service-image-2.png'
import service3 from '../../assets/images/service-image-3.png'
import service4 from '../../assets/images/service-image-4.png'
import service5 from '../../assets/images/service-image-5.png'

import arrowIcon from '../../assets/icons/arrow-right-top.svg'
import bg2 from '../../assets/images/bg2.png'
import attachement from '../../assets/images/IMG_5044.png'

const Services = () => {

    const serviceItems = [
        {
            imagePosition: "left",
            title: "Comprehensive Marketing Solutions",
            description: "Sage-D Marketing Group specializes in end-to-end marketing solutions that elevate your brand in a competitive landscape. Our innovative campaigns are tailored to captivate and convert your target audience, ensuring your message resonates effectively.",
            image: service1,
        },
        {
            imagePosition: "right",
            title: "Digital Presence Optimization",
            description: "Enhance your online visibility with our expert social media and LinkedIn management services. We create engaging content and execute targeted campaigns that foster growth, drive business success, and strengthen your brand’s online presence.",
            image: service2,
        },
        {
            imagePosition: "left",
            title: "Targeted Advertising & Analytics",
            description: "Maximize your reach with our data-driven advertising strategies. We develop and manage targeted campaigns across multiple platforms, providing deep insights and analytics to optimize performance and drive conversions effectively.",
            image: service3,
        },
        {
            imagePosition: "right",
            title: "Creative Media Production",
            description: "Bring your brand story to life with our professional videography and photography services. From promotional videos and corporate films to high-quality imagery, we deliver impactful visual content that enhances your brand identity and engages your audience.",
            image: service4,
        },
        {
            imagePosition: "left",
            title: "Innovative Brand Design",
            description: "Our graphic design team crafts eye-catching branding materials tailored to your unique needs. From logos and brochures to CGI and packaging designs, we ensure your visual identity stands out and communicates your brand’s essence effectively.",
            image: service5,
        },
    ];
    return (
        <>
            <section className="flex flex-col gap-5 md:gap-10 lg:px-32 px-5 md:px-10 w-full bg-cover bg-center mt-48">
                <h1 className="relative z-10 text-black 2xl:text-start text-center md:text-6xl text-4xl font-medium">Our Services</h1>
                <div className="w-full md:mt-24 mt-16"></div>
            </section>
            <section className="flex flex-col items-center md:gap-32 gap-16 justify-center lg:px-32 px-5 md:px-10 w-full">
                {serviceItems.map((item, index) => (
                    <>
                        <div key={index} className="flex flex-col 2xl:flex-row items-center justify-center gap-16">
                            {item.imagePosition === 'left' ? (
                                <>
                                    <img src={item.image} alt={item.title} className="w-full max-w-[800px] rounded-xl" />
                                    <div className="flex flex-col items-center justify-center gap-5">

                                        <h1 className="relative z-10 text-black 2xl:text-start text-center md:text-6xl text-4xl font-medium">{item.title}</h1>
                                        <div className='text-black text-lg w-full 2xl:text-start text-center'>
                                            {item.description}
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="flex flex-col items-center justify-center gap-5">
                                        <h1 className="relative z-10 text-black 2xl:text-start text-center md:text-6xl text-4xl font-medium">{item.title}</h1>
                                        <div className='text-black text-lg w-full 2xl:text-start text-center'>
                                            {item.description}
                                        </div>
                                    </div>
                                    <img src={item.image} alt={item.title} className="w-full max-w-[800px] rounded-xl" />
                                </>
                            )}
                        </div>
                        <div className="w-full border-b border-gray md:mt-24 mt-16"></div>
                    </>
                ))}
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

export default Services
