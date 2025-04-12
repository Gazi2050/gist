"use client"
import React from 'react';
import { Star, Eye } from 'lucide-react';
import Link from 'next/link';
import useAuthStore from '@/Hooks/useAuthStore';
import Avatar from 'boring-avatars';
import { useRouter } from 'next/navigation';

const Profile = () => {
    const { username, signout } = useAuthStore();
    const name = username?.replace('@', '') || '';
    const router = useRouter();

    const handleLogout = () => {
        signout();
        router.push("/signin");
    };
    const repositories = [
        {
            name: 'hello-world',
            description: 'My first GitHub repo.',
            language: 'JavaScript',
            stars: 42,
            views: 1280,
        },
        {
            name: 'octo-app',
            description: 'Automates octopus tasks. Don’t ask.',
            language: 'TypeScript',
            stars: 100,
            views: 3001,
        },
        {
            name: 'tailwind-profile',
            description: 'Minimal UI with Tailwind & React.',
            language: 'CSS',
            stars: 68,
            views: 2219,
        },
        {
            name: 'catnip-cli',
            description: 'CLI for Octocats who love automation.',
            language: 'Go',
            stars: 24,
            views: 980,
        },
    ];

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
                            href="/"
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
                        <button
                            className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-red-500/10 border border-red-400 text-red-300 hover:bg-red-500/20 transition-all duration-200"
                        >
                            <span className="font-medium">Delete Account</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Gists */}
            <div className="mt-12">
                <h2 className="text-xl font-semibold mb-4 text-white flex items-center gap-3">
                    Your Gists
                    {/* Gist Count with Full Rounded Zinc Background */}
                    <span className="bg-zinc-700 text-white rounded-full w-9 h-9 text-xl font-semibold flex justify-center items-center border border-zinc-500">
                        {repositories.length}
                    </span>
                </h2>
                <div className="grid gap-4 sm:grid-cols-2">
                    {repositories.map((repo, idx) => (
                        <div
                            key={idx}
                            className="bg-white/5 border border-white/10 rounded-lg p-4 hover:border-white/20 transition"
                        >
                            <div className="flex justify-between items-start">
                                <h3 className="font-medium text-blue-400 hover:underline cursor-pointer">
                                    {repo.name}
                                </h3>
                                <div className="flex items-center gap-1 text-xs text-yellow-400">
                                    <Star size={20} className="w-4 h-4" />
                                    <span className="font-semibold text-base">{repo.stars}</span>
                                </div>
                            </div>
                            <p className="text-sm text-gray-300 mt-1">{repo.description}</p>
                            <div className="flex justify-between items-center mt-3 text-xs text-gray-400">
                                <span className="italic">{repo.language}</span>
                                <div className="flex items-center gap-1">
                                    <Eye size={20} className="text-violet-500" />
                                    <span className="font-semibold text-sm">{repo.views.toLocaleString()}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Profile;
