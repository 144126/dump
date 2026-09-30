<script lang="ts">
	let { data } = $props();

	const wait = 2160;
	let pin = $state<number | ''>('');
	let open = $derived(String(pin) === data.n);
	let text = $state(data.t);
	let st: 'i' | 's' | 'f' = $state('s'); // i=saving s=saved f=failed
	let timer = 0;

	function type() {
		clearTimeout(timer);
		st = 'i';
		timer = window.setTimeout(save, wait);
	}

	async function save() {
		st = 'i';
		const r = await fetch('/festus-preachers/contradictions/text', {
			method: 'PUT',
			headers: { 'content-type': 'text/plain; charset=utf-8', 'x-pin': String(pin) },
			body: text
		});
		st = r.ok ? 's' : 'f';
	}

	const label = { i: 'saving', s: 'saved', f: 'failed' };
</script>

<svelte:head>
	<title>festus / edit</title>
</svelte:head>

<main class="mx-auto flex min-h-dvh max-w-3xl flex-col px-5 py-12">
	<p class="text-sm text-muted">
		<a class="underline decoration-rule underline-offset-4 hover:decoration-ink" href="/">dump</a>
		<span class="mx-2">/</span>
		<a
			class="underline decoration-rule underline-offset-4 hover:decoration-ink"
			href="/festus-preachers/contradictions">contradictions</a
		>
	</p>
	<h1 class="mt-6 text-2xl font-medium tracking-tight">edit</h1>

	{#if !open}
		<label class="mt-10 block">
			<span class="text-sm text-muted">number</span>
			<input
				class="mt-2 block w-full max-w-xs border border-rule bg-paper px-3 py-3 text-2xl tracking-widest outline-none focus:border-ink"
				type="number"
				inputmode="numeric"
				autocomplete="off"
				name="n"
				bind:value={pin}
			/>
		</label>
	{:else}
		<div class="mt-6 flex items-center justify-between gap-4">
			<p class="text-sm text-muted">{label[st]} · writes 2160ms after you stop</p>
			<a
				class="text-sm underline decoration-rule underline-offset-4 hover:decoration-ink"
				href="/festus-preachers/contradictions">view</a
			>
		</div>
		<textarea
			class="mt-4 min-h-[70dvh] w-full flex-1 resize-y border border-rule bg-paper p-4 leading-7 outline-none focus:border-ink"
			bind:value={text}
			oninput={type}
		></textarea>
	{/if}
</main>
