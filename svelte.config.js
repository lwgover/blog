import adapter from '@sveltejs/adapter-static';
import sveltePreprocess from 'svelte-preprocess';
import firebase from "svelte-adapter-firebase";
import { mdsvex } from 'mdsvex';
import mdsvex_config from './mdsvex.config.js'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		/* Kit options here */
		adapter: adapter(),
	},

	extensions: ['.svelte', '.md'],

	preprocess: [
		sveltePreprocess(),
		mdsvex(mdsvex_config)
	]
};
export default config;
