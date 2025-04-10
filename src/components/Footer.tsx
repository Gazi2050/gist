import { Code, Github } from "lucide-react";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-black text-white py-12">
            <div className="container mx-auto px-6 flex flex-col sm:flex-row justify-between items-center space-y-8 sm:space-y-0">

                {/* Left Section: Logo and Navigation Links */}
                <div className="flex flex-col items-center sm:items-start">
                    <Link href="/" className="flex items-center space-x-2 cursor-pointer mb-4">
                        <Code className="h-9 w-9 text-violet-400" />
                        <span className="text-3xl font-bold">Gist</span>
                    </Link>
                    <div className="flex flex-wrap justify-center sm:justify-start space-x-6 text-sm font-medium">
                        <Link href="/" className="text-white hover:text-violet-400 transition duration-300">Home</Link>
                        <Link href="/trending" className="text-white hover:text-violet-400 transition duration-300">Trending</Link>
                        <Link href="/about-us" className="text-white hover:text-violet-400 transition duration-300">About Us</Link>
                    </div>
                </div>

                {/* Right Section: Social Media Icons */}
                <div className="flex flex-col items-center sm:items-start">
                    <div className="text-lg font-semibold mb-4">Follow Us</div>
                    <div className="flex space-x-6">
                        <a href="https://github.com/Gazi2050/gist" target="_blank" className="text-white hover:text-violet-400 transition duration-300">
                            <Github className="h-10 w-10" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="text-center mt-8 text-sm text-white opacity-70">
                <p>© {new Date().getFullYear()} Gist. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
