<script>
    function toggle() {
        window.document.body.classList.toggle('dark-mode')
    }
</script>
<button on:click={toggle}>Button</button>
<style>
    button {
        background-color: gray;
    }
    :global(body.dark-mode) {
        --background-color: #fefef8;
	    --title-color: #218380;
	    --accent-color: #d81159;
	    --text-color: #121218;
	    --blog-text-color: #121218;
	}
</style>