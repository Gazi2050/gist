import Editor from './Editor';
import moment from 'moment';
import {
    Star,
    Eye,
    FileCode2,
    User2,
    Code2,
    RefreshCcw,
    Clock,
} from 'lucide-react';
import InfoItem from './InfoItem';
import { getFileExtension } from '@/utils/getFileExtension';
import { UpdateGistProps } from '@/constants/type';
import Link from 'next/link';

const GistDetails: React.FC<UpdateGistProps> = ({ projects, action = "false" }) => {
    const { _id: id, title = 'Untitled', description = '', username = 'Unknown', language = 'Unknown', code = '// No code available', createdAt, updatedAt, stars = [], views = [] } = projects;

    const formattedTitle = title.replace(/ /g, '_');
    const createdAtFormatted = createdAt ? moment(createdAt).fromNow() : 'Unknown date';
    const updatedAtFormatted = updatedAt ? moment(updatedAt).fromNow() : null;

    return (
        <section className="min-h-screen px-4 py-8 text-white font-mono">
            <div className="max-w-5xl mx-auto">
                {/* Info */}
                <div className='mb-5'>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border border-gray-700 rounded-t-lg bg-zinc-900 px-4 py-3 shadow-sm">
                        <div className="flex items-center gap-2">
                            <FileCode2 className="w-5 h-5 text-gray-400" />
                            <h1 className="text-lg font-semibold text-white">
                                {formattedTitle}.{getFileExtension(language)}
                            </h1>
                        </div>
                        <div className="flex gap-4 mt-3 sm:mt-0 text-sm text-gray-300">
                            <InfoItem Icon={Star} text={stars.length.toString()} />
                            <InfoItem Icon={Eye} text={views.length.toString()} />
                            <InfoItem Icon={Code2} text={language} />
                            {action === 'true' ?
                                (<Link
                                    href={`/updateGist/${id}`}
                                    className="bg-white/5 hover:bg-zinc-900 rounded-md transition-colors duration-300 border border-gray-800 text-[18px] px-5 py-1 shadow hidden md:block text-white">
                                    Update
                                </Link>)
                                :
                                (null)}
                        </div>
                        {action === 'true' ?
                            (<Link
                                href={`/updateGist/${id}`}
                                className="bg-white/5 hover:bg-zinc-900 rounded-md transition-colors duration-300 border border-gray-800 text-[18px] text-white shadow block md:hidden mt-5 px-5 py-1 text-center">
                                Update
                            </Link>)
                            :
                            (null)}
                    </div>
                    <div className="flex flex-col md:flex-row justify-between border-x border-gray-700 px-4 py-2 text-sm text-gray-400 space-y-3 md:space-y-0">
                        <InfoItem Icon={User2} text={username} />
                        <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:gap-4 md:items-center">
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4 text-blue-400" />
                                <span>Created: {createdAtFormatted}</span>
                            </div>
                            {updatedAt && (
                                <div className="flex items-center gap-2 text-green-500">
                                    <RefreshCcw className="w-4 h-4" />
                                    <span>Updated {updatedAtFormatted}</span>
                                </div>
                            )}
                        </div>
                    </div>
                    {description && (
                        <div className="border rounded-b-lg border-t border-gray-700  px-4 py-2 text-sm text-gray-300 italic wrap-break-word">
                            {description}
                        </div>
                    )}
                </div>
                {/* Code */}
                <Editor
                    code={code}
                    setCode={() => { }}
                    language={language}
                    readOnly={true}
                />
            </div>
        </section>
    );
};

export default GistDetails;
