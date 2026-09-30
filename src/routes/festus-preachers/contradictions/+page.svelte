<script lang="ts">
	import { items } from '#lib/contradictions.js';
</script>

<svelte:head>
	<title>festus / contradictions</title>
</svelte:head>

<main class="mx-auto max-w-2xl px-5 py-12">
	<p class="text-sm text-muted">
		<a class="underline decoration-rule underline-offset-4 hover:decoration-ink" href="/">misc</a>
		<span class="mx-2">/</span>
		<a
			class="underline decoration-rule underline-offset-4 hover:decoration-ink"
			href="/festus-preachers/slides">slides</a
		>
	</p>
	<h1 class="mt-6 text-2xl font-medium tracking-tight">ten contradictions</h1>
	<p class="mt-3 text-muted">
		from miracle festus, "retracing the scriptural position of the preacher and the church". 27
		slides. seven are clear. three are weaker. the biggest is that it says the preacher is not hired
		or paid, then lays out how to hire and pay him.
	</p>
	<p class="mt-3 text-muted">
		slide numbers are the ones printed on the slides.
		<a class="underline decoration-rule underline-offset-4 hover:decoration-ink" href="/festus-preachers/slides"
			>read the slides</a
		>.
	</p>

	<ol class="mt-12 space-y-14">
		{#each items as item (item.n)}
			<li>
				<p class="text-sm text-muted">
					{item.n < 10 ? `0${item.n}` : item.n}
					{#if item.w}<span class="ml-2">weaker</span>{/if}
				</p>
				<h2 class="mt-1 text-xl font-medium tracking-tight">{item.t}</h2>
				<p class="mt-4">{item.a}</p>
				<p class="mt-3">{item.b}</p>
				<p class="mt-3 text-mark">why they clash: {item.w_why}</p>
			</li>
		{/each}
	</ol>

	<section class="mt-16 border-t border-rule pt-10">
		<h2 class="text-xl font-medium tracking-tight">one last thing, from outside the pdf</h2>
		<p class="mt-4">
			some of the verses it cites also cut against it. for example, second corinthians 11, verse 8,
			which is cited on slide 21, has paul say he took "wages" from churches.
		</p>
	</section>

	<section class="mt-16 border-t border-rule pt-10">
		<h2 class="text-xl font-medium tracking-tight">moves around, versus stays</h2>
		<p class="mt-4">
			both ideas are in the file. the "moves around" idea is on pages 13 and 22. the "stays with one
			church" idea is on pages 23 and 24.
		</p>
		<p class="mt-4">
			the preacher moves around. page 22: he "preaches round the world" (rom.15:20). he is not "a
			restricted employee/staff of a single congregation". page 13: faithful men "could be sent to
			go further sow in the field". the examples are timothy, sent to corinth, philippi and
			thessalonica, and tychicus, sent to ephesus and colossae. page 24: a preacher can leave one
			church to work with another. the examples are titus going to corinth and apollos going to
			achaia.
		</p>
		<p class="mt-4">
			the preacher stays with one church. page 24: "every congregation ought to have a minister
			serving with her to carry out duties of sound faith and sound doctrine." page 23: a church
			sees what it lacks and asks for a minister. or it picks one of its own members to take the
			role. page 13: "titus left in crete" (titus 1:5). this is a preacher kept in one place.
		</p>
		<p class="mt-4">
			how the author tries to fit them together. page 22: "preacher of our congregation" only names
			where he is teaching "at the particular time". it does not mean the church owns him. so in the
			author's view, a preacher can serve one church for a while and still be free to go elsewhere.
			the file never says how long a preacher should stay. it also never says who decides when he
			leaves.
		</p>
	</section>

	<section class="mt-16 border-t border-rule pt-10">
		<h2 class="text-xl font-medium tracking-tight">complacency</h2>
		<p class="mt-4">
			in this file, "complacency" means a lazy, comfortable, "not my job" attitude toward the gospel
			work. it comes from treating the preacher as a paid employee who belongs to one congregation.
		</p>
		<p class="mt-4">
			the word shows up once, at line 278 (page 22, "ownership (of)"): "...getting rid of such
			tradition/mindset that the minister is paid/employed to do the work strengthens the unity of
			the church in the fellowship of the gospel, than sustaining complacency."
		</p>
		<p class="mt-4">
			what it points to, from the text around it. the members sit back. if the church "employs" the
			preacher, members can think, "we pay him, so he does the work." page 21 says the church's real
			duty is to support a preacher (1cor.9:14, gal.6:6), not to hire one.
		</p>
		<p class="mt-4">
			each congregation keeps "its" preacher. phrases like "our minister" can turn into ownership,
			as if he were a staff member of one church only. the author says the preacher belongs to god
			and "preaches round the world" (rom.15:20).
		</p>
		<p class="mt-4">
			the opposite is shared work. the author sets complacency against "unity of the church in the
			fellowship of the gospel". that means everyone taking part in the gospel work together.
		</p>
		<p class="mt-4 text-muted">
			note: the file never defines the word. this reading comes from the sentence and the sections
			just before it. the phrase "than sustaining complacency" is loosely worded. it most likely
			means "instead of keeping that complacency going".
		</p>
	</section>
</main>
