<script>

</script>

<!-- Card -->
<div class="block rounded-md bg-white shadow-md dark:bg-neutral-700 text-left">

	<!-- Card body -->
	<div class="p-6">

		<!-- Title -->
		<h5 class="mb-2 text-xl font-bold tracking-wide text-neutral-800 dark:text-neutral-50">
			Rank based on importance:
		</h5>

		<!-- Text -->
		<p class="mb-2 text-base text-neutral-500 dark:text-neutral-300">
			<!-- Danceability, Energy, Speechiness, Acousticness, Instrumentalness, Liveness, Valence-->
			<label for="danceability" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Danceability</label>
			<input id="danceability" type="range" value="50" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700">

			<label for="energy" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Energy</label>
			<input id="energy" type="range" value="50" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700">

			<label for="speechiness" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Speechiness</label>
			<input id="speechiness" type="range" value="50" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700">

			<label for="acousticness" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Acousticness</label>
			<input id="acousticness" type="range" value="50" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700">

			<label for="instrumentalism" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Instrumentalism</label>
			<input id="instrumentalism" type="range" value="50" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700">

			<label for="liveness" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Liveness</label>
			<input id="liveness" type="range" value="50" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700">

			<label for="valence" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">valence</label>
			<input id="valence" type="range" value="50" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700">
		</p>

	</div>

</div>


<style>
	/*.hidden {
		top: -100%;
		user-select: none;
	}*/
</style>
