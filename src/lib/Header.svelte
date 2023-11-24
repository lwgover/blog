<script>
    import Logo from "$lib/Logo.svelte"
    import ColorScheme from '$lib/ColorScheme.svelte'
</script>
<div class='header'>
<a class='home-link' href='/'>
    <div class='blog-header'>
        <div class='logo-container'>
        <Logo height={"100px"} width={"100px"}/>
        </div>
        <div class='blog-header-words-container vertically-align'>
            <p class="blog-title">Lucas's Blog</p>
            <div class="gradient-underline" style='transform:translate(0,-23px); width:83%; height: 5px; margin-left:15px;'/>
        </div>
    </div>
</a>
<div class='right-side'/>
    <ul class='header-icons'>
        <li class='icon'><ColorScheme/></li>
        <a href='https://upload.wikimedia.org/wikipedia/commons/4/46/Generic_Feed-icon.svg'><li class='icon'>
        </li></a>
    </ul>
</div>
<style>
    .icon {
        display:inline-block;
        width:75px;
        height:75px;
        background-color:#fff;
        vertical-align:middle;
        margin-right: 25px;
        padding:0px;
    }
    .header-icons {
        display: flex;
        margin:25px;
        margin-right:0px;
    }
    .header {
        display: flex;
    }
    .right-side {
        margin-left: auto;
        display:inline-block;
    }
    .home-link {
        width:fit-content;
        display:inline-block;
        padding:0px;
        margin:0px;
    }
</style>