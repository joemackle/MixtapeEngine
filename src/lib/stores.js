import { writable } from 'svelte/store';

export const playlist = writable([
	{
		song: "Neil",
		artist: "Neil",
	},
	{
		song: "Song 3",
		artist: "Joseph",
	},
	{
		song: 'Song 2',
		artist: 'Blur',
	},
	{
		song: 'Ericsong',
		artist: 'Eric',
	},
]);

export const playlistSorted = writable([]);

export const playlistSortOp = writable("Best Fit");