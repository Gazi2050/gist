import { Code, Eye, Share2, Sliders, Star, Users } from "lucide-react";

export const featureList = [
    {
        title: 'Code Formatting',
        description: 'Automatically format your code to improve readability and structure.',
        icon: Code,
    },
    {
        title: 'Instant Sharing',
        description: 'Create and share code snippets in seconds. Get a shareable link instantly.',
        icon: Share2,
    },
    {
        title: 'Community',
        description: 'Engage with a vibrant community of developers. Share knowledge, get feedback, and grow together.',
        icon: Users,
    },
];

export const trendingProjects = [
    {
        title: "React Custom Hook Collection",
        description: "A collection of useful React hooks for handling common UI patterns and state management",
        language: "TypeScript",
        username: "reactdev",
        stars: 1245,
        views: 5243,
        timeAgo: "2 days ago",
    },
    {
        title: "Python Data Visualization Toolkit",
        description: "Comprehensive toolkit for creating beautiful data visualizations with Python",
        language: "Python",
        username: "datascientist",
        stars: 989,
        views: 3876,
        timeAgo: "1 week ago",
    },
    {
        title: "Modern CSS Grid Layouts",
        description: "Ready-to-use CSS Grid layout templates for modern web applications",
        language: "CSS",
        username: "frontendwizard",
        stars: 712,
        views: 2567,
        timeAgo: "3 days ago",
    },
];

export const editorFeature = [
    {
        icon: Sliders,
        title: "Code Formatting",
        description: "Click to automatically format your code, ensuring proper indentation, spacing, and readability for easier maintenance and collaboration.",
        color: '#a78bfa'
    },
    {
        icon: Star,
        title: "Stars",
        description: "Rate your code with a star system to indicate its quality or popularity within the developer community, helping others find top-rated solutions.",
        color: '#facc15'
    },
    {
        icon: Eye,
        title: "View Count",
        description: "Keep track of how often your code is viewed by others, providing insight into its relevance and reach within the developer community.",
        color: '#4ade80'
    },
];