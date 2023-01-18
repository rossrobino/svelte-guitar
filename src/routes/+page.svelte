<script lang="ts">
	import { Docs } from "@rossrobino/components";
	import { info, componentList } from "./docs";
</script>

<svelte:head>
	<title>{info.packageName}</title>
	<meta name="description" content="Common components for guitar playing" />
	<meta
		name="keywords"
		content="Ross, Robino, guitar, chord, Svelte, components"
	/>
</svelte:head>

<main>
	<Docs {info} {componentList} />
</main>
