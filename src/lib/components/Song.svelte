<script>
	import { fade } from 'svelte/transition'
	import previewIcon from '../images/logo_small.png';
	//export let index;
	export let songName = "Song Name";
	export let artist = "Artist";
	export let track_id = "0";

	// retrieve cover art using MusicBrainz cover art archive

	// 30-sec song preview (connect to Spotify)
	function previewSong() {
		//getCoverArt;
		console.log("attempting to preview " + track_id);
	}
</script>

<li class="py-3 sm:py-4" transition:fade>
	<div class="flex items-center">
		<div>
			<button on:click={previewSong}>
				<img class="min-w-10 h-10" src={previewIcon} alt="Preview Song" title={track_id}>
			</button>
		</div>
		<div class="flex-2 min-w-0 ms-4">
			<div class="text-lg font-sans text-black truncate dark:text-white" title={songName}>
				{songName}
			</div>
			<div class="text-sm text-gray-600 truncate dark:text-white" title={artist}>
				{artist}
			</div>
		</div>
	</div>
</li>