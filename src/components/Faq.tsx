"use client";

import { faqs } from "@/constants/data";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const Faq = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    return (
        <section id="faq" className="py-16 md:py-24 bg-black text-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                    Frequently Asked Questions
                </h2>
                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, index) => {
                        const isOpen = openFaq === index;

                        return (
                            <div
                                key={index}
                                className="border border-gray-800 rounded-lg overflow-hidden transition-all"
                            >
                                <button
                                    onClick={() => toggleFaq(index)}
                                    className="flex items-center justify-between w-full gap-4 p-4 text-left focus:outline-none"
                                    aria-expanded={isOpen}
                                >
                                    <span className="text-base md:text-lg font-medium flex-1">
                                        {faq.question}
                                    </span>
                                    <ChevronDown
                                        className={`h-5 w-5 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                                            }`}
                                    />
                                </button>

                                <div
                                    className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                                        }`}
                                >
                                    <div className="overflow-hidden px-4 pb-4 text-gray-400">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Faq;
