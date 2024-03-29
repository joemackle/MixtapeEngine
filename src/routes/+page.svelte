<script>
	import Counter from './Counter.svelte';
	import {base} from '$app/paths';
</script>

<svelte:head>
	<title>The Mixtape Engine</title>
	<meta name="description" content="The Mixtape Engine (COP3530 Project 3)" />
</svelte:head>

<section>
	<p>soon, this will be the home page of the app. <br> click <a href="{base}/about">here</a> to see the about page</p>
	<Counter />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}
</style>
