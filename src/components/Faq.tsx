"use client"
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const Faq = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null)

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index)
    }

    const faqs = [
        {
            question: "How do I share my code?",
            answer:
                "Simply create a new gist, paste your code, add a description, and click 'Create'. You'll get a shareable link instantly.",
        },
        {
            question: "Is my code private or public?",
            answer:
                "You can choose! We offer both public and private sharing options. Public gists are discoverable, while private ones are only accessible via direct link.",
        },
        {
            question: "What languages are supported?",
            answer:
                "We support syntax highlighting for over 100 programming languages including JavaScript, Python, Ruby, Go, Rust, C++, and many more.",
        },
        {
            question: "Can I collaborate with others?",
            answer: "Yes! You can invite collaborators to your gists, allowing them to view and edit your code snippets.",
        },
    ]

    return (
        <section id="faq" className="py-16 md:py-24 bg-black">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border border-gray-800 rounded-lg overflow-hidden">
                            <button
                                className="flex justify-between items-center w-full p-4 text-left"
                                onClick={() => toggleFaq(index)}
                            >
                                <span className="font-medium text-lg">{faq.question}</span>
                                <ChevronDown
                                    className={`h-5 w-5 transition-transform ${openFaq === index ? "transform rotate-180" : ""}`}
                                />
                            </button>
                            {openFaq === index && <div className="p-4 pt-0 text-gray-400">{faq.answer}</div>}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Faq;