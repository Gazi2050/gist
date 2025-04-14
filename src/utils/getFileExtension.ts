import { languageExtensions } from "@/constants/data";

export const getFileExtension = (lang: string) => {
    return languageExtensions[lang] ?? 'txt';
};
