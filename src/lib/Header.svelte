<script>
    import ColorScheme from "$lib/ColorScheme.svelte";
    import Rss from "$lib/images/rss.svelte";
</script>

<div class="header">
        <div class="blog-header">
            <a class="home-link">
            <div class="blog-header-words-container vertically-align">
                <p class="blog-title">Lucas's Blog</p>
                <!-- <div class="gradient-underline" id="header-underline" /> -->
            </div>
        </a>
        </div>
    <div class="right-side">
        <ul class="header-icons">
            <li class="icon"><ColorScheme /></li>
            <a href="/rss.xml"><li class="icon"><Rss /></li></a>
        </ul>
    </div>
</div>

<style>
    .icon {
        display: inline-block;
        width: fit-content;
        height: fit-content;
        vertical-align: middle;
        margin-right: 25px;
        padding: 12.5px;
        padding-right: 0px;
    }
    .header-icons {
        display: flex;
        margin: 25px;
        margin-right: 0px;
    }
    .header {
        display: flex;
        margin: auto;
        width: 100vw;
    }
    .right-side {
        margin-left: auto;
        display: inline-block;
    }
    .home-link {
        width: fit-content;
        display: inline-block;
        padding: 0px;
        margin: 0px;
        text-decoration: none;
    }
    .vertically-align {
        display: inline-block;
        vertical-align: middle;
    }
    .blog-title {
        color: var(--header-color);
        font-size: 36px;
        width: fit-content;
        padding: 5px;
        font-weight: 300;
        letter-spacing: 3px;
        border-radius: 5px;
        transition: all 0.3s;
        display: inline-block;
        font-family: var(--font-serif);
        /* border: 4px solid var(--header-color); */
        /* transform: skew(-12deg); */
        /* background-color: rgba(var(--background-color-rgb),0.2); */
        background-color: var(--header-color);
        color: var(--background-color);
    }
    .blog-header {
        width: fit-content;
        margin: 10px;
        margin-top: 20px;
        margin-left: 20px;
        border-radius: 0px;
    }
    #header-underline {
        transform: translate(-5px, -20px);
        width: 82%;
        height: 4px;
        margin-left: 10px;
        border-radius: 5px;
    }
    @media (max-width: 767px) {
        #header-underline {
            transform: translate(-3px, -18px);
            width: 78%;
            height: 4px;
            margin-left: 15px;
        }
        .icon {
            transform: scale(0.8);
            margin-right: 15px;
        }
        .blog-header {
            margin: 10px;
            margin-top: 0px;
            padding: 0px;
            color: var(--background-color);
            padding-top: 10px;
        }
        .header-icons {
            padding: 0px;
            margin: 0px;
        }
        .blog-title {
            font-size: 1.8rem;
            letter-spacing: 2.1px;
        }
        .header {
            height: 65px;
            overflow: hidden;
        }
    }
</style>
