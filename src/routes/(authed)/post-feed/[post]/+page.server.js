import { API_HOST_URL } from '$env/static/private';

export const load = async ({ parent, cookies, params }) => {
    await parent();

    const response = await fetch(`${API_HOST_URL}/api/v1/post`, {
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
    //Get posts
    const posts = await response.json();
    //Get post by ID from slug
    let post;
    posts.forEach(element => {
        if (element.id == params.post) {
            post = element.postInfo;
        }
    });
    //Get last 2 posts 
    let postsInfo = [];
    for (let i = posts.length - 1; i > -1; i--) {
        postsInfo.push({
            id: posts[i].id,
            title: posts[i].postInfo.title,
            date: posts[i].postInfo.createDate
        }); 
        if (postsInfo.length === 2) {
            break;
        }
    }
    return {
        props: {
            post: post,
            posts: postsInfo
        }
    };
}