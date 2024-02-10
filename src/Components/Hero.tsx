import React from 'react';
import favico from '../assets/favicon.ico';

function Hero() {
    return (
        <div 
            className="bg-blue-950 text-white font-sans flex flex-col justify-center items-center mt-[-60%] md:mt-[-15%]"
            style={{ height: 'calc(130vh)' }} 
        >
            <div className="w-64 h-64 lg:w-96 lg:h-96 z-10 relative flex items-center justify-center">
                <svg className="animate-spin" width="100%" height="100%" viewBox="0 0 100 100">
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
                    <h1 className="text-2xl md:text-4xl  lg:text-5xl mb-3 lg:mb-5 leading-tight ">Web Warp</h1>
                    <p className="text-sm md:text-base lg:text-lg font-light text-gray-400">Internet Computer Hackathon</p>
                </div>
                
            </div>
            
            <div className="mt-16 text-center space-y-2">
                    <p>Powered by:</p>
                    <img src={favico} alt="dfinity" className="mx-auto" style={{ maxWidth: '50px' }} /> {/* Adjust the size as needed */}
                </div>

        </div>
    );
}

export default Hero;
















