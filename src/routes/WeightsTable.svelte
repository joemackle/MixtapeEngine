<script>
  export let weights = {
    danceability: 1,
    energy: 1,
    speechiness: 1,
    acousticness: 1,
    instrumentalness: 1,
    liveness: 1,
    valence: 1
  };
</script>

<table>
  {#each Object.keys(weights) as key (key)}
    <tr>
      <td class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{key}</td>
      <td>
        <input type="range" min="0" max="1" step="0.01" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
          bind:value={weights[key]} />
      </td>
      <td class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{weights[key].toFixed(2)}</td>
    </tr>
  {/each}
</table>
