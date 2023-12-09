<script>
	import "$lib/styles/styles.css";
	import Header from "$lib/Header.svelte";
</script>


<div class="gradient-backdrop">
	<div class="topography-backdrop">
		<Header />
		<div class="article">
			<main>
				<slot />
			</main>
		</div>
	</div>
</div>

<style>
	.article {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		background-color: var(--background-color);
		width:1200px;
		max-width: 100vw;
		margin:auto;
		box-shadow: 0 0 10px 5px rgba(0,0,0,0.1);
		border-radius: 5px;
		transition: all 0.3s;
	}

</style>
