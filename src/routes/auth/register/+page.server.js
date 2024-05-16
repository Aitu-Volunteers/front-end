import { redirect } from '@sveltejs/kit';
import { API_HOST_URL } from '$env/static/private';


export const load = async ({ parent, fetch, url }) => {
    await parent();

    let code = url.searchParams.get('code');
    console.log(code);
    // const res = await fetch(`${API_HOST_URL}/api/v1/auth/login?code=${code}`);
}