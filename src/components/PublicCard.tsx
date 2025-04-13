import React from 'react';
import { Star, Eye } from 'lucide-react';
import { Project } from '@/constants/type';

const PublicCard = ({ project }: { project: Project }) => {
    return (
        <div
            className="bg-white/5 rounded-xl overflow-hidden border border-gray-800 hover:border-white/20 transition-colors"
        >
            <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                    <div className='flex flex-col '>
                        <h3 className="font-medium text-blue-400 hover:underline underline-offset-4 cursor-pointer text-xl">{project.title}</h3>
                        <p className='text-sm text-zinc-600 font-medium mt-1'>Created {project.createdAt}</p>
                    </div>
                    <span className="font-semibold font-mono text-base text-violet-500 bg-zinc-900 px-2 py-1 rounded-lg">
                        {project.language}
                    </span>
                </div>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex justify-between text-sm text-gray-400 pt-4 border-t border-gray-700">
                    <div className="flex justify-center items-center text-base">
                        <Star className="h-5 w-5 mr-1 text-yellow-400 fill-yellow-400" />
                        <span>{project.stars.length}</span>
                    </div>
                    <div className="flex items-center text-base">
                        <Eye className="h-5 w-5 mr-1 text-violet-500" />
                        <span>{project.views.length}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PublicCard;
