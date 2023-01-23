<script lang="ts">
	import ChordDemo from "../ChordDemo.svelte";
	import { info } from "../docs";
</script>

<svelte:head>
	<title>{info.packageName} - Create</title>
	<meta name="description" content="Create svelte-guitar components." />
	<meta
		name="keywords"
		content="Ross, Robino, guitar, chord, Svelte, components, demo"
	/>
</svelte:head>

<h1>Create</h1>

<section>
	<h2 id=#chord>Chord</h2>
	<ChordDemo />
</section>
