"use client"
import React, { useState } from 'react';

const Newsletter = () => {
    const [email, setEmail] = useState("")

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle newsletter subscription
        alert(`Thank you for subscribing with ${email}!`)
        setEmail("")
    }
    return (
        <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
                    <p className="text-gray-400 mb-8">
                        Subscribe to our newsletter to get the latest updates, tips, and resources for developers.
                    </p>
                    <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-4 py-3 rounded-md bg-gray-900 border border-gray-800 focus:outline-none focus:border-violet-500 text-[#F7F7F7]"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <button
                            type="submit"
                            className="px-6 py-3 rounded-md bg-violet-600 text-white font-medium hover:bg-violet-500 transition"
                        >
                            Subscribe
                        </button>
                    </form>
                    <p className="text-xs text-gray-500 mt-4">We respect your privacy. Unsubscribe at any time.</p>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;