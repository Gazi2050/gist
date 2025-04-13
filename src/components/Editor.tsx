import { EditorProps } from '@/constants/type';
import { formatCode } from '@/utils/formatCode';
import React, { useEffect, useRef } from 'react';


const Editor: React.FC<EditorProps> = ({ language, code = ``, setCode }) => {
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

    const handleFormat = () => {
        formatCode({ code, setCode });
    };

    return (
        <div>
            {/* Label + Format button for mobile */}
            <div className="flex items-center justify-between mb-1 ">
                <label htmlFor="description" className="text-base font-mono font-semibold text-gray-300 ml-1">
                    Editor
                </label>
                <button
                    onClick={handleFormat}
                    type='button'
                    className="px-2 py-1 text-sm bg-black border border-gray-700 text-violet-400 font-bold cursor-pointer duration-300 rounded-lg md:hidden"
                >
                    Format Code
                </button>
            </div>

            <div className="relative rounded-lg border border-gray-600">
                {/* Format button for desktop */}
                <button
                    onClick={handleFormat}
                    type='button'
                    className="absolute top-2 right-2 px-2 py-1 text-sm bg-black text-violet-400 font-bold cursor-pointer duration-300 rounded-lg hidden md:block border border-gray-700"
                >
                    Format Code
                </button>

                <div className="flex rounded-t-lg overflow-hidden bg-gray-50 h-[400px] font-mono">
                    <textarea
                        ref={lineRef}
                        value={getLineNumbers(code)}
                        readOnly
                        className="py-4 px-2 text-right text-violet-400 bg-black resize-none overflow-hidden h-full text-sm leading-[1.5em] border-r border-zinc-700"
                        style={{ width: calculateLineWidth(code) }}
                    />
                    <textarea
                        ref={codeRef}
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        spellCheck="false"
                        placeholder="// Start typing your code..."
                        className="flex-1 p-4 text-violet-300 bg-zinc-900 resize-none h-full outline-none text-sm leading-[1.5em] overflow-auto whitespace-pre"
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