import { error } from '@sveltejs/kit';
//Ideally, we’d wrap this all in a try/catch block in case something went wrong, but this is the minimal working model.
// @ts-ignore
export async function load({ params, fetch}) {
	const response = await fetch(`/api/posts`);
	const posts = await response.json();

	const post = await import(`../${params.slug}.md`);
	const { title, date, length, image } = post.metadata;
	const Content = post.default;
	console.log(Content);

	if (!post) {
		throw error(404, {
			message: 'Not found'
		});
	}

	return {
		Content,
		title,
		date,
		length,
		image,
		posts
	};
}
