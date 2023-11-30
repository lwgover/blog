<script>
	import '$lib/styles/article.css';
	import '$lib/styles/code.css';
	import Seo from "$lib/Seo.svelte";
	import Header from '$lib/Header.svelte'
	export let data;
	const { title, date, Content } = data;
</script>

<Seo title={title} description={"Lucas's Blog"} />
<Header/>
<article class='blog-post'>
	<h1 class=''>{title}</h1>
	<p class=''>{date}</p>
	<Content />
</article>

<style>
	.gradient-text {
    color: var(--title-color);
}
.published-date {
    color:rgb(105, 119, 131);
    font-family: var(--font-sans);
    text-align: center;
    margin-bottom: 50px;
}

@supports (background-clip: text) or (-webkit-background-clip: text) {
    .gradient-text {
        background-color: var(--title-color);
        background-image: linear-gradient(45deg, var(--title-color), var(--middle-color), var(--accent-color));
        background-size: 100%;
        background-clip: text;
        -webkit-background-clip: text;
        -moz-background-clip: text;
        -webkit-text-fill-color: transparent;
        -moz-text-fill-color: transparent;
    }
}
</style>