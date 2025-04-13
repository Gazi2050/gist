'use client';

import React, { useState } from 'react';
import Editor from './Editor';
import Input from './Input';
import LanguageInput from './LanguageInput';
import { languages } from '@/constants/data';


const GistForm = () => {
    const [language, setLanguage] = useState('');

    return (
        <div className="flex flex-col items-center justify-center my-5 mx-2 md:my-10 font-mono relative">
            <h1 className="text-2xl md:text-3xl font-bold text-violet-400 mb-6 text-center">
                Create a New Gist
            </h1>

            <div className="w-full max-w-2xl space-y-6">
                <Input />
                <LanguageInput
                    value={language}
                    onChange={setLanguage}
                    suggestions={languages}
                />
                <Editor language={language} code="" />
            </div>
        </div>
    );
};

export default GistForm;
