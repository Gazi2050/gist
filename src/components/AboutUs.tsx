import { Code, Eye, Share2, Sliders, Star, Users } from "lucide-react";
import Footer from "./Footer";

const AboutUs = () => {
    return (
        <div className="text-white">
            {/* Header Section */}
            <header className="pt-10 pb-0 px-6 text-center">
                <h1 className="text-5xl md:text-6xl font-extrabold text-violet-500">About Us</h1>
                <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto text-zinc-300">
                    Welcome to Gist — the place where developers share and collaborate on code snippets.
                </p>
            </header>

            {/* Content Section */}
            <section className="flex flex-col md:flex-row items-center justify-between py-20 px-6 max-w-7xl mx-auto">
                {/* Left Side: Text Content */}
                <div className="w-full md:w-1/2 text-left space-y-6">
                    <h2 className="text-4xl md:text-5xl font-semibold text-violet-400">What is Gist?</h2>
                    <p className="text-lg md:text-xl text-zinc-300">
                        Gist is a simple yet powerful platform for sharing and discovering code snippets. Whether you&apos;re looking to share a small
                        code snippet or get feedback from a community of developers, Gist provides a fast and efficient way to do so. It&apos;s all
                        about collaboration, discovery, and improving code quality through instant sharing and community feedback.
                    </p>

                    <div className="mt-8">
                        <h3 className="text-2xl font-semibold text-violet-400">Key Features:</h3>
                        <ul className="mt-4 text-lg text-zinc-300 list-disc list-inside space-y-4">
                            <li className="flex items-center">
                                <Code className="mr-3 text-violet-400" size={24} /> Automatically format your code for better readability.
                            </li>
                            <li className="flex items-center">
                                <Share2 className="mr-3 text-violet-400" size={24} /> Create and share code snippets in seconds.
                            </li>
                            <li className="flex items-center">
                                <Users className="mr-3 text-violet-400" size={24} /> Connect and engage with a community of developers.
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Right Side: Image */}
                <div className="w-full md:w-1/2 mt-12 md:mt-0">
                    <img
                        src="https://i.ibb.co.com/932QHDjF/creative.png" // Provided image
                        alt="Gist Illustration"
                        className="w-full h-auto rounded-lg shadow-2xl"
                    />
                </div>
            </section>

            {/* Editor Features Section */}
            <section className="py-20 px-6 bg-gray-900">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-semibold text-violet-400">Editor Features</h2>
                    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        <div className="bg-zinc-800 p-8 rounded-lg shadow-xl transition-all duration-300 hover:shadow-2xl">
                            <Sliders className="text-violet-400 mx-auto" size={40} />
                            <h3 className="text-xl font-semibold text-violet-400 mt-6">Code Formatting</h3>
                            <p className="mt-2 text-zinc-300">
                                Automatically format your code with proper indentation, spacing, and readability.
                            </p>
                        </div>
                        <div className="bg-zinc-800 p-8 rounded-lg shadow-xl transition-all duration-300 hover:shadow-2xl">
                            <Star className="text-violet-400 mx-auto" size={40} />
                            <h3 className="text-xl font-semibold text-violet-400 mt-6">Stars</h3>
                            <p className="mt-2 text-zinc-300">
                                Rate and discover popular gists with a star rating system.
                            </p>
                        </div>
                        <div className="bg-zinc-800 p-8 rounded-lg shadow-xl transition-all duration-300 hover:shadow-2xl">
                            <Eye className="text-violet-400 mx-auto" size={40} />
                            <h3 className="text-xl font-semibold text-violet-400 mt-6">View Count</h3>
                            <p className="mt-2 text-zinc-300">
                                Track how many times your code has been viewed by others.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default AboutUs;
