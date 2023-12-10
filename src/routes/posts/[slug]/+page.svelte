<script>
    import { onMount } from 'svelte';
    import Seo from "$lib/Seo.svelte";
    import "$lib/styles/splendor.css";
    import { browser } from "$app/environment";
    import '$lib/styles/code.css'
    import Header from "$lib/Header.svelte";

    export let data;
    const { title, date, length, image, Content } = data;
    console.log(image)

</script>

<Seo {title} description={"Lucas's Blog"} />
<div class ='header-content' style={image != null ? `background-image: url(${image})` : ''}>
<Header/>
</div>
<article class="blog-post">
    <h1 class="blog-post-title">{title}</h1>
    <div class="blog-post-info-container">
        <div class="blog-pfp">
            <img src="/src/lib/images/pfp.jpg" alt="pfp of Lucas Gover" />
        </div>
        <div class="blog-post-info-col">
            <p class="blog-post-date">
                {new Date(date).toDateString() + " - " + length + " min read"}
            </p>
            <p class="blog-post-author">Written by Lucas Gover</p>
        </div>
    </div>
    <Content />
</article>

<style>
    .header-content {
        width:100vw;
        height: 100vh;
        background-image: linear-gradient(45deg, var(--title-color), var(--middle-color), var(--accent-color));
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
    }
    img {
        padding:0px;
        margin:0px;
        height:100%;
        width: 100%;
    }
    .blog-post {
        margin: auto;
    }
    .blog-post-info-col {
        padding-left: 10px;
    }
    .blog-post-info-container {
        display: flex;
        width: fit-content;
        padding: 20px;
        margin: 10px;
        margin: auto;
        align-items: center;
        justify-content: center;
    }
    .blog-post-author {
        color: var(--header-color);
        text-align: left;
        margin: 0px;
        padding: 0px;
    }
    .blog-post-date {
        color: var(--header-color);
        text-align: left;
        margin: 0px;
        padding: 0px;
    }
    .blog-pfp {
        height: 80px;
        width: 80px;
        border-radius: 50px;
        overflow: hidden;
        box-shadow: 0 0 0 5px var(--header-color-transparent);
        margin: 10px;
    }
    .gradient-text {
        color: var(--title-color);
    }

    @supports (background-clip: text) or (-webkit-background-clip: text) {
        .gradient-text {
            background-color: var(--title-color);
            background-image: linear-gradient(
                45deg,
                var(--title-color),
                var(--middle-color),
                var(--accent-color)
            );
            background-size: 100%;
            background-clip: text;
            -webkit-background-clip: text;
            -moz-background-clip: text;
            -webkit-text-fill-color: transparent;
            -moz-text-fill-color: transparent;
        }
    }
</style>
