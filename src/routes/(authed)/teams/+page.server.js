// import { error } from '@sveltejs/kit';
import { API_HOST_URL } from '$env/static/private';

export const load = async ({ parent, cookies }) => {
	// error(404, {
	// 	message: 'Not found'
	// });
	await parent();

    //Get Teams
	const responseTeams = await fetch(`${API_HOST_URL}/api/v1/team`, {
        method: "GET",
        mode: "cors",
        headers: {
            "Authorization": `Bearer ${cookies.get("id_token")}`
        }
    });
    if (!responseTeams.ok) {
        // Handle error
        throw new Error('Failed to fetch data');
    }
    const teams = await responseTeams.json();
	
    //!TEMPORARLY! WAITING FOR BACKEND SOLUTION
    //Get Authorized User 
    const responseUser = await fetch(`${API_HOST_URL}/api/v1/user/authorized`, {
        method: "POST",
        mode: "cors",
        headers: {
            "Authorization": `Bearer ${cookies.get("id_token")}`
        }
    });
    if (!responseUser.ok) {
        // Handle error
        throw new Error('Failed to fetch data');
    }
    const user = await responseUser.json();

    let part;
    if (user?.team) {
        part = teams.findIndex(team => 
            team.members.some(member => member.id === user.id)
        );
    }
    return {data: [teams, part]}
}