import React from 'react';

function Login() {
    return (
        <div className='bg-white text-blue-950 h-screen font-mono'>
            <div className="p-4  mx-auto  md:px-[30%] md:py-[5%]">
                <h2 className="text-lg md:text-2xl  mb-4 ">Login</h2>
                <form>
                    <div className="mb-4 text-sm text-blue-950">
                        <label className="block mb-2 font-light">Username</label>
                        <input className="w-full p-2 border rounded" type="text" placeholder="Username"/>
                    </div>
                    <div className="mb-4 text-sm text-blue-950">
                        <label className="block mb-2 font-light">Password</label>
                        <input className="w-full p-2 border rounded" type="password" placeholder="Password"/>
                    </div>
                    <button className="bg-blue-900 text-white font-light px-4 py-2 rounded hover:bg-blue-700">Login</button>
                </form>
            </div>
        </div>
    );
}

export default Login;
