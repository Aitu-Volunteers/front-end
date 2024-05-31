import { API_HOST_URL } from '$env/static/private';

export const load = async ({ parent, cookies }) => {
    await parent();

    const response = await fetch(`${API_HOST_URL}/api/v1/event`, {
        method: "GET",
        mode: "cors",
        headers: {
            "Authorization": `Bearer ${cookies.get("id_token")}`
        }
    });
    if (!response.ok) {
        // Handle error
        throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    return { events: data };
}