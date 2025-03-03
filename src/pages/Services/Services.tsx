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
            title: "Business Process Automation & E-Commerce Solutions",
            description: "Automate repetitive tasks and workflows to minimize human error and save time. This includes streamlining inventory, sales, and customer management to enhance efficiency and increase revenue.",
            image: service1,
        },
        {
            imagePosition: "right",
            title: "AI-Driven Customer Support & Engagement",
            description: "Implement AI-powered chatbots for customer support, reducing response times and improving service quality. Additionally, automate email marketing campaigns to ensure timely communication and boost customer relationships.",
            image: service2,
        },
        {
            imagePosition: "left",
            title: "Cloud Solutions & Cybersecurity",
            description: "Securely migrate business operations to the cloud to enhance data security and accessibility. Protect sensitive information from cyber threats through advanced cybersecurity measures, ensuring compliance with regulations.",
            image: service3,
        },
        {
            imagePosition: "right",
            title: "Data Analytics & Document Processing",
            description: "Leverage AI for data-driven decision-making to improve forecasting and identify trends. Automate document categorization and data extraction to accelerate workflows and enhance accuracy in processing.",
            image: service4,
        },
        {
            imagePosition: "left",
            title: "Remote Collaboration & Scheduling Tools",
            description: "Implement automation tools for remote teams to enhance communication and streamline project management. Additionally, automate appointment scheduling to optimize client interactions and reduce no-shows.",
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
