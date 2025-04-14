import { Code, Eye, Share2, Sliders, Star, Users } from "lucide-react";
import { LanguageExtensions } from "./type";

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
        question: "How can I share my code?",
        answer:
            "To share your code, simply create a new gist, paste your code snippet, add a brief description, and click 'Create Gist.' You'll then receive a unique link that you can share anywhere.",
    },
    {
        question: "Which programming languages are supported in gists?",
        answer:
            "Gists support a wide range of programming languages, including JavaScript, Python, Java, and many others.",
    },
    {
        question: "Can I edit my gist after it's been created?",
        answer:
            "Yes, you can update your gist at any time. Just open it, make your changes, and click 'Save.' The shared link will remain unchanged.",
    },
    {
        question: "Do I need an account to create or view gists?",
        answer:
            "You can view gists without an account, but to create, edit, or manage your own gists, you'll need to sign in.",
    },
    {
        question: "Can others interact with my gists?",
        answer:
            "Yes! You can track how many people have viewed your gist via the view count. If someone appreciates your code, they can star your gist—an easy way to show their support.",
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

export const languageExtensions: LanguageExtensions = {
    JavaScript: 'js',
    Python: 'py',
    Java: 'java',
    'C#': 'cs',
    'C++': 'cpp',
    TypeScript: 'ts',
    Go: 'go',
    Rust: 'rs',
    Kotlin: 'kt',
    Swift: 'swift',
};
