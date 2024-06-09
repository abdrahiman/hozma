<script lang="ts">
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";
  import Card from "../components/elements/card.svelte";
  import Hero from "../components/sections/hero.svelte";
  export let data;
  $: lessons = data.lessons;
</script>

<!-- <Hero /> -->
<section class="w-full h-full">
  <h2 class="text-2xl my-4 font-bold text-center mb-6">Lessons</h2>
  <main class="grid grid-cols-3 gap-4 justify-start my-6">
    {#if lessons}
      {#each lessons as lesson}
        <Card {lesson} />
      {/each}
    {/if}
  </main>
</section>
