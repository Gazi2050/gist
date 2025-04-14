import { Project } from "@/constants/type";
import { truncateString } from "@/utils/truncateString";
import { Eye, Star } from "lucide-react";
import Link from "next/link";

const PrivateCard = ({ project }: { project: Project }) => {
    const { _id: id, title, stars, description, language, views } = project
    const shortenedTitle = truncateString(title, 20);
    const shortenedDescription = truncateString(description, 30);
    return (
        <div
            className="bg-white/5 border border-white/10 rounded-lg p-4 hover:border-white/20 transition"
        >
            <div className="flex justify-between items-start">
                <Link href={`/profile/${id}`} className="font-medium text-blue-400 hover:underline underline-offset-4 cursor-pointer">
                    {shortenedTitle}
                </Link>
                <div className="flex items-center gap-1 text-xs text-yellow-400">
                    <Star size={20} className="w-4 h-4" />
                    <span className="font-semibold text-sm">{stars.length}</span>
                </div>
            </div>
            <p className="text-sm text-gray-300 mt-1">{shortenedDescription}</p>
            <div className="flex justify-between items-center mt-3 text-xs text-gray-400">
                <span className="font-semibold font-mono text-sm text-violet-500 bg-zinc-900 px-2 py-1 rounded-lg">{language}</span>
                <div className="flex items-center gap-1">
                    <Eye size={20} className="text-violet-500" />
                    <span className="font-semibold text-sm">{views.length}</span>
                </div>
            </div>
        </div>
    );
};

export default PrivateCard;