<script>
	import plan from '$lib/images/plan.jpg';
	import {base} from '$app/paths';
	import github from '$lib/images/github.svg';
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About the Mixtape Engine" />
</svelte:head>

<div class="text-column">
	<h1>
		About the Mixtape Engine
	</h1>

	<a href="https://github.com/joemackle/MixtapeEngine" class="github">
		<img src={github} alt="GitHub" />
	</a>

	<p>
		<strong>The Mixtape Engine</strong> is a <a href="https://kit.svelte.dev">SvelteKit</a> app. <br>
		Below you can view an image that was drawn up to demonstrate a possible design of this web app.
	</p>

	<span class="plan">
		<picture>
			<img src={plan} alt="Original drawn website design" />
		</picture>
	</span>

	<p>
		<a href="{base}/">Go back to the Mixtape Engine</a>
	</p>
</div>

<style lang="postcss">
	.github {
      width: 3em;
      height: 3em;
	}
	.plan img {
		width: 80%;
		height: 80%;
		top: 0;
		display: block;
  }
</style>