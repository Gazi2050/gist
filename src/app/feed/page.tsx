"use client"
import ErrorComponent from '@/components/ErrorComponent';
import Feed from '@/components/Feed';
import Loading from '@/components/Loading';
import NoGist from '@/components/NoGist';
import { fetchGists } from '@/utils/fetchGists';
import { useQuery } from '@tanstack/react-query';

const Page = () => {
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
        <Feed Projects={Projects} />
    );
};

export default Page;