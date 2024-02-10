import { FaEnvelope, FaLinkedin, FaTwitter } from "react-icons/fa";

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <div>
            <div className="bg-blue-950 text-slate-200  py-12">
                
                <div className="flex justify-center">
                    <div className="text-center">
                        <p className="mb-2 text-lg ">Connect with us:</p>
                        <div className="flex space-x-4 text-white">
                            <a href="mailto:pentestjourney@gmail.com" target="_blank" rel="noopener noreferrer">
                                <FaEnvelope className="text-2xl  hover:text-blue-600 transition" />
                            </a>
                            <a href="https://www.linkedin.com/in/geronimo-nolasco-iii-347421224/" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin className="text-2xl  hover:text-blue-600 transition" />
                            </a>
                            <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer">
                                <FaTwitter className="text-2xl  hover:text-blue-600 transition" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-12 text-center  pt-8">
                
                    <p className="text-gray-600">Copyright © {currentYear} <h1 className="text-xl font-bold text-green-500">
  wbwarp@:~$ <span className="bg-gray-600 inline-block w-3 h-4 animate-blink"></span>
</h1></p>
                </div>
            </div>
        </div>
    );
}

export default Footer;