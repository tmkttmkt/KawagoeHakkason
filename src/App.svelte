<script>
	let count = 0;

	function increment() {
		count += 1;
	}
</script>

<main>
	<h1>カワゴエ</h1>
	<p>{count}</p>
	<button on:click={increment}>Increment</button>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		margin: 0 auto;
		max-width: 240px;
	}

	h1 {
		font-size: 2em;
		color: #333;
	}

	button {
		background-color: #333;
		color: white;
		border: none;
		padding: 0.5em 1em;
		font-size: 1em;
		cursor: pointer;
	}

	button:hover {
		background-color: #555;
	}
</style>
