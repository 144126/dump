<script lang="ts">
	let { data, form } = $props();
</script>

<svelte:head>
	<title>private</title>
</svelte:head>

<main class="mx-auto max-w-xl px-5 py-16">
	<p class="text-sm text-muted">
		<a class="underline decoration-rule underline-offset-4 hover:decoration-ink" href="/">dump</a>
	</p>
	<h1 class="mt-6 text-2xl font-medium tracking-tight">private</h1>

	{#if !data.o}
		<form class="mt-10" method="post">
			<label class="block">
				<span class="text-sm text-muted">number</span>
				<input
					class="mt-2 block w-full max-w-xs border border-rule bg-paper px-3 py-3 text-2xl tracking-widest outline-none focus:border-ink"
					type="number"
					inputmode="numeric"
					autocomplete="off"
					name="n"
				/>
			</label>
			{#if form?.w}
				<p class="mt-3 text-sm text-mark">wrong</p>
			{/if}
		</form>
	{:else}
		<ul class="mt-10 space-y-3">
			{#each data.files as f (f.s)}
				<li>
					<a
						class="underline decoration-rule underline-offset-4 hover:decoration-ink"
						href="/private/{f.s}">{f.n}</a
					>
				</li>
			{/each}
		</ul>
	{/if}
</main>
