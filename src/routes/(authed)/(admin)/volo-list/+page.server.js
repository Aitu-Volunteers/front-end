import { API_HOST_URL } from '$env/static/private';

export const load = async ({ parent, cookies }) => {
    await parent();

    const res = await fetch(`${API_HOST_URL}/api/v1/user/`, {
        method: "GET",
        mode: "cors",
        headers: {
            "Authorization": `Bearer ${cookies.get("id_token")}`
        }
    });

    const data = await res.json();

    return { users: data }
}