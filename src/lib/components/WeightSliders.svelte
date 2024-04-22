<script>
  export let weights;

  const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);
</script>

<form>
  {#each Object.entries(weights) as [key, value]}
    <div class="mb-4 flex items-center">
      <!-- Key Name Column -->
      <label for="{key}" class="block text-sm font-medium text-gray-900 dark:text-white w-32">
        {capitalizeFirstLetter(key)}
      </label>

      <!-- Slider Column -->
      <div class="flex-grow mx-2">
        <input type="range" id="{key}" name="{key}" min="0" max="1" step="0.01" bind:value={weights[key]}
               class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700">
      </div>

      <!-- Value Column -->
      <output for="{key}" class="text-sm font-medium text-gray-900 dark:text-white w-12 text-center">{value.toFixed(2)}</output>
    </div>
  {/each}
</form>
