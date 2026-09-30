<script lang="ts">
	const items = [
		{ href: '/festus-preachers/contradictions', label: 'festus / contradictions' },
		{ href: '/festus-preachers/slides', label: 'festus / slides' }
	];
</script>

<svelte:head>
	<title>dump</title>
</svelte:head>

<main class="mx-auto max-w-xl px-5 py-16">
	<h1 class="text-2xl font-medium tracking-tight">dump</h1>
	<p class="mt-2 text-muted">random things to share. probably temp.</p>
	<ul class="mt-10 space-y-3">
		{#each items as item (item.href)}
			<li>
				<a class="underline decoration-rule underline-offset-4 hover:decoration-ink" href={item.href}
					>{item.label}</a
				>
			</li>
		{/each}
	</ul>
</main>
