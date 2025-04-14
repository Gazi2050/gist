import PublicCard from "./PublicCard";
import { FeedProps, Project } from "@/constants/type";


const Feed: React.FC<FeedProps> = ({ Projects }) => {


    return (
        <div>
            <div className="grid grid-cols-1 gap-3 my-5 mx-2 max-w-5xl lg:mx-auto">
                {Projects.map((Project: Project) => (
                    <PublicCard key={Project._id} project={Project} />
                ))}
            </div>
        </div>
    );
};

export default Feed;
