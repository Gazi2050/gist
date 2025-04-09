import { Code } from 'lucide-react';
import Link from 'next/link';
import NavLink from './NavLink';

const Navbar = () => {
    return (
        <nav className="border-b border-gray-800 px-4 py-4 sticky top-0 z-50 bg-black/95 backdrop-blur-sm">
            <div className="container mx-auto flex items-center justify-between relative">
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-2 cursor-pointer">
                    <Code className="h-7 w-7 text-violet-400" />
                    <span className="text-2xl font-bold">Gist</span>
                </Link>

                {/* Center Nav Links */}
                <div className="hidden md:flex justify-center items-center space-x-8 absolute left-1/2 transform -translate-x-1/2 z-10">
                    <NavLink href="/" label="Home" />
                    <NavLink href="/treading" label="Treading" />
                    <NavLink href="/aboutUs" label="About Us" />
                </div>

                {/* Auth Buttons */}
                <div className="flex items-center space-x-3 z-20">
                    <Link
                        href="/"
                        className="rounded-md border border-violet-600 px-4 py-2 text-white hover:bg-gray-50/9 transition duration-300 font-semibold cursor-pointer"
                    >
                        Sign In
                    </Link>
                    <Link
                        href="/"
                        className="rounded-md bg-violet-600 px-4 py-2 text-white hover:bg-violet-500 transition duration-200 font-semibold cursor-pointer"
                    >
                        Sign Up
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;