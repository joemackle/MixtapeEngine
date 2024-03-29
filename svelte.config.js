import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		appDir: 'app',
		adapter: adapter({
			fallback: '404.html'
		}),
		paths: {
			base: process.env.NODE_ENV === 'production' ? '/MixtapeEngine' : '',  //process.env.BASE_PATH
		},
	},
};

export default config;