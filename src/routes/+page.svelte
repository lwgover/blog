<script>
    import Seo from "../lib/Seo.svelte";
    import Waves from "../lib/Waves.svelte";
    import Logo from "../lib/Logo.svelte";
    import Header from "$lib/Header.svelte";

    export let data;
    console.log(data);
</script>

<section>
    <Seo title={"Lucas's Blog"} description={"Lucas Gover's Blog"} />
    <Header />
    <div class="two-columns">
        <div class="column left-column">
            <div class="blog-section-header">
                <p class="blog-section-title">Chronological</p>
                <div class="gradient-underline" />
            </div>
            <ul class="posts">
                {#each data.posts as post}
                    <li class="post">
                        <h2 class="article">
                            <a href={post.path} class="article-title">
                                {post.meta.title}
                            </a>
                        </h2>
                        <p class="published-date">{post.meta.date}</p>
                    </li>
                {/each}
            </ul>
        </div>
        <div class="column right-column">
            <p class="normal-text">
                I'm not sure what I'm gonna use this for, but a blog seemed like
                a fun thing to have. Current Status is that sometimes pages don't load, and that's ok! 
                The whole vibe is a work in progress. 
                Hope you enjoy your stay.
            </p>
            <p class="quote">
                Many [view] blogging as civic engagement for themselves and their readers. As a practice of critical thinking, blogging provides the space for writers to work through ideas before the polish. It affords an enclave to challenge ideas and arguments before the work is complete.
<br/><br/>

--Catherine Knight Steele.
            </p>
        </div>
    </div>
</section>

<style>

    .post {
        margin-top: 10px;
    }
    .published-date {
        color: gray;
        margin: 0px;
        padding: 0px;
        font-size: 14px;
        text-align: left;
        font-style: italic;
    }
    .article-title {
        font-family: var(--font-sans);
        font-size: 1.5rem;
        font-weight: 500;
        line-height: normal;
        transition: all 0.2s;
        text-decoration: none;
        overflow: hidden;
    }
    .article:hover {
        color: var(--background-color);
        background-image: linear-gradient(
            to right,
            var(--title-color),
            var(--middle-color),
            var(--accent-color)
        );
        border-radius: 1px;
        padding-left: 3px;
    }
    .posts {
        list-style-type: none;
        margin: 0px;
        padding: 2px;
        text-decoration: none;
    }
    .article {
        color: var(--text-color);
        margin: 0px;
        padding: 0px;
        width: fit-content;
    }
    .quote {
        color: var(--text-color);
        border-left: var(--text-color) solid 5px;
        padding: 20px;
        font-family: var(--font-sans);
        letter-spacing: 1.5px;
        font-weight: 100;
        padding-top: 5px;
        padding-bottom: 5px;
    }
    .normal-text {
        color: var(--text-color);
        padding: 0px;
        font-family: var(--font-sans);
        letter-spacing: 1.2px;
        font-weight: 100;
        margin-top:0px;
        padding-bottom: 5px;
    }
    .blog-section-title {
        color: var(--background-color);
        font-weight: 400;
        font-size: 2.5rem;
        padding: 0px;
        margin: 0px;
        letter-spacing: 2px;
        padding: 5px;
        padding-bottom: 0px;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        border-bottom: 0px;
        transition: all 0.3s;
    }
    .blog-section-header {
        width: fit-content;
        background-color: var(--header-color);
        border-radius: 7px;
        overflow: hidden;
        margin-left: 0px;
        margin-bottom: 15px;
        transition: all 0.3s;
    }
    /* container */
    .two-columns {
        display: flex;
        margin: auto;
        width: 1000px;
        max-width: 95%;
    }
    /* columns */
    .two-columns > * {
        width: 50%;
        padding: 1rem;
    }

    .left-column {
        flex: 1;
        /* Adjust any additional styling for the left column */
    }

    .right-column {
        flex: 1;
        /* Adjust any additional styling for the right column */
    }

    /* Media query for mobile devices */
    @media (max-width: 767px) {
        .two-columns {
            flex-direction: column;
        }
        .two-columns > * {
            width: 95%;
            padding: 1rem;
        }

        /* On mobile, the right column will be on top of the left column */
        .right-column {
            order: -1;
        }
        .normal-text {
            margin-top:20px;
        }
    }
</style>
