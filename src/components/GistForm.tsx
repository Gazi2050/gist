'use client';

import { useState } from 'react';
import Editor from './Editor';
import Input from './Input';
import LanguageInput from './LanguageInput';
import { languages } from '@/constants/data';
import useAuthStore from '@/Hooks/useAuthStore';
import { Project } from '@/constants/type';
import moment from 'moment';
import { submitGist } from '@/utils/submitGist';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { LoaderCircle } from 'lucide-react';

const GistForm = () => {
    const [language, setLanguage] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [code, setCode] = useState('');
    const [loading, setLoading] = useState(false); // 👈 Loading state

    const { username } = useAuthStore();
    const router = useRouter();

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        setLoading(true); // 👈 Set loading to true

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

        submitGist(projectData)
            .then(() => {
                toast.success('Your gist has been posted successfully!');
                router.push('/feed');
                setTitle('');
                setDescription('');
                setLanguage('');
                setCode('');
            })
            .catch((error) => {
                console.error('Error submitting gist:', error);
                toast.error(error.message);
            })
            .finally(() => setLoading(false)); // 👈 Always stop loading
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
                        disabled={loading}
                        className={`px-4 py-2 rounded-md transition-colors duration-300 border border-gray-800 flex items-center gap-2 ${loading ? 'bg-zinc-700 cursor-not-allowed' : 'bg-white/5 hover:bg-zinc-900'
                            } text-white`}
                    >
                        {loading && <LoaderCircle className="animate-spin w-4 h-4" />}
                        {loading ? 'Creating...' : 'Create Gist'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default GistForm;
