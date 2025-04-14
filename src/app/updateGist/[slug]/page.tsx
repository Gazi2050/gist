'use client';
import { useEffect, useState } from 'react';
import ErrorComponent from '@/components/ErrorComponent';
import GistForm from '@/components/GistForm';
import Loading from '@/components/Loading';
import { fetchUserSingleGists } from '@/utils/fetchUserSingleGists';
import { useQuery } from '@tanstack/react-query';
import { useParams, useRouter } from 'next/navigation';
import moment from 'moment';
import { toast } from 'sonner';
import { updateGist } from '@/utils/updateGist';

const Page = () => {
    const { slug: id } = useParams();
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['singleGist', id],
        queryFn: () => fetchUserSingleGists(id),
    });

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [language, setLanguage] = useState('');
    const [code, setCode] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if (data) {
            setTitle(data.title || '');
            setDescription(data.description || '');
            setLanguage(data.language || '');
            setCode(data.code || '');
        }
    }, [data]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const updatedData = {
            _id: id,
            title,
            description,
            language,
            code,
            updatedAt: moment().toISOString(),
        };
        console.log(updatedData);
        updateGist(updatedData)
            .then(() => {
                toast.success('Gist updated successfully');
                router.push('/profile');
                setTitle('');
                setDescription('');
                setLanguage('');
                setCode('');
            })
            .catch((err) => {
                console.error('Failed to update gist:', err);
                toast.error(err.message);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    const formState = {
        title,
        setTitle,
        description,
        setDescription,
        language,
        setLanguage,
        code,
        setCode,
        handleSubmit,
        loading,
    };

    if (isLoading) return <Loading />;
    if (isError) return <ErrorComponent errorMessage={error?.message} />;

    return <GistForm formState={formState} action="update" />;
};

export default Page;
