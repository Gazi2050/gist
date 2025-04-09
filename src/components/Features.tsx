import { Code, Share2, Users } from 'lucide-react';

const Features = () => {
    return (
        <section id="features" className="py-16 bg-gray-900">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose CodeShare?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Feature 1 */}
                    <div className="bg-gray-800 rounded-lg p-6 transition-transform hover:scale-105">
                        <div className="bg-violet-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                            <Code className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Syntax Highlighting</h3>
                        <p className="text-gray-400">
                            Support for over 100 programming languages with beautiful syntax highlighting to make your code
                            readable.
                        </p>
                    </div>

                    {/* Feature 2 */}
                    <div className="bg-gray-800 rounded-lg p-6 transition-transform hover:scale-105">
                        <div className="bg-violet-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                            <Share2 className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Instant Sharing</h3>
                        <p className="text-gray-400">
                            Create and share code snippets in seconds. Get a shareable link instantly with no sign-up required.
                        </p>
                    </div>

                    {/* Feature 3 */}
                    <div className="bg-gray-800 rounded-lg p-6 transition-transform hover:scale-105">
                        <div className="bg-violet-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                            <Users className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Collaboration</h3>
                        <p className="text-gray-400">
                            Work together with your team. Add comments, suggest changes, and collaborate in real-time.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;