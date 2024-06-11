<script lang="ts">
  import Card from "../components/elements/card.svelte";
  import Grade from "../components/elements/grade.svelte";
  export let data;
  $: lessons = data.lessons;
  let grades = [
    {
      name: "1bac",
      color: "orange",
      sub: [{ name: "SX" }, { name: "LX" }],
    },
    {
      name: "2bac",
      color: "green",
      sub: [{ name: "SX" }, { name: "LX" }],
    },
  ];
</script>

<svelte:head>
  <title>Best website to get summerices</title>
</svelte:head>

<div
  class="grades flex flex-col mx-auto max-w-xl items-center justify-start mt-4 gap-4"
>
  {#each grades as grade}
    <Grade {grade} />
  {/each}
</div>
<section class="w-full h-full">
  <h2 class="text-2xl my-4 font-bold text-center mb-6">Lessons</h2>
  <main
    class="grid grid-cols-3 max-sm:grid-cols-1 max-md:grid-cols-2 gap-2 justify-start my-6"
  >
    {#if lessons}
      {#each lessons as lesson}
        <Card {lesson} />
      {/each}
    {/if}
  </main>
</section>
