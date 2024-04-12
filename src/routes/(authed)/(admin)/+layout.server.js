import { redirect } from '@sveltejs/kit'

export const load = async ({ parent, cookies }) => {
    await parent();
    
    if (cookies.get("admin")) {
        throw redirect(303, "/");
    }
}