import { Code, Users, Zap } from 'lucide-react';
import React from 'react';

const Editor = () => {
    return (
        <section id="editor" className="py-16 md:py-24 bg-gray-900">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Code Editor</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Our feature-rich code editor supports syntax highlighting, auto-completion, and real-time collaboration.
                    </p>
                </div>

                <div className="max-w-5xl mx-auto">
                    <div className="bg-gray-900 rounded-lg overflow-hidden shadow-2xl border border-gray-800">
                        {/* Editor Header */}
                        <div className="bg-black p-3 flex items-center justify-between border-b border-gray-800">
                            <div className="flex items-center">
                                <div className="flex space-x-2 mr-4">
                                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                </div>
                                <div className="flex space-x-2">
                                    <span className="text-sm px-3 py-1 rounded bg-violet-600 text-white font-medium">index.js</span>
                                    <span className="text-sm px-3 py-1 rounded bg-gray-800 text-gray-300">styles.css</span>
                                    <span className="text-sm px-3 py-1 rounded bg-gray-800 text-gray-300">README.md</span>
                                </div>
                            </div>
                            <div className="flex items-center space-x-3">
                                <button className="text-sm px-3 py-1 rounded bg-gray-800 hover:bg-gray-700 transition">Share</button>
                                <button className="text-sm px-3 py-1 rounded bg-violet-600 text-white hover:bg-violet-500 transition">
                                    Save
                                </button>
                            </div>
                        </div>

                        {/* Editor Content */}
                        <div className="flex">
                            {/* Line Numbers */}
                            <div className="bg-black text-gray-600 p-4 text-right select-none">
                                <div>1</div>
                                <div>2</div>
                                <div>3</div>
                                <div>4</div>
                                <div>5</div>
                                <div>6</div>
                                <div>7</div>
                                <div>8</div>
                                <div>9</div>
                                <div>10</div>
                                <div>11</div>
                                <div>12</div>
                            </div>

                            {/* Code Content */}
                            <div className="p-4 overflow-x-auto w-full bg-black">
                                <pre className="text-sm">
                                    <code>
                                        <span className="text-purple-400">import</span> <span className="text-yellow-300">React</span>{" "}
                                        <span className="text-purple-400">from</span> <span className="text-green-300">&apos;react&apos;</span>;
                                        {"\n"}
                                        {"\n"}
                                        <span className="text-purple-400">const</span> <span className="text-blue-300">CodeEditor</span>{" "}
                                        <span className="text-gray-400">=</span> <span className="text-gray-400">(</span>
                                        <span className="text-gray-400">)</span> <span className="text-gray-400">{"=>"}</span>{" "}
                                        <span className="text-gray-400">{"{"}</span>
                                        {"\n"}
                                        {"  "}
                                        <span className="text-purple-400">const</span> <span className="text-gray-400">[</span>
                                        <span className="text-blue-300">code</span>
                                        <span className="text-gray-400">,</span> <span className="text-blue-300">setCode</span>
                                        <span className="text-gray-400">]</span> <span className="text-gray-400">=</span>{" "}
                                        <span className="text-yellow-300">React</span>
                                        <span className="text-gray-400">.</span>
                                        <span className="text-blue-300">useState</span>
                                        <span className="text-gray-400">(</span>
                                        <span className="text-green-300">&apos;&apos;</span>
                                        <span className="text-gray-400">)</span>;{"\n"}
                                        {"\n"}
                                        {"  "}
                                        <span className="text-purple-400">const</span> <span className="text-blue-300">handleChange</span>{" "}
                                        <span className="text-gray-400">=</span> <span className="text-gray-400">(</span>
                                        <span className="text-blue-300">e</span>
                                        <span className="text-gray-400">)</span> <span className="text-gray-400">{"=>"}</span>{" "}
                                        <span className="text-gray-400">{"{"}</span>
                                        {"\n"}
                                        {"    "}
                                        <span className="text-blue-300">setCode</span>
                                        <span className="text-gray-400">(</span>
                                        <span className="text-blue-300">e</span>
                                        <span className="text-gray-400">.</span>
                                        <span className="text-blue-300">target</span>
                                        <span className="text-gray-400">.</span>
                                        <span className="text-blue-300">value</span>
                                        <span className="text-gray-400">)</span>;{"\n"}
                                        {"  "}
                                        <span className="text-gray-400">{"}"}</span>;{"\n"}
                                        {"\n"}
                                        {"  "}
                                        <span className="text-purple-400">return</span> <span className="text-gray-400">(</span>
                                        {"\n"}
                                        {"    "}
                                        <span className="text-gray-400">{"<"}</span>
                                        <span className="text-red-300">div</span> <span className="text-blue-300">className</span>
                                        <span className="text-gray-400">=</span>
                                        <span className="text-green-300">&quot;code-editor&quot;</span>
                                        <span className="text-gray-400">{">"}</span>
                                        {"\n"}
                                        {"      "}
                                        <span className="text-gray-400">{"<"}</span>
                                        <span className="text-red-300">textarea</span> <span className="text-blue-300">value</span>
                                        <span className="text-gray-400">=</span>
                                        <span className="text-gray-400">{"{"}</span>
                                        <span className="text-blue-300">code</span>
                                        <span className="text-gray-400">{"}"}</span> <span className="text-blue-300">onChange</span>
                                        <span className="text-gray-400">=</span>
                                        <span className="text-gray-400">{"{"}</span>
                                        <span className="text-blue-300">handleChange</span>
                                        <span className="text-gray-400">{"}"}</span> <span className="text-gray-400">{"/>"}</span>
                                        {"\n"}
                                        {"    "}
                                        <span className="text-gray-400">{"</"}</span>
                                        <span className="text-red-300">div</span>
                                        <span className="text-gray-400">{">"}</span>
                                        {"\n"}
                                        {"  "}
                                        <span className="text-gray-400">)</span>;{"\n"}
                                        <span className="text-gray-400">{"}"}</span>;{"\n"}
                                        {"\n"}
                                        <span className="text-purple-400">export</span> <span className="text-purple-400">default</span>{" "}
                                        <span className="text-blue-300">CodeEditor</span>;
                                    </code>
                                </pre>
                            </div>
                        </div>

                        {/* Editor Footer */}
                        <div className="bg-black p-3 border-t border-gray-800 flex justify-between items-center text-xs text-gray-400">
                            <div className="flex items-center space-x-4">
                                <span>JavaScript</span>
                                <span>UTF-8</span>
                            </div>
                            <div className="flex items-center space-x-4">
                                <span>Line: 12</span>
                                <span>Column: 32</span>
                                <span>2 collaborators online</span>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                        <div className="bg-gray-800 p-4 rounded-lg">
                            <div className="flex items-center mb-3">
                                <Zap className="h-5 w-5 text-violet-400 mr-2" />
                                <h3 className="font-bold">Syntax Highlighting</h3>
                            </div>
                            <p className="text-gray-400 text-sm">
                                Support for over 100 programming languages with beautiful syntax highlighting.
                            </p>
                        </div>
                        <div className="bg-gray-800 p-4 rounded-lg">
                            <div className="flex items-center mb-3">
                                <Users className="h-5 w-5 text-violet-400 mr-2" />
                                <h3 className="font-bold">Real-time Collaboration</h3>
                            </div>
                            <p className="text-gray-400 text-sm">
                                Work together with your team in real-time, seeing changes as they happen.
                            </p>
                        </div>
                        <div className="bg-gray-800 p-4 rounded-lg">
                            <div className="flex items-center mb-3">
                                <Code className="h-5 w-5 text-violet-400 mr-2" />
                                <h3 className="font-bold">Auto-completion</h3>
                            </div>
                            <p className="text-gray-400 text-sm">
                                Smart suggestions and auto-completion for faster, error-free coding.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Editor;