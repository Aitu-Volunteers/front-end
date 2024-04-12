import { redirect } from '@sveltejs/kit';

export const load = async ({ cookies }) => {
    if (cookies.get("logged_in")) {
        throw redirect(303, "/");
    }
}