export const getFileExtension = (lang: string) => ({
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
}[lang] ?? 'txt');