import React from 'react';
import { Clock, Star, Eye } from 'lucide-react'; // Assuming you're using lucide-react for icons
import { Project } from '@/constants/type';

const PublicCard = ({ project, key }: { project: Project, key: string }) => {
    return (
        <div
            key={key}
            className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-violet-500 transition-colors"
        >
            <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                    <h3 className="font-bold text-xl">{project.title}</h3>
                    <span className="px-2 py-1 rounded-full bg-gray-800 text-xs">
                        {project.language}
                    </span>
                </div>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex items-center text-sm text-gray-400 mb-4">
                    <span className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {project.time}
                    </span>
                </div>
                <div className="flex justify-between text-sm text-gray-400 pt-4 border-t border-gray-700">
                    <div className="flex items-center">
                        <Star className="h-4 w-4 mr-1 text-violet-400" />
                        <span>{project.stars}</span>
                    </div>
                    <div className="flex items-center">
                        <Eye className="h-4 w-4 mr-1 text-violet-400" />
                        <span>{project.views}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PublicCard;
