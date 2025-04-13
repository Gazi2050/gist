'use client';

import { LanguageInputProps } from '@/constants/type';
import { useState } from 'react';

const LanguageInput: React.FC<LanguageInputProps> = ({ value, onChange, suggestions }) => {
    const [input, setInput] = useState(value);
    const [showSuggestions, setShowSuggestions] = useState(false);

    const CHARACTER_LIMIT = 20;

    const filteredSuggestions = suggestions.filter(
        (lang) =>
            lang.toLowerCase().startsWith(input.toLowerCase()) &&
            lang.toLowerCase() !== input.toLowerCase()
    );

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newInput = e.target.value;
        setInput(newInput);
        setShowSuggestions(true);

        if (suggestions.includes(newInput.toLowerCase())) {
            onChange(newInput.toLowerCase());
        }
    };

    const handleSelect = (lang: string) => {
        setInput(lang);
        onChange(lang);
        setShowSuggestions(false);
    };

    return (
        <div className="relative">
            <label htmlFor="language" className="text-sm text-gray-300 font-semibold block mb-1 ml-1">
                Language
            </label>
            <input
                id="language"
                type="text"
                value={input}
                onChange={handleInputChange}
                onFocus={() => setShowSuggestions(true)}
                onBlur={() => setTimeout(() => setShowSuggestions(false), 100)}
                placeholder="Choose language..."
                maxLength={CHARACTER_LIMIT}
                autoComplete="off"
                className="w-full px-3 py-2 bg-zinc-900 text-violet-300 border border-gray-700 rounded-md outline-none"
            />
            <div className="absolute right-2 mt-1 text-sm text-gray-500">
                {input.length}/{CHARACTER_LIMIT}
            </div>
            {input.length === CHARACTER_LIMIT && (
                <p className="text-sm text-red-500 mt-1 ml-1">Character limit reached.</p>
            )}
            {showSuggestions && filteredSuggestions.length > 0 && (
                <ul className="absolute z-10 w-full mt-1 bg-zinc-800 border border-gray-700 rounded-md max-h-48 overflow-auto shadow-lg">
                    {filteredSuggestions.map((lang) => (
                        <li
                            key={lang}
                            onClick={() => handleSelect(lang)}
                            className="px-3 py-2 text-sm text-gray-200 hover:bg-violet-500 hover:text-white cursor-pointer"
                        >
                            {lang}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default LanguageInput;
