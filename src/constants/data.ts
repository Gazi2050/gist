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
            "It's up to you! Gists can be public or private. Public gists are visible to everyone and can be discovered by others. Private gists, on the other hand, are only accessible to you.",
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
                hasUpperCase: (value: string | undefined) =>
                    (value && /[A-Z]/.test(value)) || "At least one uppercase letter required",
                hasLowerCase: (value: string | undefined) =>
                    (value && /[a-z]/.test(value)) || "At least one lowercase letter required",
                hasNumber: (value: string | undefined) =>
                    (value && /\d/.test(value)) || "At least one number required",
                hasSpecialChar: (value: string | undefined) =>
                    (value && /[@#$%&]/.test(value)) || "At least one special character (@#$%&) required",
                hasMinLength: (value: string | undefined) =>
                    (value && value.length >= 8) || "Minimum 8 characters required",
            },
        },
    },
};

export const languages = [
    "JavaScript",
    "Python",
    "Java",
    "C#",
    "C++",
    "TypeScript",
    "Go",
    "Rust",
    "Kotlin",
    "Swift"
];

export const functionKeywords = [
    "function",   // JavaScript
    "def",        // Python
    "void",       // Java
    "void",       // C#
    "void",       // C++
    "function",   // TypeScript
    "func",       // Go
    "fn",         // Rust
    "fun",        // Kotlin
    "func"        // Swift
];


export const initialCode = `function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    }
  
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
  
    return result;
  }`;



