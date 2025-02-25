<script>
    let { title, children } = $props();
</script>

<main class="min-h-screen bg-gradient-to-br from-bg-start to-bg-end">
    <div class="mx-auto max-w-2xl p-8">
        <a
            href="/blog"
            class="inline-block rounded-lg bg-primary px-4 py-2 font-medium text-on-primary transition-colors duration-200 hover:bg-primary-hover hover:shadow-lg"
        >
            &larr; Back to Blog
        </a>

        <h1
            class="my-8 bg-gradient-to-r from-title-start to-title-end bg-clip-text text-4xl font-bold text-transparent"
        >
            {title}
        </h1>

        <article
            class="prose prose-invert prose-emerald prose-headings:text-heading mx-auto text-on-background"
        >
            {@render children?.()}
        </article>
    </div>
</main>

<style>
    :global(:root) {
        --bg-start: #f0f4f8;
        --bg-end: #d9e2ec;
        --primary: #1a202c;
        --primary-hover: #2d3748;
        --on-primary: #ffffff;
        --title-start: #2b6cb0;
        --title-end: #3182ce;
        --heading: #2d3748;
        --on-background: #1a202c;
    }

    :global(:root[data-theme='dark']) {
        --bg-start: #1a202c;
        --bg-end: #2d3748;
        --primary: #38b2ac;
        --primary-hover: #319795;
        --on-primary: #ffffff;
        --title-start: #38b2ac;
        --title-end: #319795;
        --heading: #e2e8f0;
        --on-background: #e2e8f0;
    }

    :global(.prose) {
        max-width: 100%;
    }

    :global(.prose img) {
        display: block;
        margin: 2rem auto;
        border-radius: 0.5rem;
    }

    :global(.prose a) {
        color: var(--primary);
        text-decoration: none;
    }

    :global(.prose a:hover) {
        color: var(--primary-hover);
    }
</style>
