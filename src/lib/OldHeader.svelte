<script>
    import Logo from "$lib/Logo.svelte";
    import ColorScheme from "$lib/ColorScheme.svelte";
    import Rss from "$lib/images/rss.svelte";
</script>

<div class="header">
    <div class='gradient-backdrop outline'>
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
    </div>
    <div class="right-side" />
    <div class='gradient-backdrop outline vertically-align'>
    <ul class="header-icons">
        <li class="icon"><ColorScheme /></li>
        <a
        
            href="/rss.xml"
            ><li class="icon"><Rss /></li></a
        >
    </ul>
</div>
</div>

<style>
    .outline {
        padding:2px;
        margin:20px;
        border-radius: 20px;
        height:fit-content;
    }
    .icon {
        display: inline-block;
        width: fit-content;
        height: fit-content;
        vertical-align: middle;
        margin-right: 25px;
        padding: 12.5px;
        padding-right: 0px;
        overflow: hidden;
    }
    .header-icons {
        display: flex;
        margin-right: 0px;
        background-color: var(--background-color);
        margin:0px;
        padding:0px;
        border-radius: 18px;
    }
    .header {
        display: flex;
        margin:auto;
        width:1300px;
        max-width: 100vw;
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
        background-color: var(--background-color);
        border-radius: 18px;
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
        color: var(--header-color);
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
        margin: 0px;
        padding-left: 10px;
    }
    #header-underline {
        transform: translate(0, -23px);
        width: 83%;
        height: 5px;
        margin-left: 15px;
    }
    @media (max-width: 767px) {
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
        .blog-title {
            font-size: 1.8rem;
            letter-spacing: 2.1px;
            padding-top: 15px;
        }
        .header {
            height: 60px;
            overflow: hidden;
        }
        @media (min-width: 390px) {
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
    @media (max-width: 390px) {
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
