<script>
	import { playlist, playlistSortOp, playlistSorted } from '$lib/stores.js';

	export let sortOptions = [
		"Artist",
		"Best Fit",
		//"Genre",
		"Song Name",
	]

	// sort playlist
	$: {
		let editPlaylist = [{songName: "", artist: "", track_id: ""}]; editPlaylist.length = 0;
		$playlist.forEach(item => {editPlaylist.push(item);});

		if ($playlistSortOp === "Best Fit") {
			// do nothing
		} else if ($playlistSortOp === "Artist") {
			editPlaylist.sort((a, b) => {
				if (a.artist.toLowerCase() < b.artist.toLowerCase()) return -1;
				if (a.artist.toLowerCase() > b.artist.toLowerCase()) return 1;
				return 0;  // artist names are equal
			});
		} else if ($playlistSortOp === "Genre") {
			// implement?
		} else if ($playlistSortOp === "Song Name") {
			editPlaylist.sort((a, b) => {
				if (a.songName.toLowerCase() < b.songName.toLowerCase()) return -1;
				if (a.songName.toLowerCase() > b.songName.toLowerCase()) return 1;
				return 0;  // song names are equal
			});
		}

		// write editPlaylist to playlistSorted
		playlistSorted.set(editPlaylist);
	}
</script>

<div class="block rounded-md bg-white shadow-md transition-shadow duration-200 ease-in-out hover:shadow-indigo-400 dark:bg-neutral-700 text-left">
	<div class="p-6">
		<h5 class="mb-2 font-bold tracking-wide text-neutral-800 dark:text-neutral-50">
			Sort by
		</h5>

		<ul role="list">
			{#each sortOptions as option}
				<li>
					<input type="radio" id={option} value={option} bind:group={$playlistSortOp}>
					<label for={option}>{option}</label>
				</li>
			{/each}
		</ul>

	</div>
</div>