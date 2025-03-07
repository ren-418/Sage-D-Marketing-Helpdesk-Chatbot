import { Link } from "react-router-dom"
import { useState } from "react"

import arrowIcon from '../../assets/icons/arrow-right-top.svg'
import bg from '../../assets/images/bg.png'
import bg2 from '../../assets/images/bg2.png'
import attachement from '../../assets/images/IMG_5044.png'
import Modal from "../../components/modal"


const FreelanceEditing = () => {

    const [showModal, setShowModal] = useState(false)

    return (
        <>
            <section
                className="relative flex flex-col items-center gap-10 justify-center px-5 py-36 h-screen w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${bg})` }}
            >
                <h1 className="text-white md:text-6xl text-4xl font-medium text-center">
                    Freelance Editing & Post Production
                </h1>
                <p className="text-white text-lg md:text-xl text-center">
                    Are you a videographer or creative team looking to outsource your editing? Let our media team take care of it!
                </p>

                <div className="bg-[#00ff26] text-[#1D1D1B] flex gap-1 px-6 py-4 cursor-pointer rounded-xl font-semibold" onClick={() => setShowModal(true)}>
                    <p>Upload Raw Files</p>
                    <img src={arrowIcon} alt="icon" width={20} className="font-semibold" />
                </div>

                <Modal showModal={showModal} onClose={() => setShowModal(false)} />
            </section>
            <section className="flex flex-col items-center gap-5 md:gap-10 lg:px-32 px-5 md:px-10 w-full bg-cover bg-center md:h-[90%] h-[40%] md:mt-24 mt-16">
                <div className="w-full h-full bg-cover bg-center rounded-2xl flex gap-5 items-center justify-between md:px-20 lg:px-32 2xl:px-48 px-5 py-10 md:py-20" style={{ backgroundImage: `url(${bg2})` }}>
                    <div className="flex flex-col gap-10 items-start">
                        <div className="text-white md:text-6xl text-4xl font-medium">Prepared to <br className="hidden md:block" /><span className="text-[#00ff26]">shine?</span></div>
                        <div className="w-full flex items-center justify-start ">
                            <Link to="https://calendly.com/d/cqyy-j3g-6yg" target="_blank" className="bg-[#00ff26] text-[#1D1D1B] hover:text-[#1D1D1B] text-sm md:text-base flex gap-1 px-6 py-4 cursor-pointer rounded-xl font-semibold ">
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

export default FreelanceEditing
