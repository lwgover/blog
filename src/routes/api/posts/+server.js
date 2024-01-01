import { fetchMarkdownPosts} from '$lib/utils';
import { json } from '@sveltejs/kit';

export const GET = async () => {
	const allPosts = await fetchMarkdownPosts();
    console.log(allPosts);
    for(let i = 0; i < allPosts.length; i++) {
        if(!('meta' in allPosts[i])){
            allPosts.splice(i, 1);
            continue;
        }
        try{
        if(!('date' in allPosts[i]['meta'])){
            allPosts[i].meta['date'] = '0-0-0'
        }
        if(('hidden' in allPosts[i]['meta'])){
            allPosts.splice(i, 1);
            continue;
        }
        }catch(e){
            allPosts.splice(i, 1);
            continue;
        }
    }
	const sortedPosts = allPosts.sort((a, b) => {
		// @ts-ignore
		return new Date(b.meta.date) - new Date(a.meta.date);
	});

	return json(sortedPosts);
};