<script>
  import WeightsTable from './WeightsTable.svelte';
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
</script>

<div class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
  <WeightsTable bind:weights />
  <ParseButton {weights} />
</div>
