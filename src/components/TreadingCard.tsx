import React from 'react';
import { Star, Eye } from 'lucide-react';
import { Project } from '@/constants/type';
import Link from 'next/link';
import moment from 'moment';
import { truncateString } from '@/utils/truncateString';

const TreadingCard = ({ project }: { project: Project }) => {
    const {
        _id: id,
        title,
        language,
        description,
        stars,
        views,
        createdAt,
    } = project;
    const shortenedTitle = truncateString(title, 20);
    const shortenedDescription = truncateString(description, 30);
    const time = createdAt ? moment(createdAt).fromNow() : 'Unknown Date';

    return (
        <div className="bg-white/5 rounded-xl overflow-hidden border border-gray-800 hover:border-white/20 transition-colors">
            <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                    <div className="flex flex-col">
                        {/* here add for view */}
                        <Link
                            href={`/feed/${id}`}
                            className="font-medium text-blue-400 hover:underline underline-offset-4 cursor-pointer text-xl"
                        >
                            {shortenedTitle}
                        </Link>
                        <p className="text-sm text-zinc-600 font-medium mt-1">
                            Created {time}
                        </p>
                    </div>
                    <span className="font-semibold font-mono text-base text-violet-500 bg-zinc-900 px-2 py-1 rounded-lg">
                        {language}
                    </span>
                </div>
                <p className="text-gray-400 mb-4">{shortenedDescription}</p>
                <div className="flex justify-between text-sm text-gray-400 pt-4 border-t border-gray-700">
                    {/* here add for vote */}
                    <div className="flex justify-center items-center text-base cursor-pointer">
                        <Star className='h-5 w-5 mr-1 text-yellow-600' />
                        <span>{stars?.length ?? 0}</span>
                    </div>
                    <div className="flex items-center text-base">
                        <Eye className='h-5 w-5 mr-1 text-zinc-600' />
                        <span>{views?.length ?? 0}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TreadingCard;
