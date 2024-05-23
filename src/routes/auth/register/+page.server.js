import { redirect } from '@sveltejs/kit';
import { API_HOST_URL } from '$env/static/private';


export const load = async ({ parent, fetch, url, cookies }) => {
    await parent();

    let code = url.searchParams.get('code');
    const res = await fetch(`${API_HOST_URL}/api/v1/auth/login?code=${code}`, {
        method: "POST",
        mode: "cors",
    });
    const data = await res.json();
    
    const res1 = await fetch(`${API_HOST_URL}/api/v1/user/certificate`, {
        method: "GET",
        mode: "cors",
        headers: {
            "Authorization": `Bearer ${data.id_token}`
        }
    });
    const data1 = await res1.json();
    
    cookies.set(
        "id_token",
        data.id_token, {
            path: "/",
            httpOnly: true,
            maxAge: 3600
        }
    );

    if (data1 === "Not registered") {
        console.log("not registered");
    } else {
        redirect(303, "/");
    }
}

export const actions = {
    default: async ({ request, cookies }) => {
        const data = await request.formData();
        
        let user_data = {
            "firstname": data.get("name"),
            "lastname": data.get("surname"),
            "gender": data.get("gender"),
            "phone": data.get("phone"),
            "kazakh": 6,
            "russian": 6,
            "english": 3,
            "group": data.get("group"),
            "telegram": data.get("tag"),
            "iin": data.get("IIN"),
        }
        
        if (data.get("add-lang")) {
            user_data["additionalLanguage"] = data.get("add-lang");
        }

        const res = await fetch(`${API_HOST_URL}/api/v1/auth/registration`, {
            method: "POST",
            mode: "cors",
            headers: {
                Authorization: `Bearer ${cookies.get("id_token")}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user_data)
        });
        const result_data = await res.json();

        if (result_data.id) {
            console.log("successfully registered");
            redirect(303, "/");
        } else {
            cookies.delete("id_token", { path: "/" });
        }

        return {
            success: false,
        }
    }
};