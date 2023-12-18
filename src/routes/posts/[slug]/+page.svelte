<script>
    import { onMount } from "svelte";
    import Seo from "$lib/Seo.svelte";
    import "$lib/styles/splendor.css";
    import { browser } from "$app/environment";
    import "$lib/styles/code.css";
    import Header from "$lib/Header.svelte";
    import { tweened } from "svelte/motion";

    import { fly, blur } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

    export let data;
    const { title, date, length, image, Content } = data;
    console.log(image);

    const frame_y = tweened(20, {
        duration: 300,
    });

    onMount(async () => frame_y.set(-30));
</script>

<Seo {title} description={"Lucas's Blog"} />
<div class="header-content" transition:blur={{ amount: 10 }}>
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
            <div class="blog-post-info-container">
                <div class="blog-pfp">
                    <img
                        src="https://blog.lucasgover.com/images/pfp.jpg"
                        alt="pfp of Lucas Gover"
                    />
                </div>
                <div class="blog-post-info-col">
                    <p class="blog-post-date">
                        {new Date(date).toDateString() +
                            " - " +
                            length +
                            " min read"}
                    </p>
                    <p class="blog-post-author">Written by Lucas Gover</p>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="skew shadow" style="padding-top:5px" transition:fly={{ delay: 50, duration: 500, x: 0, y: 700, opacity: 0.5, easing: quintOut }}>
    <div class="gradient-underline" />
    <div class="unskew">
        <article class="blog-post">
            <Content />
        </article>
    </div>
</div>
<div class="footer-content">
    <div
        class={`topography-texture ${image != null ? "possibly-an-image" : ""}`}
        style={image != null ? `background-image: url(${image})` : ""}
    >
        <div
            class="contrast-filter"
            style={image == null ? `background-color: transparent` : ""}
        ></div>
    </div>
</div>
<div class="footer-text">
    <div class="footer-thanks">Thanks for Reading!</div>
    <ul class="footer-list">
        <li class="footer-li">
            <a class="footer-link" href="https://www.lucasgover.com"
                >Portfolio</a
            >
        </li>
        <li class="footer-li">
            <a class="footer-link" href="mailto:lucasgover@gmail.com"
                >email me!</a
            >
        </li>
        <li class="footer-li">
            <a class="footer-link" href="https://github.com/lwgover">Github</a>
        </li>
    </ul>
</div>

<style>
    .footer-link {
        text-decoration: none;
    }
    .footer-list {
        width: fit-content;
        margin: auto;
        list-style: none;
        padding: 0px;
    }
    .footer-thanks {
        display: inline-block;
        width: fit-content;
        margin: 5px;
        padding: 2px;
        color: white;
        font-weight: 550;
        letter-spacing: 3px;
        font-size: 30px;
        text-shadow: 0 0 5px rgba(0, 0, 0, 0.8);
    }
    .footer-li {
        display: inline-block;
        width: fit-content;
        margin: 5px;
        background-color: white;
        padding: 4px;
        color: #218380;
        font-weight: 550;
        letter-spacing: 2px;
        font-size: 24px;
        box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.1);
    }
    .footer-li:hover {
        transform: scale(1.05);
    }
    .footer-text {
        z-index: 250;
        margin-top: -140px;
        text-align: center;
    }
    .footer-content {
        display: flex; /* Use flex display to enable vertical alignment */
        flex-direction: column; /* Set flex direction to column */
        justify-content: flex-end; /* Align items to the bottom of the container */
        align-items: center; /* Center items horizontally */
        width: 100vw;
        height: 40vh;
        background-image: linear-gradient(
            -47deg,
            var(--title-color),
            var(--middle-color),
            var(--accent-color)
        );
        margin-top: calc((50vw * tan(-7deg)));
    }
    .shadow {
        background-color: var(--background-color);
        box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.5);
    }
    .skew {
        transform: skewY(-7deg);
        margin-top: calc(-38vh + (50vw * tan(-7deg)));
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
        background-color: rgba(var(--background-color-rgb), 0.2);
        transition: 0.5s;
    }
    .possibly-an-image {
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        width:100%;
        height:100%;
    }
    .header-content {
        width: 100vw;
        height: 100vh;
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
        box-shadow: 0 0 0 5px rgba(255,255,255,0.7);
        margin: 10px;
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
    @media (max-width: 450px) {
        .footer-content {
            margin-top: calc((75vw * tan(-7deg)));
        }
        .footer-text {
            margin-top: -200px;
        }
    }
</style>
