<script>
	import { fade } from 'svelte/transition'
	import previewIcon from '../lib/images/logo_small.png';
	//export let index;
	export var name = "Song Name";
	export let artist = "Artist";

	// retrieve cover art using MusicBrainz cover art archive

	// 30-sec song preview (connect to Spotify)
	function previewSong() {
		//getCoverArt;
	}
</script>

<li class="py-3 sm:py-4" transition:fade>
	<div class="flex items-center">
		<div>
			<button on:click={previewSong}>
				<img class="w-10 h-10" src={previewIcon} alt="Preview Song">
			</button>
		</div>
		<div class="flex-2 min-w-0 ms-4">
			<div class="text-lg font-sans text-black truncate">
				{name}
			</div>
			<div class="text-sm text-gray-600 truncate">
				{artist}
			</div>
		</div>
	</div>
</li>