<script lang="ts">
	import { dark } from '$lib/store'
	import { onMount } from 'svelte'

	let htmlElement: HTMLElement
	onMount(() => {
		htmlElement = document.documentElement
	})

	$: htmlElement?.classList.toggle('dark', $dark)
</script>

<main class="container mx-auto p-8 flex flex-col items-center">
	<slot />
</main>

<style lang="postcss" global>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	body {
		@apply transition-colors duration-300;
		@apply subpixel-antialiased text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-black dark:bg-opacity-95;
		@apply leading-normal tracking-normal text-base font-normal break-words;
		@apply min-h-screen min-w-full overflow-auto;
	}
</style>
