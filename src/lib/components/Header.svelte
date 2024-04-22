<script>
	import {base} from '$app/paths';
</script>

<header>
	<div class="w-full px-6">
		<ul class="flex">
			<li class="flex-auto">
				<svg xmlns="http://www.w3.org/2000/svg" width="40%" viewBox="-0.15 -0.15 31.3 6.3">
					<path d="M 0 1 Q 0 0 1 0 H 30 Q 31 0 31 1 V 5 Q 31 6 30 6 H 1 Q 0 6 0 5 V 1" stroke="#000000" stroke-width="0.15" fill="none"/>
					<svg x=5% width=90% viewBox="0.64 -0.36 55.72 8.72">
						<path d="M 1 6 V 2 M 1 3 Q 1 2 2 2 Q 3 2 3 3 V 4 M 3 3 Q 3 2 4 2 Q 5 2 5 3 V 6 M 6 6 V 2 M 6 1 V 0 M 7 2 L 11 6 M 7 6 L 10.5 2.5 M 12 6 V 0 M 11 2 H 13 M 17 4 Q 17 6 15 6 Q 13 6 13 4 Q 13 2 15 2 Q 17 2 17 4 V 6 M 18 8 V 4 Q 18 2 20 2 Q 22 2 22 4 Q 22 6 20 6 Q 18 6 18 4 M 27 6 H 25 Q 23 6 23 4 Q 23 2 25 2 Q 27 2 27 4 H 23 M 35 6 H 33 Q 31 6 31 4 Q 31 2 33 2 Q 35 2 35 4 H 31 M 36 6 V 2 M 36 4 Q 36 2 38 2 Q 40 2 40 4 V 6 M 45 4 Q 45 6 43 6 Q 41 6 41 4 Q 41 2 43 2 Q 45 2 45 4 V 6 Q 45 8 43 8 H 41 M 46 6 V 2 M 46 0 V 1 M 47 6 V 2 M 47 4 Q 47 2 49 2 Q 51 2 51 4 V 6 M 56 6 H 54 Q 52 6 52 4 Q 52 2 54 2 Q 56 2 56 4 H 52" stroke="#000000" stroke-width="0.36" fill="none"/>
					</svg>
				</svg>
			</li>
			<li class="mr-3">
				<a class="inline-block border border-blue-500 rounded py-1 px-3 bg-blue-500 hover:bg-blue-700 text-white hover:no-underline" href="{base}/">Home</a>
			</li>
			<li class="mr-3">
				<a class="inline-block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-1 px-3 hover:no-underline" href="{base}/about">About</a>
			</li>
			<li class="mr-3">
				<a class="inline-block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-1 px-3 hover:no-underline" href="https://github.com/joemackle/MixtapeEngine">GitHub</a>
			</li>
		</ul>
	</div>
</header>

<style lang="postcss">
	header {
		display: flex;
		justify-content: space-between;
	}

	/*h1 {
		font-size: 45px;
		font-family: "Bauhaus 93", serif;
		border: 4px solid #000000;
		border-radius: 15px;
		width: 45%;
	}*/

	ul {
		position: page;
		padding: 0;
		margin: 0;
		height: 10em;
		display: flex;
		justify-content: space-between;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	a:hover {
		//color: var(--color-theme-1);
	}
</style>
