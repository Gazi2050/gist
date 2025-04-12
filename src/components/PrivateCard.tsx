import { Project } from "@/constants/type";
import { Eye, Star } from "lucide-react";

const PrivateCard = ({ project, key }: { project: Project, key: string }) => {
    return (
        <div
            key={key}
            className="bg-white/5 border border-white/10 rounded-lg p-4 hover:border-white/20 transition"
        >
            <div className="flex justify-between items-start">
                <h3 className="font-medium text-blue-400 hover:underline cursor-pointer">
                    {project.title}
                </h3>
                <div className="flex items-center gap-1 text-xs text-yellow-400">
                    <Star size={20} className="w-4 h-4" />
                    <span className="font-semibold text-base">{project.stars}</span>
                </div>
            </div>
            <p className="text-sm text-gray-300 mt-1">{project.description}</p>
            <div className="flex justify-between items-center mt-3 text-xs text-gray-400">
                <span className="italic">{project.language}</span>
                <div className="flex items-center gap-1">
                    <Eye size={20} className="text-violet-500" />
                    <span className="font-semibold text-sm">{project.views.toLocaleString()}</span>
                </div>
            </div>
        </div>
    );
};

export default PrivateCard;