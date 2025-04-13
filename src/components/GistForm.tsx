'use client';

import { useState } from 'react';
import Editor from './Editor';
import Input from './Input';
import LanguageInput from './LanguageInput';
import { languages } from '@/constants/data';
import useAuthStore from '@/Hooks/useAuthStore';
import { Project } from '@/constants/type';
import moment from 'moment';

const GistForm = () => {
    const [language, setLanguage] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [code, setCode] = useState('');
    const { username } = useAuthStore()
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        const projectData: Project = {
            title,
            description,
            username,
            language,
            code,
            stars: [],
            views: [],
            createdAt: moment().toISOString(),

        };

        console.log(projectData);
    };

    return (
        <div className="flex flex-col items-center justify-center my-5 mx-2 md:my-10 font-mono relative">
            <h1 className="text-2xl md:text-3xl font-bold text-violet-400 mb-6 text-center">
                Create a New Gist
            </h1>

            <form onSubmit={handleSubmit} className="w-full max-w-2xl space-y-6">
                <Input
                    title={title}
                    setTitle={setTitle}
                    description={description}
                    setDescription={setDescription}
                />
                <LanguageInput
                    value={language}
                    onChange={setLanguage}
                    suggestions={languages}
                />
                <Editor language={language} code={code} setCode={setCode} />

                <div className="flex justify-end mt-6">
                    <button
                        type="submit"
                        className="px-4 py-2 bg-white/5 text-white rounded-md hover:bg-zinc-800 transition-colors duration-300 border border-gray-800"
                    >
                        Submit Gist
                    </button>
                </div>

            </form>
        </div>
    );
};

export default GistForm;
