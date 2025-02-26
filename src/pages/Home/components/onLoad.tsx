import React from 'react';

const LoaderComponent: React.FC = () => {
    return (
        <div className='w-[100vw] h-[100vh] flex justify-center items-center fixed top-0 left-0 bg-[#212121] bg-opacity-60 z-20'>
            <div className="dot-spinner">
                <div className="dot-spinner__dot"></div>
                <div className="dot-spinner__dot"></div>
                <div className="dot-spinner__dot"></div>
                <div className="dot-spinner__dot"></div>
                <div className="dot-spinner__dot"></div>
                <div className="dot-spinner__dot"></div>
                <div className="dot-spinner__dot"></div>
                <div className="dot-spinner__dot"></div>
            </div>

        </div>
    );
};
export default LoaderComponent;
