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
</script>

<!-- Card -->
<div class="block rounded-md bg-white shadow-md dark:bg-neutral-700 text-left">

	<!-- Card body -->
	<div class="p-6">

		<!-- Title -->
		<h5 class="mb-2 text-xl font-bold tracking-wide text-neutral-800 dark:text-neutral-50">
			Rank based on importance:
		</h5>
    
    <div class="text-base text-neutral-500 dark:text-neutral-300">

			<!-- Danceability, Energy, Speechiness, Acousticness, Instrumentalness, Liveness, Valence-->
      <WeightSliders bind:weights />

      <div class="flex flex-col items-center justify-items-center mt-4">
        <ParseButton {weights} bind:result />
        {#if result.duration}
          <div class="mt-2 text-sm font-medium text-gray-900 dark:text-white">Parsing took {result.duration}</div>
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
