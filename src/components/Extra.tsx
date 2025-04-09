import React from 'react';

const Extra = () => {
    return (
        <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
                <div className="bg-gradient-to-r from-violet-700 to-purple-500 rounded-xl p-8 md:p-12">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Ready to start sharing your code?</h2>
                        <p className="text-lg mb-8 text-gray-100">
                            Join thousands of developers who use CodeShare every day to share and collaborate on code.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="rounded-md bg-black px-6 py-3 text-[#F7F7F7] font-medium hover:bg-gray-900 transition">
                                Get Started for Free
                            </button>
                            <button className="rounded-md bg-white px-6 py-3 text-violet-700 font-medium hover:bg-gray-100 transition">
                                Schedule a Demo
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Extra;