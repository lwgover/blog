<script>
	import '$lib/styles/article.css';
	import Seo from "$lib/Seo.svelte";
	import Header from '$lib/Header.svelte'
	export let data;
	const { title, date, Content } = data;
</script>

<Seo title={"Lucas's Blog"} description={"Lucas's Blog"} />
<Header/>

<article>
	<h1 class='gradient-text'>{title}</h1>
	<p class='published-date'>{date}</p>
	<Content />
</article>