import { UserType } from "@/constants/type";


export async function fetchUserGists(username: UserType) {
    const name = username?.username;
    try {
        const response = await fetch(`/api/userGists?username=${name}`)
        if (!response.ok) {
            console.error("Fetch failed:", response.status, response.statusText);
            throw new Error("Network response was not ok");
        }
        const gists = await response.json();
        // console.log("Fetched gists:", gists);
        return gists || [];
    } catch (error) {
        console.error("Error fetching gists:", error);
        return null;
    }
}