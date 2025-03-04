import { Link } from "react-router-dom";
import { useState } from "react";
import arrowIcon from '../assets/icons/arrow-right-top.svg'

interface ServiceCardProps {
    number: string;
    title: string;
    description: string;
    image: string;
}

const ServiceCard = (props: ServiceCardProps) => {

    const [isOpenedDetail, setIsOpenedDetail] = useState(false);

    return (
        <div className="flex flex-col lg:flex-row items-center gap-20 w-full lg:w-[80%] p-5 lg:pl-[100px] border border-gray rounded-2xl cursor-pointer" onClick={() => setIsOpenedDetail(!isOpenedDetail)}>
            <div className="flex flex-col gap-7 w-full">
                <div className="flex items-center gap-5">
                    <div className="text-black lg:text-3xl text-xl font-medium">{props.number}</div>
                    <div className="text-black lg:text-3xl text-xl font-medium">{props.title}</div>
                </div>
                {isOpenedDetail && (
                    <>
                        <div className="text-lg lg:text-xl ">{props.description}</div>
                        <Link to="/layouts/services" className="bg-[#00ff26] text-[#1D1D1B] flex gap-1 px-6 py-4 cursor-pointer rounded-xl font-semibold  w-full 2xl:w-[40%] justify-center">
                            <p>Read More</p>
                            <img src={arrowIcon} alt="icon" width={20} className="font-semibold" />
                        </Link>
                    </>

                )}
            </div>
            {isOpenedDetail && (
                <div>
                    <img src={props.image} alt={props.title} className="w-full max-w-[900px] rounded-2xl" />
                </div>
            )}
        </div>
    )
}

export default ServiceCard
