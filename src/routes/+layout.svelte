<script>
	import "../app.postcss";
	import { info } from "./docs";
	import { Header, Footer } from "@rossrobino/components";
</script>

<svelte:head>
	<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
	<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
	<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
	<link rel="manifest" href="/site.webmanifest" />
	<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#18181b" />
	<meta name="msapplication-TileColor" content="#f4f4f5" />
	<meta name="theme-color" content="#18181b" />
</svelte:head>

<Header {info}>
	<li class="ml-0"><a href="/">Docs</a></li>
	<li class="ml-4"><a href="/create">Create</a></li>
</Header>

<main class="md:mx-4 flex justify-center">
	<div class="basis-full md:basis-[768px]">
		<slot />
	</div>
</main>

<Footer {info} />
