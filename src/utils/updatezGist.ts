import { UpdateGistType } from "@/constants/type";

export const updateGist = async (projectData: UpdateGistType) => {
    const id = projectData?._id
    try {
        const response = await fetch(`/api/userGists/${id}`, {
            method: 'PUT',
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