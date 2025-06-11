<script>
	export let nombre;
	let count = 1;

	function incrementar() {
		count += 1;
	}
</script>

<h1>Hola {nombre} {count}</h1>

<button on:click={incrementar} class="border-b-cyan-950 border p-2"
	>Incrementar</button
>
