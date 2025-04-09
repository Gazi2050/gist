import { Clock, Eye, GitFork, Star } from 'lucide-react';
import React from 'react';

const TrendingProjects = () => {
    const trendingProjects = [
        {
            title: "React Custom Hook Collection",
            description: "A collection of useful React hooks for handling common UI patterns and state management",
            language: "TypeScript",
            author: "reactdev",
            stars: 1245,
            forks: 257,
            views: 5243,
            timeAgo: "2 days ago",
        },
        {
            title: "Python Data Visualization Toolkit",
            description: "Comprehensive toolkit for creating beautiful data visualizations with Python",
            language: "Python",
            author: "datascientist",
            stars: 989,
            forks: 142,
            views: 3876,
            timeAgo: "1 week ago",
        },
        {
            title: "Modern CSS Grid Layouts",
            description: "Ready-to-use CSS Grid layout templates for modern web applications",
            language: "CSS",
            author: "frontendwizard",
            stars: 712,
            forks: 198,
            views: 2567,
            timeAgo: "3 days ago",
        },
    ]

    return (
        <section id="trending" className="py-16 md:py-24">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-3xl font-bold">Trending Projects</h2>
                    <a href="#" className="text-violet-400 hover:underline">
                        View all
                    </a>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {trendingProjects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-violet-500 transition-colors"
                        >
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-3">
                                    <h3 className="font-bold text-xl">{project.title}</h3>
                                    <span className="px-2 py-1 rounded-full bg-gray-800 text-xs">{project.language}</span>
                                </div>
                                <p className="text-gray-400 mb-4">{project.description}</p>
                                <div className="flex items-center text-sm text-gray-400 mb-4">
                                    <span className="mr-4">@{project.author}</span>
                                    <span className="flex items-center">
                                        <Clock className="h-4 w-4 mr-1" />
                                        {project.timeAgo}
                                    </span>
                                </div>
                                <div className="flex justify-between text-sm text-gray-400 pt-4 border-t border-gray-700">
                                    <div className="flex items-center">
                                        <Star className="h-4 w-4 mr-1 text-violet-400" />
                                        <span>{project.stars}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <GitFork className="h-4 w-4 mr-1 text-violet-400" />
                                        <span>{project.forks}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <Eye className="h-4 w-4 mr-1 text-violet-400" />
                                        <span>{project.views}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    );
};

export default TrendingProjects;