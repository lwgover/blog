<script>
    import Logo from "$lib/Logo.svelte";
    import ColorScheme from "$lib/ColorScheme.svelte";
    import Rss from "$lib/images/rss.svelte";
</script>

<div class="header">
    <a class="home-link" href="/">
        <div class="blog-header">
            <div class="logo-container">
                <Logo height={"100px"} width={"100px"} />
            </div>
            <div class="blog-header-words-container vertically-align">
                <p class="blog-title">Lucas's Blog</p>
                <div class="gradient-underline" id="header-underline" />
            </div>
        </div>
    </a>
    <div class="right-side" />
    <ul class="header-icons">
        <li class="icon"><ColorScheme /></li>
        <a
            href="https://upload.wikimedia.org/wikipedia/commons/4/46/Generic_Feed-icon.svg"
            ><li class="icon"><Rss /></li></a
        >
    </ul>
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
    .logo-container {
        display: inline-block;
        width: fit-content;
        height: fit-content;
        margin: 0px;
        padding: 0px;
        vertical-align: middle;
        overflow: hidden;
        transition: all 0.5s;
    }
    .vertically-align {
        display: inline-block;
        vertical-align: middle;
    }
    .blog-title {
        margin: 0px;
        padding: 0px;
        color: var(--text-color);
        font-size: 48px;
        width: fit-content;
        padding: 10px;
        font-weight: 300;
        letter-spacing: 3px;
        border-radius: 5px;
        transition: all 0.3s;
        display: inline-block;
        font-family: var(--font-sans);
    }
    .blog-header {
        width: fit-content;
        margin: 20px;
        margin-top: 10px;
    }
    #header-underline {
        transform: translate(0, -23px);
        width: 83%;
        height: 5px;
        margin-left: 15px;
    }
    @media (max-width: 767px) {
        .blog-title {
            font-size: 35px;
        }
        #header-underline {
            transform: translate(-3px, -18px);
            width: 80%;
            height: 5px;
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
        }
        .header-icons {
            padding: 0px;
            margin: 0px;
        }
        .blog-title {
            font-size: 2rem;
            letter-spacing: 2.3px;
            padding-top: 13px;
        }
        .header {
            height: 60px;
            overflow: hidden;
        }
        @media (min-width: 415px) {
            .logo-container {
                border: 0;
                clip: rect(0 0 0 0);
                height: auto;
                margin: 0;
                overflow: hidden;
                padding: 0;
                position: absolute;
                width: 1px;
                white-space: nowrap;
            }
        }
    }
    @media (max-width: 414px) {
        .blog-header-words-container {
            border: 0;
            clip: rect(0 0 0 0);
            height: auto;
            margin: 0;
            overflow: hidden;
            padding: 0;
            position: absolute;
            width: 1px;
            white-space: nowrap;
        }
        .logo-container{
            transform: scale(0.50) translate(-20px, -20px);
        }
    }
</style>
