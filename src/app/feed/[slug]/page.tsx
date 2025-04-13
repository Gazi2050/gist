'use client';
import ErrorComponent from '@/components/ErrorComponent';
import GistDetails from '@/components/GistDetails';
import Loading from '@/components/Loading';
import NoGist from '@/components/NoGist';
import { fetchSingleGists } from '@/utils/fetchSIngleGist';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';

const Page = () => {
    const { slug: id } = useParams();
    const { data: projects, isLoading, isError, error } = useQuery({
        queryKey: ['singleGist', id],
        queryFn: () => fetchSingleGists(id),
    });

    if (isLoading) return <Loading />;
    if (isError) return <ErrorComponent errorMessage={error?.message} />;
    if (!projects || Object.keys(projects).length === 0) return <NoGist />;
    return (
        <GistDetails projects={projects} />
    );
};

export default Page;