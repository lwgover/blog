<script>
    import { onMount } from "svelte";
    import Header from "$lib/Header.svelte";
    import { tweened } from "svelte/motion";
    import SvelteSeo from "svelte-seo";
    import { fly, blur, scale } from "svelte/transition";
    import { quintOut } from "svelte/easing";
    import Footer from "$lib/Footer.svelte";
    import { base } from "$app/paths";

    export let data;
    const { title, date, length, image, posts, Content } = data;
    console.log(image);
</script>

<SvelteSeo title="{title}," description="Lucas's Blog" />
<div
    class="header-content"
    in:fly={{
        delay: 0,
        duration: 500,
        x: 0,
        y: 700,
        opacity: 0.5,
        easing: quintOut,
    }}
    out:blur={{ amount: 10 }}
>
    <div
        class={`topography-texture ${image != null ? "possibly-an-image" : ""}`}
        style={image != null ? `background-image: url(${image})` : ""}
    >
        <div
            class="contrast-filter"
            style={image == null ? `background-color: transparent` : ""}
        >
            <Header />
            <h1 class="blog-post-title">{title}</h1>
        </div>
    </div>
</div>
<div
    class="skew"
    style="padding-top:5px"
    in:fly={{
        delay: 75,
        duration: 500,
        x: 0,
        y: 700,
        opacity: 0.5,
        easing: quintOut,
    }}
    out:blur={{ amount: 5 }}
