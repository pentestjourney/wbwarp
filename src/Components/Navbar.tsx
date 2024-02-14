import React, { useState } from 'react';

import { NavLink } from 'react-router-dom';
function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-blue-950 text-white font-mono relative">
            <div className="container mx-auto p-4">
                <div className="flex justify-between items-center">
                    <NavLink to="/">
                        <svg width="215" height="40" viewBox="0 0 215 40" xmlns="http://www.w3.org/2000/svg">
                            {/* Terminal Icon */}
                            <rect x="0" y="7.5" width="40" height="25" fill="none" rx="5" ry="5"></rect>
                            <line x1="5" y1="20" x2="10" y2="20" stroke="#00FF00" strokeWidth="2"></line>
                            <path d="M 15 15 L 25 20 L 15 25 Z" fill="#00FF00"></path>
                            
                            {/* Text Logo */}
                            <text 
                                x="110" 
                                y="25" 
                                fill="#00FF00" 
                                fontFamily="'Courier New', monospace" 
                                fontSize="20" 
                                fontWeight="bold" 
                                textAnchor="middle">
                                wbwarp.com
                            </text>
                        </svg>
                    </NavLink>
                    <button onClick={() => setIsOpen(!isOpen)} className="sm:hidden focus:outline-none font-mono text-gray-200">
                        {isOpen ? 'X' : 'Menu'}
                    </button>
                </div>
                <div className={`fixed top-0 left-0 w-full h-full bg-blue-950 text-white z-20 transition-transform duration-700 ease-in-out transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} flex flex-col items-center justify-center sm:hidden`}>
                    <a href="/" className="absolute top-4 left-4">
                        <svg width="215" height="40" viewBox="0 0 215 40" xmlns="http://www.w3.org/2000/svg">
                            {/* Terminal Icon */}
                            <rect x="0" y="7.5" width="40" height="25" fill="none" rx="5" ry="5"></rect>
                            <line x1="5" y1="20" x2="10" y2="20" stroke="#00FF00" strokeWidth="2"></line>
                            <path d="M 15 15 L 25 20 L 15 25 Z" fill="#00FF00"></path>
                            
                            {/* Text Logo */}
                            <text 
                                x="110" 
                                y="25" 
                                fill="#00FF00" 
                                fontFamily="'Courier New', monospace" 
                                fontSize="20" 
                                fontWeight="bold" 
                                textAnchor="middle">
                                wbwarp.com
                            </text>
                        </svg>
                    </a>
                    <NavLink to="/about" className="hover:text-blue-500 mb-4" onClick={() => setIsOpen(false)}>About</NavLink>

<NavLink to="/posts" className="hover:text-blue-500 mb-4" onClick={() => setIsOpen(false)}>Whiteboard</NavLink>
<NavLink to="/gettingStarted" className="hover:text-blue-500" onClick={() => setIsOpen(false)}>Resources</NavLink>

                </div>
                <div className="hidden sm:flex space-x-4 justify-center mt-4">
    <NavLink to="/about" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>About</NavLink>
    
    <NavLink to="/posts" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>Whiteboard</NavLink>
    <NavLink to="/gettingStarted" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>Resources</NavLink>
</div>

            </div>
        </div>
    );
}

export default Navbar;



