"use client"

import PublicCard from "./PublicCard";
import { useQuery } from "@tanstack/react-query";
import { fetchGists } from "@/utils/fetchGists";
import { Project } from "@/constants/type";
import Loading from "./Loading";
import NoGist from "./NoGist";
import ErrorComponent from "./ErrorComponent";

const Feed = () => {
    const { data: Projects, isLoading, isError, error, } = useQuery(
        {
            queryKey: ["gists"],
            queryFn: fetchGists,
            refetchInterval: 1000,
        });

    if (isLoading) {
        return <Loading />;
    }

    if (isError) {
        return <ErrorComponent errorMessage={error?.message} />;
    }
    if (!Projects || Projects.length === 0) {
        return <NoGist />;
    }

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
