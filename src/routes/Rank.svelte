<script>
  import { parseCsv } from './parseCsv.js';
  import WeightSliders from './WeightSliders.svelte';
  import ParseButton from './ParseButton.svelte';

  let weights = {
    danceability: 0,
    energy: 0,
    speechiness: 0,
    acousticness: 0,
    instrumentalness: 0,
    liveness: 0,
    valence: 0
  }

  let result = {
    data: [],
    duration: ""
  }

  export let parsedData = result.data;

	export let sortingAlgorithms = [
		"Quick Sort",
		"Merge Sort",
	]

	export let selectedAlgorithm = "Quick Sort";
</script>

<div class="block rounded-md bg-white shadow-md transition-shadow duration-200 ease-in-out hover:shadow-indigo-400 dark:bg-neutral-700 text-left">
	<div class="p-6">
		<h5 class="mb-2 text-xl font-bold tracking-wide text-neutral-800 dark:text-neutral-50">
			Rank based on importance:
		</h5>

    <div class="text-base text-neutral-500 dark:text-neutral-300">
      <WeightSliders bind:weights />

			<div class="grid grid-cols-2 grid-rows-1 gap-4 flex-col mt-8">

				<form class="max-w-sm mx-auto">
					<select bind:value={selectedAlgorithm} on:change={() => (result.duration = "")} id="sorts" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
						{#each sortingAlgorithms as name}
							<option value="{name}">{name}</option>
						{/each}
					</select>
				</form>

        <ParseButton {weights} bind:result />
        {#if result.duration}
          <div class="mt-2 object-right text-sm font-medium text-gray-900 dark:text-white">Parsing with {selectedAlgorithm} took {result.duration}</div>
        {/if}

      </div>
    </div>
	</div>
</div>


<style>
	/*.hidden {
		top: -100%;
		user-select: none;
	}*/
</style>
