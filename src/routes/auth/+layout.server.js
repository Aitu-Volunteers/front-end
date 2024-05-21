import { redirect } from '@sveltejs/kit';

export const load = async ({ cookies }) => {
    if (cookies.get("id_token")) {
        throw redirect(303, "/");
    }
}