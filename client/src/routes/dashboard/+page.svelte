<script lang="ts">
  import Create from "../../components/sections/create.svelte";
  import Edite from "../../components/sections/edite.svelte";
  $: openCreate = false;
  $: openEdite = true;
  let toggelCreate = () => (openCreate = !openCreate);
  let toggelEdite = (lesson?: any) => {
    if (openEdite) {
      editeData = null;
    } else {
      editeData = lesson;
    }
    openEdite = !openEdite;
  };

  export let data;
  $: lessons = data.lessons;
  $: editeData = null;
</script>

<div class="mt-4 flex flex-col gap-4 max-w-md items-start mx-auto">
  <Create isHidden={openCreate} {toggelCreate} />
  <button class="bg-purple-500 px-4 py-2" on:click={toggelCreate}
    >Create A lesson</button
  >
  <div class="flex flex-col gap-4 items-start">
    {#each lessons as lesson}
      <button
        on:click={() => toggelEdite(lesson)}
        class="flex gap-4 w-full justify-start"
      >
        <div class="image w-32 h-20 rounded-md overflow-hidden">
          <img class="w-full h-full" src={lesson.lesson[0]} alt="" />
        </div>
        <div class="flex-col flex gap-2">
          <span>{lesson.name}</span>
          <span>{lesson.subject}</span>
        </div>
      </button>
    {/each}
    <Edite {toggelEdite} isHidden={openEdite} lesson={editeData} />
  </div>
</div>
