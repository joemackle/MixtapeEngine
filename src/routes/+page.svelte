<script>
	//import {base} from '$app/paths';
	import Rank from './Rank.svelte';
</script>

<svelte:head>
	<title>The Mixtape Engine</title>
	<meta name="description" content="The Mixtape Engine (COP3530 Project 3)" />
</svelte:head>

<section>
	<div class="grid gap-6">
		<div class="row-span-2">
			<Rank />
		</div>
		<div class="row-span-2">

		</div>
		<div>

		</div>
		<div class="col-start-3">

	</div>
</section>

<style lang="postcss">
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}
</style>
