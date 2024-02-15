import React from 'react';
import favico from '../assets/favicon.ico';

function Hero() {
    return (
        <div className="bg-blue-950 text-white mt-[-17%] md:mt-[-5%] font-sans min-h-screen flex flex-col justify-center items-center p-4">
            <div className="relative flex flex-col items-center justify-center max-w-4xl mx-auto">
                <svg className="animate-spin w-64 h-64 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-96 lg:h-96 xl:w-128 xl:h-128" viewBox="0 0 100 100">

                    <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="lightgreen" />
                            <stop offset="50%" stopColor="green" />
                            <stop offset="100%" stopColor="blue" />
                        </linearGradient>
                    </defs>
                    <circle cx="50" cy="50" r="48" fill="none" strokeWidth="1" stroke="url(#gradient)" />
                </svg>
                <div className="absolute text-center">
                <h1 className="text-xl md:text-3xl lg:text-4xl xl:text-5xl mb-3 leading-tight">Web Warp</h1>
<p className="text-xs md:text-sm lg:text-base xl:text-lg font-light text-gray-400">Internet Computer Hackathon</p>

                </div>
            </div>

            <div className="mt-16 text-center space-y-2">
                <p>Powered by:</p>
                <img src={favico} alt="dfinity" className="mx-auto" style={{ maxWidth: '50px' }} />
            </div>
        </div>
    );
}

export default Hero;


















