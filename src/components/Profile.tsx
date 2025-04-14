"use client"
import React from 'react';
import Link from 'next/link';
import useAuthStore from '@/Hooks/useAuthStore';
import Avatar from 'boring-avatars';
import { useRouter } from 'next/navigation';
import PrivateCard from './PrivateCard';
import { Project } from '@/constants/type';
import NoGist from './NoGist';

const Profile = ({ Projects }: { Projects: Project[] }) => {
    const { username, signout } = useAuthStore();
    const name = username?.replace('@', '') || '';
    const router = useRouter();

    const handleLogout = () => {
        signout();
        router.push("/signin");
    };

    return (
        <div className="max-w-5xl mx-auto px-4 py-14 text-white">
            {/* Header */}
            <div className="flex flex-col md:flex-row sm:items-center gap-4 md:justify-start justify-center items-center">
                <Avatar
                    name={username ?? "anonymous"}
                    variant="pixel"
                    size={100}
                    colors={["#0a0310", "#2e003e", "#7a00cc", "#ff2e9a", "#d89cff"]}
                />

                <div className="text-center md:text-left">
                    <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                        {name}
                    </h1>
                    <p className="text-lg text-gray-400 ">{username}</p>

                    <div className="mt-4 flex justify-center sm:justify-start gap-3">
                        <Link
                            href="/createGist"
                            className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-blue-600/10 border border-blue-400 text-blue-300 hover:bg-blue-600/20 transition-all duration-200"
                        >
                            <span className="font-medium">Create Gist</span>
                        </Link>
                        <button
                            onClick={handleLogout}
                            className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-gray-500/10 border border-white/20 text-white hover:bg-white/10 transition-all duration-200"
                        >
                            <span className="font-medium">Logout</span>
                        </button>
                        {/* <button
                            className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-red-500/10 border border-red-400 text-red-300 hover:bg-red-500/20 transition-all duration-200"
                        >
                            <span className="font-medium">Delete Account</span>
                        </button> */}
                    </div>
                </div>
            </div>

            {/* Gists */}
            <div className="mt-12">
                <h2 className="text-xl font-semibold mb-4 text-white flex items-center gap-3">
                    Your Gists
                    {/* Gist Count with Full Rounded Zinc Background */}
                    <span className="bg-zinc-700 text-white rounded-full w-9 h-9 text-xl font-semibold flex justify-center items-center border border-zinc-500">
                        {Projects.length}
                    </span>
                </h2>
                {(!Projects || Projects.length === 0) ? (
                    <NoGist />
                ) : (
                    <div className="grid gap-4 md:grid-cols-2">
                        {Projects.map((project: Project) => (
                            <PrivateCard key={project._id} project={project} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Profile;
