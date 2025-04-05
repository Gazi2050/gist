'use client';

import { Button } from '@/components/ui/button';
import { formatCode } from '@/utils/formatCode';
import { getLineNumbers } from '@/utils/getLineNumbers';
import { useRef, useEffect, useState } from 'react';

export default function Page() {
  const [code, setCode] = useState('');
  const lineRef = useRef(null);
  const codeRef = useRef(null);


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


  return (
    <main className="p-6 font-mono">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Tailwind Gist-style Editor</h1>
        <button
          onClick={() => formatCode(code, setCode)}
          className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Format Code
        </button>
        <Button className="bg-white">Button</Button>
      </div>

      <div className="flex border rounded-lg overflow-hidden bg-gray-50 h-[400px]">
        <textarea
          ref={lineRef}
          value={getLineNumbers(code)}
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
