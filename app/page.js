'use client';

import { useRef, useEffect, useState } from 'react';

export default function Page() {
  const [code, setCode] = useState('');
  const lineRef = useRef(null);
  const codeRef = useRef(null);

  // Scroll syncing
  useEffect(() => {
    const codeArea = codeRef.current;
    const lineArea = lineRef.current;

    const syncScroll = () => {
      if (lineArea) lineArea.scrollTop = codeArea.scrollTop;
    };

    if (codeArea) {
      codeArea.addEventListener('scroll', syncScroll);
    }

    return () => {
      if (codeArea) {
        codeArea.removeEventListener('scroll', syncScroll);
      }
    };
  }, []);

  const getLineNumbers = () => {
    const lines = code.split('\n').length || 1;
    return Array.from({ length: lines }, (_, i) => i + 1).join('\n');
  };

  return (
    <main className="p-6 font-mono">
      <h1 className="text-2xl font-bold mb-4">Tailwind Gist-style Editor</h1>
      <div className="flex border rounded-lg overflow-hidden bg-gray-50 h-[400px]">
        <textarea
          ref={lineRef}
          value={getLineNumbers()}
          readOnly
          className="w-12 p-2 text-right text-black bg-gray-200 border-r border-gray-300 resize-none overflow-hidden h-full text-sm leading-[1.5em]"
        />
        <textarea
          ref={codeRef}
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Type your code here..."
          className="flex-1 p-2 text-black bg-white resize-none h-full outline-none text-sm leading-[1.5em] overflow-auto whitespace-pre"
        />
      </div>
    </main>
  );
}
