import { error } from '@sveltejs/kit';
//Ideally, we’d wrap this all in a try/catch block in case something went wrong, but this is the minimal working model.
// @ts-ignore
export async function load({ params }) {
	const post = await import(`../${params.slug}.md`);
	const { title, date } = post.metadata;
	const Content = post.default;

	if (!post) {
		throw error(404, {
			message: 'Not found'
		});
	}

	return {
		Content,
		title,
		date
	};
}