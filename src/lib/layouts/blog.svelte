<script>
	let { title, children } = $props();
</script>

<main class="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
	<div class="mx-auto max-w-2xl p-8">
		<a
			href="/blog"
			class="inline-block rounded-lg bg-emerald-500 px-4 py-2 font-medium text-white transition-colors duration-200 hover:bg-emerald-600 hover:shadow-lg"
		>
			&larr; Back to Blog
		</a>

		<h1
			class="my-8 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-4xl font-bold text-transparent"
		>
			{title}
		</h1>

		<article
			class="prose prose-invert prose-emerald prose-headings:text-slate-200 mx-auto text-white"
		>
			{@render children?.()}
		</article>
	</div>
</main>

<style>
	:global(.prose) {
		max-width: 100%;
	}

	:global(.prose img) {
		display: block;
		margin: 2rem auto;
		border-radius: 0.5rem;
	}

	:global(.prose a) {
		color: rgb(52 211 153);
		text-decoration: none;
	}

	:global(.prose a:hover) {
		color: rgb(16 185 129);
	}
</style>
