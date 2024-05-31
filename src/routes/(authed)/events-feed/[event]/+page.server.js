import { API_HOST_URL } from '$env/static/private';

export const load = async ({ parent, cookies, params }) => {
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
    let event;
    data.forEach(element => {
        if (element.id == params.event) {
            event = element;
        }
    });
    return {
        event: event
    };
}