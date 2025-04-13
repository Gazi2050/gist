
export async function fetchGists() {
    try {
        const response = await fetch('/api/gists')
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