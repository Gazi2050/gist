'use client'
import ErrorComponent from '@/components/ErrorComponent';
import Loading from '@/components/Loading';
import Profile from '@/components/Profile';
import useAuthStore from '@/Hooks/useAuthStore';
import { fetchUserGists } from '@/utils/fetchUserGist';
import { useQuery } from '@tanstack/react-query';
const Page = () => {
    const { username } = useAuthStore()
    const { data: Projects, isLoading, isError, error } = useQuery({ queryKey: ["userGists"], queryFn: () => fetchUserGists({ username }) });

    if (isLoading) {
        return <Loading />;
    }

    if (isError) {
        return <ErrorComponent errorMessage={error?.message} />;
    }
    return (
        <Profile Projects={Projects} />
    );
};

export default Page;