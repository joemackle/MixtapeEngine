<script>
	export let sortOptions = [
		"Artist",
		"Best Fit",
		"Genre",
		"Song Length",
	]

	export let selectedOption = "Best Fit";

	async function handleSort() {
		// going to have to use svelte store
	}
</script>

<div class="block rounded-md bg-white shadow-md transition-shadow duration-200 ease-in-out hover:shadow-indigo-400 dark:bg-neutral-700 text-left">
	<div class="p-6">
		<h5 class="mb-2 text-xl font-bold tracking-wide text-neutral-800 dark:text-neutral-50">
			Sort by
		</h5>

		<ul role="list">
			{#each sortOptions as option}
				<li>
					<input type="radio" id={option} value={option} bind:group={selectedOption} on:change={handleSort}>
					<label for={option}>{option}</label>
				</li>
			{/each}
		</ul>

	</div>
</div>