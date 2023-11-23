// @ts-ignore
//Ideally, we’d wrap this all in a try/catch block in case something went wrong, but this is the minimal working model.
export async function load({ params }) {
	const post = await import(`../${params.slug}.md`);
	const { title, date } = post.metadata;
	const Content = post.default;

	return {
		Content,
		title,
		date
	};
}