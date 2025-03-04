import { Link } from 'react-router-dom';

import approach from '../../assets/images/approach.png'
import bg2 from '../../assets/images/bg2.png'
import approach1 from '../../assets/images/approach-1.png'
import approach2 from '../../assets/images/approach-2.png'
import approach3 from '../../assets/images/approath-3.png'
import socialStrategy from '../../assets/images/Social_Media_Strategy.webp';
import contentCreation from '../../assets/images/high-quality-content.png'
import growth from '../../assets/images/growth.svg'
import perspective from '../../assets/images/perspective.svg'
import attachement from '../../assets/images/IMG_5044.png'
import arrowIcon from '../../assets/icons/arrow-right-top.svg'
import Fap from '../../components/fap';

const OurApproach = () => {

    const approachItems = [
        {
            image: approach1,
            imagePosition: 'left',
            title: "Envision Your Success",
            subTitle: 'Where Imagination Meets Strategy',
            description: "We collaborate closely with you to understand your brand's unique vision and objectives. Our team crafts personalized strategies that resonate with your target audience, ensuring your brand's story is told effectively."
        },
        {
            image: approach2,
            imagePosition: 'right',
            title: "Ignite the Magic",
            subTitle: 'Where Creativity Comes to Life',
            description: "Through our diverse range of services, including digital marketing, social media management, and creative media production, we bring your ideas to life. Our campaigns are designed to engage and convert, maximizing your brand's reach and impact."
        },
        {
            image: approach3,
            imagePosition: 'left',
            title: "Deliver Impactful Results",
            subTitle: 'The Path to Success',
            description: "We focus on delivering measurable outcomes. From targeted advertising campaigns to high-quality visual content, our expert team ensures that every aspect of your marketing strategy is optimized for success. With deep insights and analytics, we guide your brand to new heights."
        }

    ]

    const valuableWhenItems = [
        {
            icon: socialStrategy,
            text: "Your social media presence isn’t generating the engagement it used to, or you might not have a strategy at all."
        },
        {
            icon: contentCreation,
            text: "Your content quality is inconsistent and lacks impact. The creativity isn’t capturing attention, leaving your audience uninspired."
        },
        {
            icon: growth,
            text: "Your marketing efforts aren’t keeping pace with the evolving market, preventing you from reaching your growth potential."
        },
        {
            icon: perspective,
            text: "You require fresh perspectives and insights into effective strategies that are driving success for brands in 2025."
        }
    ]
    
    const faqItems = [
        {
            title: "What services does Sage-D Marketing Group offer?",
            description: "Sage-D Marketing Group provides digital marketing, social media management, corporate profiling, creative media production (videography, photography, CGI), and paid advertising."
        },
        {
            title: "How does Sage-D Marketing Group personalize marketing campaigns?",
            description: "Sage-D Marketing Group tailors campaigns through market research and client consultations to align with each brand and target audience."
        },
        {
            title: "How does Sage-D Marketing Group measure campaign success?",
            description: "Sage-D Marketing Group uses analytics tools to track KPIs like engagement rates and ROI, providing regular reports to optimize strategies."
        },
        {
            title: "Does Sage-D Marketing Group work with both small businesses and large corporations?",
            description: "Yes, Sage-D Marketing Group caters to businesses of all sizes, offering scalable solutions to meet specific needs."
        },
        {
            title: "How can I get started with Sage-D Marketing Group?",
            description: "Contact Sage-D Marketing Group via the website or phone to schedule a consultation and discuss marketing needs."
        }
        

    ]

    return (
        <>
            <section className="relative flex flex-col items-center md:gap-10 gap-5 justify-center lg:px-32 px-5 md:px-10  py-36 w-full bg-cover bg-center mt-32" style={{ backgroundImage: `url(${approach})` }}>
                <div className="relative pl-5 md:text-xl text-sm text-white z-10">
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-[#00ff26] mr-2 "></span>
                    How We Do That
                </div>
                <h1 className="relative z-10 text-white md:text-6xl text-4xl font-medium">Our Approach</h1>
                <div className="absolute inset-0 bg-black opacity-50"></div>
            </section>
            <section className="flex flex-col items-center md:gap-32 gap-16 justify-center lg:px-32 px-5 md:px-10 py-36 w-full">
                {approachItems.map((item, index) => (
                    <>
                        <div key={index} className="flex flex-col 2xl:flex-row items-center justify-center gap-16">
                            {item.imagePosition === 'left' ? (
                                <>
                                    <img src={item.image} alt={item.title} className="w-full max-w-[800px] rounded-xl" />
                                    <div className="flex flex-col items-center justify-center gap-5">
                                        <div className="relative pl-5 md:text-xl text-sm text-black z-10">
                                            <span className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-[#00ff26] mr-2 "></span>
                                            {item.title}
                                        </div>
                                        <h1 className="relative z-10 text-black 2xl:text-start text-center md:text-6xl text-4xl font-medium">{item.subTitle}</h1>
                                        <div className='text-black text-lg w-full 2xl:text-start text-center'>
                                            {item.description}
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="flex flex-col items-center justify-center gap-5" key={index}>
                                        <div className="relative pl-5 md:text-xl text-sm text-black z-10">
                                            <span className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-[#00ff26] mr-2 "></span>
                                            {item.title}
                                        </div>
                                        <h1 className="relative z-10 text-black 2xl:text-start text-center md:text-6xl text-4xl font-medium">{item.subTitle}</h1>
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
            <section className="flex flex-col items-center md:gap-32 gap-16 justify-center lg:px-32 px-5 md:px-10  w-full bg-cover bg-center">
                <h1 className="relative z-10 text-black 2xl:text-start text-center md:text-6xl text-4xl font-medium">You’ll find us valuable when...</h1>
                <div className="flex flex-col lg:flex-row justify-center gap-5">
                    {valuableWhenItems.map((item, index) => (
                        <div key={index} className="flex flex-1 flex-col lg:items-start items-center justify-center gap-5 p-5  border-gray-300 border-x border-y lg:border-x ">
                            <img src={item.icon} alt={item.text} className="w-16 h-16" />
                            <div className='text-black text-lg w-full 2xl:text-start text-center'>
                                {item.text}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="w-full  md:mt-24 mt-16"></div>
            </section>
            <section className="flex  flex-col lg:px-32 px-5 md:px-10 w-full bg-cover bg-center min-h-screen ">
                <div className='w-full flex lg:flex-row flex-col gap-10  border border-gray-300 rounded-2xl 2xl:px-20 md:px-10 px-5 py-10'>
                    <div className='lg:w-[50%] w-full flex flex-col gap-5'>
                        <div className="relative pl-5 md:text-xl text-sm">
                            <span className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-[#00ff26] mr-2 "></span>
                            FAQ
                        </div>
                        <h1 className="relative z-10 text-black text-start  md:text-6xl text-4xl font-medium">Ready to proceed, but still have a few open questions?</h1>
                    </div>
                    <div className='flex flex-col items-start justify-center gap-5 lg:w-[50%] w-full'>
                        {faqItems.map((item, index) => (
                            <Fap key={index} title={item.title} description={item.description} />
                        ))}
                    </div>
                </div>
                <div className="w-full md:mt-24 mt-16"></div>
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
};

export default OurApproach;
