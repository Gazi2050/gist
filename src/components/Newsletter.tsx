"use client";
import React, { useState } from "react";

const Newsletter = () => {
    const [email, setEmail] = useState("");

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Thank you for subscribing with ${email}!`);
        setEmail("");
    };

    return (
        <section className="py-20 md:py-28 bg-gray-900 text-white">
            <div className="container mx-auto px-6">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-4xl font-extrabold mb-4">Stay in the Loop</h2>
                    <p className="text-gray-400 text-lg mb-8">
                        Subscribe to our newsletter for updates, insights, and resources—delivered weekly to your inbox.
                    </p>
                    <form
                        onSubmit={handleSubscribe}
                        className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto"
                    >
                        <input
                            type="email"
                            placeholder="you@example.com"
                            className="flex-1 px-5 py-3 rounded-xl bg-black/60 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-violet-500 placeholder-gray-400 text-white"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <button
                            type="submit"
                            className="px-6 py-3 rounded-xl bg-violet-600 text-white font-semibold hover:bg-violet-500 transition-all duration-200"
                        >
                            Subscribe
                        </button>
                    </form>
                    <p className="text-sm text-gray-500 mt-4">
                        We respect your privacy. Unsubscribe anytime.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;
