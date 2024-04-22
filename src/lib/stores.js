import { writable } from 'svelte/store';

export const playlist = writable(0);

export const playlistSortOp = writable("Best Fit");