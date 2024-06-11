<script lang="ts">
  import Card from "../../components/elements/card.svelte";
  import { page } from "$app/stores";

  export let data;
  $: lessons = data.props.lessons;
</script>

<h3 class="text-xl my-4">
  {"> "}
  <a href={"/search?grade=" + $page.url.searchParams.get("grade")}
    >{$page.url.searchParams.get("grade") || ""}</a
  >
  <span>{$page.url.searchParams.get("q") || ""}</span>
  <span
    >{$page.url.searchParams.get("subject")
      ? " > " + $page.url.searchParams.get("subject")
      : ""}</span
  >
</h3>

<svelte:head>
  <title>Search for: {$page.url.searchParams.get("q")}</title>
</svelte:head>

{#if $page.url.searchParams.get("grade") && !$page.url.searchParams.get("subject")}
  <div class="flex w-full">
    <div
      class="border-transparent border-b-gray-400 border-8 border-t-blue-600 rounded-xl p-2 px-6 flex items-center flex-col gap-2"
    >
      <img
        class="w-16 h-16"
        src="https://www.kezakoo.com/wp-content/themes/awesome_theme/images/CourseIcons/physique_icon.svg"
        alt=""
      />
      <span class="text-md"> Physique Chimie </span>
      <a
        href={"/search" + $page.url.search + "&subject=physique-chimie"}
        class="border-2 border-black rounded-full px-6 py-2">Study</a
      >
    </div>
  </div>
{:else if $page.url.searchParams.get("q") || ($page.url.searchParams.get("grade") && $page.url.searchParams.get("subject"))}
  <main class="grid grid-cols-3 gap-4 justify-start my-6 mt-6">
    {#if lessons}
      {#each lessons as lesson}
        <Card {lesson} />
      {/each}
    {/if}
  </main>
{/if}
