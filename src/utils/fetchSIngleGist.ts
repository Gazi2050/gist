import { ParamValue } from "next/dist/server/request/params";

export async function fetchSingleGists(id: ParamValue) {
    try {
        const response = await fetch(`/api/gists/${id}`)
        if (!response.ok) {
            console.error("Fetch failed:", response.status, response.statusText);
            throw new Error("Network response was not ok");
        }
        const gists = await response.json();
        // console.log("Fetched gist:", gists);
        return gists || {};
    } catch (error) {
        console.error("Error fetching gist:", error);
        return null;
    }
}