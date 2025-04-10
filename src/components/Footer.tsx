import { Code, Github, Twitter } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-black py-12 border-t border-gray-800">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <div className="flex items-center space-x-2 mb-4">
                            <Code className="h-6 w-6 text-violet-400" />
                            <span className="text-xl font-bold">CodeShare</span>
                        </div>
                        <p className="text-gray-400 mb-4">
                            The simplest way to share code snippets with your team and the world.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-violet-400">
                                <Github className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-violet-400">
                                <Twitter className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-bold mb-4">Product</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li>
                                <a href="#" className="hover:text-violet-400">
                                    Features
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-violet-400">
                                    Pricing
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-violet-400">
                                    Security
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-violet-400">
                                    Enterprise
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold mb-4">Resources</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li>
                                <a href="#" className="hover:text-violet-400">
                                    Documentation
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-violet-400">
                                    Tutorials
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-violet-400">
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-violet-400">
                                    Support
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold mb-4">Company</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li>
                                <a href="#" className="hover:text-violet-400">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-violet-400">
                                    Careers
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-violet-400">
                                    Contact
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-violet-400">
                                    Legal
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400 text-sm">© {new Date().getFullYear()} CodeShare. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="text-gray-400 text-sm hover:text-violet-400">
                            Privacy Policy
                        </a>
                        <a href="#" className="text-gray-400 text-sm hover:text-violet-400">
                            Terms of Service
                        </a>
                        <a href="#" className="text-gray-400 text-sm hover:text-violet-400">
                            Cookie Policy
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;