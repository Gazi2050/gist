import useAuthStore from "@/Hooks/useAuthStore";
import PublicCard from "./PublicCard";
import { FeedProps, Project } from "@/constants/type";
import TreadingCard from "./TreadingCard";

const Feed: React.FC<FeedProps> = ({ Projects }) => {
    const { isAuthenticated } = useAuthStore();

    return (
        <div>
            <div className="grid grid-cols-1 gap-3 my-5 mx-2 max-w-5xl lg:mx-auto">
                {Projects.map((Project: Project) => (
                    isAuthenticated ? (
                        <PublicCard key={Project._id} project={Project} />
                    ) : (
                        <TreadingCard key={Project._id} project={Project} />
                    )
                ))}
            </div>
        </div>
    );
};

export default Feed;
