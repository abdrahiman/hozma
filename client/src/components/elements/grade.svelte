<script lang="ts">
  export let grade;
  $: opened = false;
  let handleClick = (e: any) => {
    if (grade.sub.length != 0) {
      e.preventDefault();
      opened = !opened;
    }
  };
</script>

<button class="min-w-full h-full flex flex-col">
  <a
    href={"/search?grade=" + grade.name}
    on:click={handleClick}
    class="min-w-full py-2 text-center rounded-2xl border-solid border-4 font-bold bg-opacity-40"
    style="background-color: {grade.color};border-color: {grade.color};border-bottom-color: {grade.color};"
    >{grade.name}</a
  >
  {#if opened}
    <div class="flex w-full flex-col items-start gap-2 bg-white rounded-md p-2">
      {#each grade.sub as sub}<a href={"/search?grade=" + sub.name}
          >{sub.name}</a
        >{/each}
    </div>
  {/if}
</button>
