export const calculateLineWidth = (text: string) => {
    const lines = text.split('\n').length;
    const maxLength = (lines + "").length;
    return `${maxLength * (maxLength === 1 ? 35 : maxLength === 2 ? 20 : 15)}px`;
};