import { Project } from "@/constants/type";

export const submitGist = async (projectData: Project) => {
    try {

        const response = await fetch('/api/gists', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(projectData),
        });

        if (!response.ok) {
            throw new Error(`Failed to post gist: ${response.statusText}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error posting gist:', error);
        throw error;
    }
};
