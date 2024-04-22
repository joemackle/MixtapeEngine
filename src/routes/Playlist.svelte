<script>
	import Song from './Song.svelte';
	export let playlist = [
		{
			song: 'Song 1',
			artist: 'Artist',
		},
		{
			song: 'Song 2',
			artist: 'Blur',
		},
		{
			song: "Song 3",
			artist: "Joseph",
		},
	];

	export async function sortBy(sort) {
		if (sort == "Artist") {
			playlist.sort((a, b) => {
				if (a.artist.toUpperCase() < b.artist.toUpperCase()) {
					return -1;
				}
				if (a.artist.toUpperCase() > b.artist.toUpperCase()) {
					return 1;
				}

				// names must be equal
				return 0;
			});
		}
	}
</script>

<div class="block rounded-md bg-white shadow-md transition-shadow duration-200 ease-in-out hover:shadow-indigo-400 dark:bg-neutral-700 text-left">
	<div class="p-6">
		<h5 class="mb-2 text-xl font-bold tracking-wide text-neutral-800 dark:text-neutral-50">
			Your new playlist...
		</h5>
		<div class="flow-root flex">
			<ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
				{#each playlist as item, index (item.song)}
					<Song
						index={index}
						name={item.song}
						artist={item.artist}
					/>
				{/each}
			</ul>
		</div>
	</div>
</div>