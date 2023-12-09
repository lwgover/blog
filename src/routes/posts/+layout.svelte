<script>
	import "$lib/styles/styles.css";
	import Header from "$lib/Header.svelte";
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';

	/**
     * @type {any}
     */
	let y;
	let opacity = tweened(0, {
		duration: 800,
		easing: cubicOut
	});

	$: if(y > 250) { opacity.set(1) }else{ if(y < 0.5) {opacity.set(0)}}
</script>


<div class="gradient-backdrop">
	<div class="topography-backdrop">
		<div class='fade-to-flat' style={`background-color: rgba(var(--background-color-rgb),${($opacity)})`}>
		<Header/>
		<div class="article">
			<main>
				<slot />
			</main>
		</div>
		</div>
	</div>
</div>
<svelte:window bind:scrollY={y} />

<style>
	.fade-to-flat {
		width:100%;
		height:100%;
		margin:0px;
		padding:0px;
	}
	.article {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		width:1200px;
		max-width: 100vw;
		margin:auto;
		border-radius: 20px;
		transition: all 0.3s;
		padding-top: 50px;
		padding-bottom: 50px;
		opacity:1.0 !important;
	}

</style>
