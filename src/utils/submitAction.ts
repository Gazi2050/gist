import { ActionParams } from "@/constants/type";

export async function submitAction(params: ActionParams): Promise<void> {
    try {
        const response = await fetch(`/api/gists/${params.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: params.username,
                action: params.action,
            }),
        });

        if (!response.ok) {
            const error = await response.json();
            console.error("Failed to submit action:", error.message);
        } else {
            // console.log(`Action "${params.action}" submitted successfully.`)
        }
    } catch (error) {
        console.error("Error submitting action:", error);
    }
}
