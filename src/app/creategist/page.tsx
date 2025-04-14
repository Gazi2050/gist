'use client';

import GistForm from "@/components/GistForm";
import { GistFormType } from "@/constants/type";
import useAuthStore from "@/Hooks/useAuthStore";
import { submitGist } from "@/utils/submitGist";
import moment from "moment";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

const Page = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [language, setLanguage] = useState('');
    const [code, setCode] = useState('');
    const [loading, setLoading] = useState(false); // 👈 Loading state

    const { username } = useAuthStore();
    const router = useRouter();
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        setLoading(true);

        const projectData: GistFormType = {
            title,
            description,
            username,
            language,
            code,
            stars: [],
            views: [],
            createdAt: moment().toISOString(),
        };

        submitGist(projectData)
            .then(() => {
                toast.success('Your gist has been posted successfully!');
                router.push('/feed');
                setTitle('');
                setDescription('');
                setLanguage('');
                setCode('');
            })
            .catch((error) => {
                console.error('Error submitting gist:', error);
                toast.error(error.message);
            })
            .finally(() => setLoading(false));
    };

    const formState = { title, setTitle, description, setDescription, language, setLanguage, code, setCode, handleSubmit, loading }
    return (
        <GistForm formState={formState} />
    );
};

export default Page;