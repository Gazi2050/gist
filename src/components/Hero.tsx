import Link from 'next/link';

const Hero = () => {
    return (
        <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="space-y-6">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                            Share Code Snippets <span className="text-violet-400">Instantly</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-400 max-w-lg">
                            The simplest way to share your code with anyone. Create, share, and discover code snippets in seconds.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href='/createGist' className="rounded-md bg-violet-600 px-6 py-3 text-white font-medium hover:bg-violet-500 transition duration-300">
                                Create a Gist
                            </Link>
                            <Link href='/treading' className="rounded-md border border-violet-700 px-6 py-3 hover:bg-violet-900/30 transition duration-300">
                                Explore Gists
                            </Link>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="bg-gray-900 rounded-lg p-4 shadow-xl">
                            <div className="flex items-center mb-4">
                                <div className="flex space-x-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                </div>
                                <div className="ml-4 text-sm text-gray-400">example.js</div>
                            </div>
                            <pre className="text-sm text-violet-300 overflow-x-auto">
                                <code>{`function fibonacci(n) {
  if (n <= 1) return n;
  
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Generate first 10 Fibonacci numbers
const sequence = [];
for (let i = 0; i < 10; i++) {
  sequence.push(fibonacci(i));
}

console.log(sequence); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]`}</code>
                            </pre>
                        </div>
                        <div className="absolute -bottom-6 -right-6 bg-gray-800 rounded-lg p-4 shadow-xl hidden md:block">
                            <pre className="text-xs text-purple-300">
                                <code>{`# Python version
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)`}</code>
                            </pre>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;