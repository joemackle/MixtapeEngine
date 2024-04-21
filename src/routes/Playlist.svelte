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
	];
</script>

<div class="block rounded-md bg-white shadow-md dark:bg-neutral-700 text-left">
	<div class="p-6">
		<h5 class="mb-2 text-xl font-bold tracking-wide text-neutral-800 dark:text-neutral-50">
			Your new playlist...
		</h5>
		<p class="mb-2 text-base text-neutral-500 dark:text-neutral-300">

		</p>
		<div class="flow-root">
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