<script lang="ts">
import { dark } from '$lib/store';

</script>

<h1>Wassup</h1>
<p>
	Visit <a class="text-blue-600 underline" href="https://kit.svelte.dev">kit.svelte.dev</a> to read the
	documentation
</p>
<button class="my-4 rounded px-4 py-2 transition ring-1 focus:ring hover:ring focus:outline-none" on:click={() => $dark = !$dark}>toggle dark mode</button>