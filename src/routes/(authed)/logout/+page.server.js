import { redirect } from '@sveltejs/kit';

export const actions = {
	default: ({ cookies }) => {
		cookies.delete('id_token', { path: '/' });
		throw redirect(303, '/');
	}
};
