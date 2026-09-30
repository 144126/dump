<script lang="ts">
	import './layout.css';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href="/favicon.svg" /></svelte:head>
<div class="min-h-dvh bg-paper font-sans text-ink">
	{@render children()}
</div>
