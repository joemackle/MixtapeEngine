<script>
	import {base} from '$app/paths';
</script>

<header>
	<div class="titlebar">
		<ul class="flex">
			<li class="flex-1 mr-3">
				<h1 class="text-1xl font-bold underline">The Mixtape Engine</h1>
			</li>
			<li class="mr-3">
				<a class="inline-block border border-blue-500 rounded py-1 px-3 bg-blue-500 text-white" href="{base}/">Home</a>
			</li>
			<li class="mr-3">
				<a class="inline-block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-1 px-3" href="{base}/about">About</a>
			</li>
			<li class="mr-3">
				<a class="inline-block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-1 px-3" href="https://github.com/joemackle/MixtapeEngine">GitHub</a>
			</li>
		</ul>
	</div>

	<div class="corner">
	</div>
</header>

<style lang="postcss">
	header {
		display: flex;
		justify-content: space-between;
	}

	.titlebar {
		width: 100%;
		padding: 0 1% 0 1%;
	}

	h1 {
		font-size: 50px;
		font-family: "Bauhaus 93", serif;
		border: 4px solid #000000;
		border-radius: 15px;
		width: 40%;
		background-color: var(--color-theme-2);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 8em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	a:hover {
		//color: var(--color-theme-1);
	}
</style>
