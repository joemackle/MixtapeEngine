<script>
	import plan from '$lib/images/plan.jpg';
	import logo_small from '$lib/images/logo_small.png';
	import svelte_logo from '$lib/images/svelte-logo.svg';
	import {base} from '$app/paths';
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About the Mixtape Engine" />
</svelte:head>

<div class="text-column">
	<h1>About the Mixtape Engine</h1>

	<p>
		<img class="inline h-10" src={logo_small} alt="ME" /> <strong>The Mixtape Engine</strong> is a <a href="https://kit.svelte.dev"><img class="inline h-10" src={svelte_logo} alt="svelte logo" /> SvelteKit</a> app. <br>
		Below you can view an image that was drawn up to demonstrate a possible design of this web app.
	</p>

	<span class="plan">
			<img src={plan} alt="Original drawn website design" />
	</span>

	<p>
		<a href="{base}/">Go back to the Mixtape Engine</a>
	</p>
</div>

<style lang="postcss">
	.plan img {
		width: 80%;
		height: 80%;
		top: 0;
		display: block;
  }
</style>