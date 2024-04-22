<script>
	import { playlist, playlistSorted } from '$lib/stores.js';
	import Song from './Song.svelte';
</script>

<div class="block rounded-md bg-white shadow-md transition-shadow duration-200 ease-in-out hover:shadow-indigo-400 dark:bg-neutral-700 text-left">
	<div class="p-6">
		<h5 class="mb-2 text-xl font-bold italic tracking-wide text-neutral-800 dark:text-neutral-50">
			Your new playlist...
		</h5>
		<div class="flow-root flex">
			<ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
				{#each $playlistSorted as item, index (item.songName)}
					<Song
						songName={item.songName}
						artist={item.artist}
						track_id={item.track_id}
					/>
				{/each}
			</ul>
		</div>
	</div>
</div>