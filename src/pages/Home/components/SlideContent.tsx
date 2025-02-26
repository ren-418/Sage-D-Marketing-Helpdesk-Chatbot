import React from "react";

interface SlideContentProps {
    title: string;
    description: string;
}

const SlideContent: React.FC<SlideContentProps> = ({ title, description }) => {
    return (
        <div className="text-center px-4 flex flex-col justify-center items-center">
            <h2 className="text-5xl font-bold text-white mb-4 max-w-[320px]">{title}</h2>
            <p className="text-lg text-white max-w-[250px]">{description}</p>
        </div>
    );
};

export default SlideContent;