export const Projects = [
    {
        _id: "1",
        title: "Modern CSS Grid Layouts",
        description: "A modern UI kit built with Tailwind CSS",
        language: "Vue",
        username: "datascientist",
        stars: ['user1', 'user2', 'user1'],
        views: ['user1', 'user2', 'user1'],
        createdAt: "7 days ago"
    },
    {
        _id: "2",
        title: "Django Authentication System",
        description: "A modern UI kit built with Tailwind CSS",
        language: "C++",
        username: "nodeking",
        stars: ['user1', 'user2', 'user1'],
        views: ['user1', 'user2', 'user1'],
        createdAt: "1 days ago"
    },
    {
        _id: "3",
        title: "Python Data Visualization Toolkit",
        description: "A boilerplate for building scalable Node.js REST APIs",
        language: "Go",
        username: "flaskfan",
        stars: ['user1', 'user2', 'user1'],
        views: ['user1', 'user2', 'user1'],
        createdAt: "24 days ago"
    },
    {
        _id: "4",
        title: "Modern CSS Grid Layouts",
        description: "Comprehensive toolkit for creating beautiful data visualizations with Python",
        language: "Go",
        username: "uxdesigner",
        stars: ['user1', 'user2', 'user1'],
        views: ['user1', 'user2', 'user1'],
        createdAt: "14 days ago"
    },
    {
        _id: "5",
        title: "Python Data Visualization Toolkit",
        description: "Animated components and transitions for Vue.js apps",
        language: "JavaScript",
        username: "flaskfan",
        stars: ['user1', 'user2', 'user1'],
        views: ['user1', 'user2', 'user1'],
        createdAt: "9 days ago"
    },
    {
        _id: "6",
        title: "Next.js SEO Components",
        description: "A modern UI kit built with Tailwind CSS",
        language: "Rust",
        username: "phpwizard",
        stars: ['user1', 'user2', 'user1'],
        views: ['user1', 'user2', 'user1'],
        createdAt: "5 days ago"
    },
    {
        _id: "7",
        title: "Python Data Visualization Toolkit",
        description: "Animated components and transitions for Vue.js apps",
        language: "CSS",
        username: "backendguru",
        stars: ['user1', 'user2', 'user1'],
        views: ['user1', 'user2', 'user1'],
        createdAt: "26 days ago"
    },
    {
        _id: "8",
        title: "Vue.js Animation Components",
        description: "Comprehensive toolkit for creating beautiful data visualizations with Python",
        language: "Ruby",
        username: "reactdev",
        stars: ['user1', 'user2', 'user1'],
        views: ['user1', 'user2', 'user1'],
        createdAt: "28 days ago"
    },
    {
        _id: "9",
        title: "Modern CSS Grid Layouts",
        description: "A boilerplate for building scalable Node.js REST APIs",
        language: "C++",
        username: "reactdev",
        stars: ['user1', 'user2', 'user1'],
        views: ['user1', 'user2', 'user1'],
        createdAt: "6 days ago"
    },
    {
        _id: "10",
        title: "Flask API Framework",
        description: "Comprehensive toolkit for creating beautiful data visualizations with Python",
        language: "PHP",
        username: "datascientist",
        stars: ['user1', 'user2', 'user1'],
        views: ['user1', 'user2', 'user1'],
        createdAt: "27 days ago"
    },
    {
        _id: "11",
        title: "Modern CSS Grid Layouts",
        description: "A boilerplate for building scalable Node.js REST APIs",
        language: "Vue",
        username: "rustacean",
        stars: ['user1', 'user2', 'user1'],
        views: ['user1', 'user2', 'user1'],
        createdAt: "9 days ago"
    },
    {
        _id: "12",
        title: "React Custom Hook Collection",
        description: "Minimalist framework for building REST APIs with Flask",
        language: "CSS",
        username: "flaskfan",
        stars: ['user1', 'user2', 'user1'],
        views: ['user1', 'user2', 'user1'],
        createdAt: "19 days ago"
    },
    {
        _id: "13",
        title: "Modern CSS Grid Layouts",
        description: "Reusable components for SEO-friendly Next.js apps",
        language: "PHP",
        username: "datascientist",
        stars: ['user1', 'user2', 'user1'],
        views: ['user1', 'user2', 'user1'],
        createdAt: "8 days ago"
    },
    {
        _id: "14",
        title: "Node.js REST API Boilerplate",
        description: "Comprehensive toolkit for creating beautiful data visualizations with Python",
        language: "Go",
        username: "nodeking",
        stars: ['user1', 'user2', 'user1'],
        views: ['user1', 'user2', 'user1'],
        createdAt: "3 days ago"
    },
    {
        _id: "15",
        title: "React Custom Hook Collection",
        description: "Reusable components for SEO-friendly Next.js apps",
        language: "JavaScript",
        username: "frontendwizard",
        stars: ['user1', 'user2', 'user1'],
        views: ['user1', 'user2', 'user1'],
        createdAt: "15 days ago"
    },
    {
        _id: "16",
        title: "Tailwind CSS UI Kit",
        description: "User authentication and authorization system built with Django",
        language: "Python",
        username: "phpwizard",
        stars: ['user1', 'user2', 'user1'],
        views: ['user1', 'user2', 'user1'],
        createdAt: "1 days ago"
    },
    {
        _id: "17",
        title: "Rust CLI Toolset",
        description: "Animated components and transitions for Vue.js apps",
        language: "Python",
        username: "flaskfan",
        stars: ['user1', 'user2', 'user1'],
        views: ['user1', 'user2', 'user1'],
        createdAt: "22 days ago"
    },
    {
        _id: "18",
        title: "Next.js SEO Components",
        description: "Animated components and transitions for Vue.js apps",
        language: "PHP",
        username: "flaskfan",
        stars: ['user1', 'user2', 'user1'],
        views: ['user1', 'user2', 'user1'],
        createdAt: "11 days ago"
    },
    {
        _id: "19",
        title: "Vue.js Animation Components",
        description: "Animated components and transitions for Vue.js apps",
        language: "Vue",
        username: "reactdev",
        stars: ['user1', 'user2', 'user1'],
        views: ['user1', 'user2', 'user1'],
        createdAt: "15 days ago"
    },
    {
        _id: "20",
        title: "React Custom Hook Collection",
        description: "Comprehensive toolkit for creating beautiful data visualizations with Python",
        language: "JavaScript",
        username: "uxdesigner",
        stars: ['user1', 'user2', 'user1'],
        views: ['user1', 'user2', 'user1'],
        createdAt: "18 days ago"
    },
    {
        _id: "21",
        title: "Node.js REST API Boilerplate",
        description: "Comprehensive toolkit for creating beautiful data visualizations with Python",
        language: "C++",
        username: "phpwizard",
        stars: ['user1', 'user2', 'user1'],
        views: ['user1', 'user2', 'user1'],
        createdAt: "20 days ago"
    },
    {
        _id: "22",
        title: "Vue.js Animation Components",
        description: "Minimalist framework for building REST APIs with Flask",
        language: "Rust",
        username: "flaskfan",
        stars: ['user1', 'user2', 'user1'],
        views: ['user1', 'user2', 'user1'],
        createdAt: "28 days ago"
    },
    {
        _id: "23",
        title: "Tailwind CSS UI Kit",
        description: "Animated components and transitions for Vue.js apps",
        language: "CSS",
        username: "frontendwizard",
        stars: ['user1', 'user2', 'user1'],
        views: ['user1', 'user2', 'user1'],
        createdAt: "10 days ago"
    },
    {
        _id: "24",
        title: "Django Authentication System",
        description: "A collection of useful React hooks for handling common UI patterns and state management",
        language: "C++",
        username: "rustacean",
        stars: ['user1', 'user2', 'user1'],
        views: ['user1', 'user2', 'user1'],
        createdAt: "23 days ago"
    },
    {
        _id: "25",
        title: "Flask API Framework",
        description: "Animated components and transitions for Vue.js apps",
        language: "JavaScript",
        username: "flaskfan",
        stars: ['user1', 'user2', 'user1'],
        views: ['user1', 'user2', 'user1'],
        createdAt: "7 days ago"
    },
    {
        _id: "26",
        title: "Node.js REST API Boilerplate",
        description: "Minimalist framework for building REST APIs with Flask",
        language: "C++",
        username: "reactdev",
        stars: ['user1', 'user2', 'user1'],
        views: ['user1', 'user2', 'user1'],
        createdAt: "2 days ago"
    },
    {
        _id: "27",
        title: "React Custom Hook Collection",
        description: "Comprehensive toolkit for creating beautiful data visualizations with Python",
        language: "CSS",
        username: "flaskfan",
        stars: ['user1', 'user2', 'user1'],
        views: ['user1', 'user2', 'user1'],
        createdAt: "17 days ago"
    },
    {
        _id: "28",
        title: "Rust CLI Toolset",
        description: "Comprehensive toolkit for creating beautiful data visualizations with Python",
        language: "Go",
        username: "rustacean",
        stars: ['user1', 'user2', 'user1'],
        views: ['user1', 'user2', 'user1'],
        createdAt: "4 days ago"
    },
    {
        _id: "29",
        title: "Next.js SEO Components",
        description: "A boilerplate for building scalable Node.js REST APIs",
        language: "C++",
        username: "flaskfan",
        stars: ['user1', 'user2', 'user1'],
        views: ['user1', 'user2', 'user1'],
        createdAt: "19 days ago"
    },
    {
        _id: "30",
        title: "React Custom Hook Collection",
        description: "Animated components and transitions for Vue.js apps",
        language: "Rust",
        username: "datascientist",
        stars: ['user1', 'user2', 'user1'],
        views: ['user1', 'user2', 'user1'],
        createdAt: "29 days ago"
    },

];
