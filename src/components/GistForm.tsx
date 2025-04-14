import { GistFormProps } from '@/constants/type';
import Editor from './Editor';
import Input from './Input';
import LanguageInput from './LanguageInput';
import { languages } from '@/constants/data';
import { LoaderCircle } from 'lucide-react';
import ProTip from './ProTip';

const GistForm: React.FC<GistFormProps> = ({ formState, action = 'post' }) => {
    const { title, setTitle, description, setDescription, language, setLanguage, code, setCode, handleSubmit, loading } = formState
    const isPost = action === 'post';

    return (
        <div className="flex flex-col items-center justify-center my-5 mx-2 md:my-10 font-mono relative">
            <h1 className="text-2xl md:text-3xl font-bold text-violet-400 mb-6 text-center">
                {isPost ? 'Create New Gist' : 'Update Your Gist'}
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

                <div className="flex justify-center md:justify-between ">
                    <div className='hidden md:block'>
                        <ProTip />
                    </div>
                    <button
                        type="submit"
                        disabled={loading}
                        className={`px-4 py-2 rounded-md transition-colors duration-300 border border-gray-800 flex items-center gap-2 ${loading ? 'bg-zinc-700 cursor-not-allowed' : 'bg-white/5 hover:bg-zinc-900'
                            } text-white`}
                    >
                        {loading && <LoaderCircle className="animate-spin w-4 h-4" />}

                        {isPost ? (loading ? 'Creating...' : 'Create Gist') : (loading ? 'Saving...' : 'Save Gist')}

                    </button>

                </div>
                <div className='block md:hidden'>
                    <ProTip />
                </div>
            </form>
        </div>
    );
};

export default GistForm;
