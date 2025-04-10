'use client';

import Editor from './Editor';
import { editorFeature } from '@/constants/data';

const EditorSection = () => {
    const initialCode = `function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }

  return result;
}`;

    return (
        <section className="px-6 py-9 bg-gray-900">
            <div className="max-w-4xl mx-auto">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Powerful Code Editor</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Our feature-rich code editor supports syntax highlighting, auto-completion, and real-time collaboration.
                        </p>
                    </div>

                    {/* Code Editor Area */}
                    <Editor code={initialCode} language='JavaScript' />

                    {/* Feature Highlights */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                        {editorFeature.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <div key={index} className="bg-gray-800 p-4 rounded-lg">
                                    <div className="flex items-center mb-3">
                                        <Icon className={`h-5 w-5 text-${item.color} mr-2`} />
                                        <h3 className="font-bold text-white">{item.title}</h3>
                                    </div>
                                    <p className="text-gray-400 text-sm">{item.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EditorSection;
