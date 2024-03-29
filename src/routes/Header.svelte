<script>
	import github from '$lib/images/github.svg';
</script>

<header>
	<div class="titlebar">
		<ul>
			<h1>The Mixtape Engine</h1>
		</ul>
	</div>

	<div class="corner">
		<a href="https://github.com/joemackle/MixtapeEngine">
			<img src={github} alt="GitHub" />
		</a>
	</div>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
	}

	.corner {
		width: 3em;
		height: 3em;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner img {
		width: 2em;
		height: 2em;
		object-fit: contain;
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
		width: 60%;
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
		color: var(--color-theme-1);
	}
</style>
