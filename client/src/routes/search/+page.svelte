<script lang="ts">
  import Card from "../../components/elements/card.svelte";
  import { page } from "$app/stores";

  export let data;
  $: lessons = data.props.lessons;
</script>

<h3 class="text-xl">{">" + $page.url.searchParams.get("q")}</h3>
<main class="grid grid-cols-3 gap-4 justify-start my-6 mt-6">
  {#if lessons}
    {#each lessons as lesson}
      <Card {lesson} />
    {/each}
  {/if}
</main>
