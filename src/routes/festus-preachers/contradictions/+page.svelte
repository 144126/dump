<script lang="ts">
	let { data } = $props();
</script>

<svelte:head>
	<title>festus / contradictions</title>
</svelte:head>

<main class="mx-auto max-w-2xl px-5 py-12">
	<p class="text-sm text-muted">
		<a class="underline decoration-rule underline-offset-4 hover:decoration-ink" href="/">dump</a>
		<span class="mx-2">/</span>
		<a
			class="underline decoration-rule underline-offset-4 hover:decoration-ink"
			href="/festus-preachers/slides">slides</a
		>
	</p>
	<h1 class="mt-6 text-2xl font-medium tracking-tight">contradictions</h1>
	<div class="mt-10 space-y-5 whitespace-pre-wrap">{data.t}</div>
</main>
