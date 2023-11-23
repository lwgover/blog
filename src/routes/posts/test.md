---
title: Post One
date: '2021-12-14'
---

Hello, I am _Post One._

**Nice to meet you!**

```js
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
```