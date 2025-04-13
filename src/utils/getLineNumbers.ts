export const getLineNumbers = (text: string) => {
    const lines = text.split('\n').length;
    return Array.from({ length: lines }, (_, i) => (i + 1).toString()).join('\n');
};