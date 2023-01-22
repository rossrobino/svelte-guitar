<script lang="ts">
	import { Docs } from "@rossrobino/components";
	import { info, componentList } from "../docs";
</script>

<svelte:head>
	<title>{info.packageName}</title>
	<meta name="description" content="Common components for guitar playing" />
	<meta
		name="keywords"
		content="Ross, Robino, guitar, chord, Svelte, components"
	/>
</svelte:head>

<h1>Documentation</h1>

<Docs {info} {componentList} />
