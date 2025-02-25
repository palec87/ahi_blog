<script>
    import PartnerCard from '../components/PartnerCard.svelte';

    const partner = {
        name: 'Python club at UAlg, CCMAR',
        description: 'Scientific computing, data science and bioinformatics clinic at UAlg',
        image: '/logo_pythonclub_white.png',
        website: 'https://example.com',
        linkedin: 'https://linkedin.com'
    };
</script>

<main class="flex flex-col min-h-screen justify-center bg-cover bg-center" style="background-image: url('/beach_pier.png');">
    <!-- <div class="mx-auto max-w-2xl p-8 text-center"> -->
	<div class="w-full p-8 text-center align-top">
        <h1 class="mb-6 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-5xl font-bold text-red-400">
            Welcome to Algarve's Human Intelligence (AHI) tech blog
        </h1>
		<p class="text-lg text-red-300">
			This is a collection of the real tech real people in Algarve command and can you help implement. Collaborate, learn, buy it from them.
			If you want to contribute, contact us at <a href="mailto:ddthumb@gmail.com">ddthumb@gmail.com</a>.
		</p>
	</div>
		<div class="flex-grow flex items-center justify-center">
			
			<div class="mx-auto max-w-2xl p-8 text-center bg-opacity-50 rounded-lg">
			<p class="mb-8 text-lg text-gray-300">
				This is the homepage of my personal website. Feel free to explore!
			</p>

			<a
				href="/blog"
				class="inline-block rounded-lg bg-emerald-500 px-6 py-3 font-medium text-white transition-colors duration-200 hover:bg-emerald-600 hover:shadow-lg"
			>
				Visit the blog
			</a>
			<div class="flex-grow flex items-center justify-center">
				<PartnerCard {partner} />
			</div>
		</div>
    </div>
</main>

<style>
    :global(body) {
        font-family: 'Inter', sans-serif;
        background-color: #1a202c;
        color: #e2e8f0;
    }
</style>
