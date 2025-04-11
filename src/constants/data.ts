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

export const faqs = [
    {
        question: "How do I share my code?",
        answer:
            "To share your code, just create a new gist, paste your code snippet, write a brief description, and click 'Create'. You'll immediately get a link that you can share anywhere.",
    },
    {
        question: "Is my code private or public?",
        answer:
            "You decide! Gists can be either public or private. Public gists are visible to anyone and can be discovered by others, while private gists are only accessible to you or those you share the link with.",
    },
    {
        question: "Can I edit a gist after creating it?",
        answer:
            "Yes, you can update your gist at any time. Just open it, make your changes, and hit 'Save'—your shared link stays the same.",
    },
    {
        question: "Do I need an account to create or view gists?",
        answer:
            "You can view public gists without an account, but you'll need to sign in to create, edit, or manage your own gists.",
    },
    {
        question: "Can other people react to my gists?",
        answer:
            "Yes! You can see how many people have viewed your gist through the view count. If someone likes your code, they can star it—it's a simple way to show appreciation.",
    }
];

export const AuthFormFields = {
    username: {
        label: "Username",
        placeholder: "@username",
        validation: {
            required: "Username is required",
            pattern: {
                value: /^@[\w]+$/,
                message: "Username must start with @",
            },
        },
    },
    email: {
        label: "Email address",
        placeholder: "you@example.com",
        validation: {
            required: "Email is required",
            pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address",
            },
        },
    },
    password: {
        label: "Password",
        placeholder: "••••••••",
        validation: {
            required: "Password is required",
            validate: {
                hasUpperCase: (value: string) =>
                    /[A-Z]/.test(value) || "At least one uppercase letter required",
                hasLowerCase: (value: string) =>
                    /[a-z]/.test(value) || "At least one lowercase letter required",
                hasNumber: (value: string) =>
                    /\d/.test(value) || "At least one number required",
                hasSpecialChar: (value: string) =>
                    /[@#$%&]/.test(value) || "At least one special character (@#$%&) required",
                hasMinLength: (value: string) =>
                    value.length >= 8 || "Minimum 8 characters required",
            },
        },
    },
};