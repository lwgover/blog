<script>
    import Seo from "../lib/Seo.svelte";
    import Waves from "../lib/Waves.svelte";
    import Logo from "../lib/Logo.svelte"
</script>

<section>
    <Seo title={"Lucas's Blog"} description={"Lucas's Blog"} />
    <div class='blog-header'>
        <div class='logo-container'>
        <Logo height={"120px"} width={"120px"}/>
        </div>
        <div class='blog-header-words-container vertically-align'>
            <p class="blog-title">Lucas's Blog</p>
            <div class="gradient-underline" style='transform:translate(0,-20px); width:83%; height: 5px; margin-left:15px;'/>
        </div>
    </div>
    <div class="two-columns">
        <div>
            
            <div class="blog-section-header">
                <p class="blog-section-title">Chronological</p>
                <div class="gradient-underline" />
            </div>
        </div>
        <div>
            <p class='quote'>Think of this as a series of long-form tweets.</p>
        </div>
        
    </div>
</section>

<style>
    .logo-container {
        display: inline-block;
        width:fit-content;
        height:fit-content;
        margin:0px;
        padding:0px;
        vertical-align:middle;
    }
    .vertically-align {
        display: inline-block; 
        vertical-align:middle;
    }
    .blog-title {
        margin: 0px;
        padding: 0px;
        color: white;
        font-size: 56px;
        width: fit-content;
        padding: 10px;
        font-weight: 300;
        letter-spacing: 3px;
        border-radius: 5px;
        transition: all 0.3s;
        display:inline-block;
    }
    .blog-header {
        width:fit-content;
        margin: 30px;
        margin-top:20px;
    }
    .header-subtitle {
        color:#d81159;
        font-size: 18px;
        margin:5px;
        font-weight: 300;
        width:fit-content;
        margin:auto;
    }
    .quote {
        color:white;
        border-left: white solid 5px;
        padding: 20px;
        font-family: var(--font-sans);
        letter-spacing: 1.5px;;
        font-weight: 100;
        padding-top:5px;
        padding-bottom:5px;
    }
    .blog-section-title {
        color:var(--background-color);
        font-weight: 400;
        font-size: 42px;
        padding:0px;
        margin:0px;
        letter-spacing: 2px;
        padding:5px;
        padding-bottom: 0px;
        border: white solid 3px;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px; 
        border-bottom: 0px;
    }
    .blog-section-header {
        width:fit-content;
        background-color: #ffffff;
        border-radius: 7px;
        overflow: hidden;
        margin-left: 0px;
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
    .gradient-underline {
        width: 100%;
        height: 7px;
        background-image: linear-gradient(to right, #d81159, #218380);
        margin: 0px;
    }
</style>
