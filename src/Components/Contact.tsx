import React from 'react';
import GettingStarted from './GettingStarted';
function Contact() {
    return (
        <div className='bg-white text-blue-950 h-screen font-mono'>
        <div className="p-4  mx-auto  md:px-[30%] md:py-[5%]">
            <h2 className="text-lg md:text-2xl  mb-4 ">Contact</h2>
            <form>
                <div className="mb-4 text-sm text-blue-950">
                    <label className="block mb-2  font-light">Name</label>
                    <input className="w-full p-2 border rounded" type="text" />
                </div>
                <div className="mb-4 text-sm text-blue-950">
                    <label className="block mb-2 font-light">Email</label>
                    <input className="w-full p-2 border rounded" type="email" />
                </div>
                <div className="mb-4 text-sm text-blue-950">
                    <label className="block mb-2  font-light">Message</label>
                    <textarea className="w-full p-2 border rounded"></textarea>
                </div>
                <button className="bg-blue-900 text-white font-light px-4 py-2 rounded hover:bg-blue-700">Submit</button>
            </form>
        </div>
        <div><GettingStarted/></div>
        
        </div>
    );
}

export default Contact;