>
    <div class="blog-post-info-col">
        <p class="blog-post-date">
            {new Date(date).toDateString()}
        </p>
        <p class="blog-post-author">•</p>
        <p class="blog-post-author">{length + " min read"}</p>
    </div>
    <div class="unskew">
        <div class="two-columns">
            <div class="column left-column">
                <div class="blog-post-info-container">
                    <svg
                        viewBox="0 0 200 200"
                        xmlns="http://www.w3.org/2000/svg"
                        transform=" scale(1.3)"
                    >
                    <circle r=60 cx=110 cy=100 fill='#fff' opacity=0.7/>
                        <circle r=50 cx=70 cy=100 fill='#fff' opacity=0.7/>
                        <circle r=45 cx=70 cy=130 fill='#fff' opacity=0.7/>
                    <circle r=60 cx=110 cy=100 fill='var(--title-color)' opacity=0.7/>
                        <circle r=50 cx=70 cy=100 fill='var(--accent-color)' opacity=0.7/>
                        <circle r=45 cx=70 cy=130 fill='var(--middle-color)' opacity=0.7/>
                    </svg>
                    <div class="blog-pfp" style='margin-top: -200px'>
                        <img
                            src="{base}/images/pfp.jpg"
                            alt="pfp of Lucas Gover"
                        />
                    </div>
                    <div class="author-name">Lucas Gover</div>
                    <div class="author-desc"></div>
                </div>
                <div class="blog-posts-header">
                    <p class="blog-posts-title">Recent Posts</p>
                </div>
                <ul class="posts">
                    {#each posts as post}
                        <li class="post">
                            <h2 class="article">
                                <a
                                    href={`${base}${post.path}`}
                                    class="article-title"
                                >
                                    {post.meta.title}
                                </a>
                            </h2>
                        </li>
                    {/each}
                </ul>
            </div>
            <div class="column right-column">
                <article class="blog-post">
                    <Content />
                </article>
            </div>
        </div>
    </div>
</div>
<Footer {image} />
<svg
    height="0px"
    width="0px"
    viewBox="0 0 200 200"
    xmlns="http://www.w3.org/2000/svg"
>
    <clipPath id="blob">
        <path
            d="M29.8,-47.3C42.4,-44.4,59,-44,67.5,-36.5C76,-29.1,76.5,-14.5,70.9,-3.2C65.4,8.1,53.8,16.3,45.4,23.8C36.9,31.3,31.5,38.3,24.4,47.8C17.4,57.4,8.7,69.6,-3.8,76.2C-16.3,82.8,-32.6,83.7,-45.3,77.4C-57.9,71.1,-67,57.5,-74.7,43.4C-82.3,29.3,-88.6,14.6,-87.7,0.5C-86.7,-13.6,-78.6,-27.1,-69,-37.9C-59.4,-48.6,-48.3,-56.5,-36.5,-59.9C-24.8,-63.3,-12.4,-62.2,-1.9,-58.9C8.6,-55.7,17.2,-50.2,29.8,-47.3Z"
            transform="translate(117 117) rotate(63) scale(1.30)"
        />
    </clipPath>
</svg>

<style>
    .blog-post-title {
        width: 1000px;
        max-width: 95%;
        font-weight: 1000;

    }
    .author-posts-split {
        width: 50%;
        margin: auto;
        border: 1.8px solid rgba(0, 0, 0, 1);
        margin-top: 20px;
        border-radius: 1.8px;
    }
    .posts {
        padding: 0px;
    }
    .post {
        list-style-type: none;
        padding: 0px;
        width: 100%;
        max-width: 100%;
        font-family: var(--font-sans);
        color: var(--text-color);
    }
    .blog-posts-title {
        font-family: var(--font-sans);
        padding: 0px;
        border-bottom: 3px solid var(--text-color);
        width: 80%;
        font-weight: 600;
        color: var(--text-color);
        font-size: 1.3em;
    }
    .author-name {
        display: relative;
        text-align: center;
        font-family: var(--font-serif);
        font-weight: 600;
        font-size: 2em;
        letter-spacing: 2px;
        color: var(--text-color);
    }
    .blog-pfp {
        height: 200px;
        width: 200px;
        border-radius: 50px;
        margin: 10px;
        clip-path: url(#blob);
        display: relative;
    }
    .two-columns {
        display: flex;
        flex-flow: row wrap;
        justify-content: flex-start;
        height: auto;
        padding: 3em;
        padding-top: 0px;
        padding-bottom: 0px;
    }

    .two-columns > * {
        padding: 2em;
        flex: 1 100%;
    }

    .left-column {
        position: -webkit-sticky;
        position: sticky;
        height: auto;
        align-self: flex-start;

        width: 300px;
        max-width: 20%;
        display: block;
        position: sticky;
        align-self: flex-start;
        top: 0;
        /* Add a height or max-height */
        max-height: 80vh; /* Adjust the value as needed */
        padding-top: 100px;
    }

    .right-column {
        top: 0;
        flex: 1;
        height: fit-content;
        width: 100%;
        max-width: 1000px;
        margin-top: -50px;
    }

    @media all and (min-width: 300px) {
        .aside {
            flex: 1 0 0;
        }
    }
    /* container */
    .fade {
        box-shadow: 0 -5vh 20vh 20vh rgba(var(--background-color-rgb, 1));
    }
    .shadow {
        background-color: var(--background-color);
        box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.5);
    }
    .skew {
        transform: skewY(-7deg);
        margin-top: calc((50vw * tan(-7deg)));
        background-color: var(--background-color);
    }
    .unskew {
        transform: skewY(7deg);
        padding-bottom: calc((1vw * tan(7deg)) + 80px);
        padding-top: calc(0vh - (25vw * tan(-7deg)));
    }
    .blog-post {
        margin: auto;
    }
    .blog-post-title {
        text-shadow: 0 0 5px rgba(var(--background-color-rgb), 0.3);
    }
    .contrast-filter {
        width: 100%;
        height: 100%;
        background-color: rgba(var(--background-color-rgb), 0.4);
        transition: 0.5s;
    }
    .possibly-an-image {
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        width: 100%;
        height: 100%;
    }
    .header-content {
        width: 100vw;
        height: 60vh;
        background-image: linear-gradient(
            -47deg,
            var(--title-color),
            var(--middle-color),
            var(--accent-color)
        );
    }
    img {
        padding: 0px;
        margin: 0px;
        height: 100%;
        width: 100%;
    }
    .blog-post-info-col {
        padding-left: 10px;
        width: fit-content;
    }
    .blog-post-info-container {
        width: fit-content;
        padding: 00px;
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
        display: inline-block;
        padding-left: 20px;
    }
    .blog-post-date {
        color: var(--header-color);
        text-align: left;
        margin: 0px;
        padding: 0px;
        display: inline-block;
    }

    .gradient-text {
        color: var(--title-color);
    }

    @supports (background-clip: text) or (-webkit-background-clip: text) {
        .gradient-text {
            background-color: var(--title-color);
            background-image: linear-gradient(
                47deg,
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
    /* Media query for mobile devices */
    @media (max-width: 767px) {
        .two-columns {
            flex-direction: column;
            padding:0px;
        }
        .two-columns > * {
            width: 100%;
            padding: 0.5rem;
        }

        /* On mobile, the right column will be on top of the left column */
        .right-column {
            order: -1;
            margin-top:0px;
        }
        .normal-text {
            margin-top: 20px;
        }
        .left-column {
            width: 80vw;
            max-width: 80vw;
            margin: auto;
        }
    }
</style>
