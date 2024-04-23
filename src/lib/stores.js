import { writable } from 'svelte/store';

export const playlist = writable([
	/*{
		songName: 'Darlin\' - Remastered 2001',
		artist: 'The Beach Boys',
		track_id: "4BcAcEbp6j6luowfAliUfW",
	},
	{
		songName: "Can't Buy A Thrill",
		artist: "Steely Dan",
		track_id: "1I7zHEdDx8Ny5RxzYPqsU2",
	},
	{
		songName: 'Don\'t Let Me Down - Remastered 2009',
		artist: 'The Beatles',
		track_id: "3evG0BIqEFMMP7lVJh1cSf",
	},
	{
		songName: "Chamber Of Reflection",
		artist: "Mac DeMarco",
		track_id: "7H7NyZ3G075GqPx2evsfeb",
	},*/
]);

export const playlistSorted = writable([]);

export const playlistSortOp = writable("Best Fit");