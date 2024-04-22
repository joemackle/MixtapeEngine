<script>
	import { parseCsv } from '../parseCsv.js';
  import { selectionSort } from '../sorts/a_SelectionSort.js';
  import { bubbleSort } from '../sorts/b_BubbleSort.js';
  import { insertionSort } from '../sorts/c_InsertionSort.js';
  import { mergeSort } from '../sorts/e_MergeSort.js';

	export let weights;
	export let result;
  export let selectedAlgorithm;

  let buttonText = "Parse CSV";

  const algorithmFunctions = {
    "Selection Sort": selectionSort,
    "Bubble Sort": bubbleSort,
    "Insertion Sort": insertionSort,
    "Merge Sort": mergeSort,
    "Shell Sort": shellSort,
    "Quick Sort": quickSort
  }

	async function handleParse() {
    buttonText = "Loading...";
		const url = '/dataset.csv';
    const sort = algorithmFunctions[selectedAlgorithm];

		result = await parseCsv(url, weights, sort);
		console.log(result);

    buttonText = "Parse CSV";
	}
</script>

<button
	on:click={handleParse}
	type="button"
	class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
>
  {buttonText}
</button>
