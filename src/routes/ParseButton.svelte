<script>
  import {parseCsv} from './parseCsv.js';
  export let weights = [];

  async function handleParse() {
    const url = "/dataset.csv";
    const parsedData = await parseCsv(url, weights);
    console.log(parsedData);
  }
</script>

<button on:click={handleParse} type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
  Parse CSV
</button>
