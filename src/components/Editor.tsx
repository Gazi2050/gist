import { EditorProps } from '@/constants/type';
import React, { useEffect, useRef, useState } from 'react';


const Editor: React.FC<EditorProps> = ({ language, code: initialCode = `` }) => {
    const [code, setCode] = useState(initialCode);
    const lineRef = useRef<HTMLTextAreaElement>(null);
    const codeRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        const codeArea = codeRef.current;
        const lineArea = lineRef.current;

        const syncScroll = () => {
            if (lineArea && codeArea) {
                lineArea.scrollTop = codeArea.scrollTop;
            }
        };

        codeArea?.addEventListener('scroll', syncScroll);
        return () => codeArea?.removeEventListener('scroll', syncScroll);
    }, []);

    const getLineNumbers = (text: string) => {
        const lines = text.split('\n').length;
        return Array.from({ length: lines }, (_, i) => (i + 1).toString()).join('\n');
    };

    const calculateLineWidth = (text: string) => {
        const lines = text.split('\n').length;
        const maxLength = (lines + "").length;
        if (maxLength === 1) {
            return `${maxLength * 35}px`;
        } else if (maxLength === 2) {
            return `${maxLength * 20}px`;
        } else {
            return `${maxLength * 15}px`;
        }
    };

    const totalLines = code.split('\n').length;

    const formatCode = () => {
        const lines = code.trim().split('\n');
        let formatted = '';
        let indentLevel = 0;
        const indent = '  ';

        for (const rawLine of lines) {
            const line = rawLine.trim();

            if (line.startsWith('}')) indentLevel = Math.max(0, indentLevel - 1);
            formatted += indent.repeat(indentLevel) + line + '\n';

            if (line.endsWith('{')) indentLevel += 1;
        }

        setCode(formatted.trim());
    };

    return (
        <div>
            <div className="relative rounded-lg border border-gray-600">
                {/* Position the Format Code button in the top-right corner */}
                <button
                    onClick={formatCode}
                    className="absolute top-2 right-2 px-2 py-1 text-sm bg-black text-violet-400 font-bold cursor-pointer duration-300 rounded-lg"
                >
                    Format Code
                </button>

                <div className="flex rounded-t-lg overflow-hidden bg-gray-50 h-[400px] font-mono">
                    <textarea
                        ref={lineRef}
                        value={getLineNumbers(code)}
                        readOnly
                        className="p-2 text-right text-violet-400 bg-black resize-none overflow-hidden h-full text-sm leading-[1.5em] border-r border-zinc-700"
                        style={{ width: calculateLineWidth(code) }}
                    />
                    <textarea
                        ref={codeRef}
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        placeholder="// Start typing your code..."
                        className="flex-1 p-2 text-white bg-zinc-900 resize-none h-full outline-none text-sm leading-[1.5em] overflow-auto whitespace-pre"
                    />
                </div>
                <div className="flex rounded-b-lg justify-between p-2 bg-zinc-800 text-sm text-gray-400 border-t border-zinc-700">
                    <span>{language}</span>
                    <span>{totalLines} {totalLines === 1 ? 'Line' : 'Lines'}</span>
                </div>
            </div>
        </div>
    );
};

export default Editor;
