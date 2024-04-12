// import { error } from '@sveltejs/kit';

export const load = async ({ parent }) => {
	// error(404, {
	// 	message: 'Not found'
	// });
	await parent();
}