<script>
    import Header from "../lib/components/Header.svelte";
    import Footer from "../lib/components/Footer.svelte";
    import { fade } from "svelte/transition";

    export let data;
</script>

<style lang="postcss">
    @import "../lib/styles/style.css";
</style>

<Header />

{#key data.currentRoute}
<main in:fade={{ duration: 150, delay: 150}} out:fade={{ duration: 150 }}>
    <slot />
</main>
{/key}

<Footer />