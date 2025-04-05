export const getLineNumbers = (code) => {
    const lines = code.split('\n').length || 1;
    return Array.from({ length: lines }, (_, i) => i + 1).join('\n');
};