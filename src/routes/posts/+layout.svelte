<script>
	import '$lib/styles/styles.css';
</script>

<div class="article">
	<main>
		<slot />
	</main>
</div>

<style>
	.article {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}
</style>
