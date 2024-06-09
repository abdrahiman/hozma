<script lang="ts">
  export let togglSearch: () => {};
</script>

<div class="fixed w-screen h-screen left-0 top-0 pt-6">
  <button
    class="bg absolute left-0 top-0 z-10 backdrop-blur-md bg-opacity-10 bg-black w-full h-full"
    on:click={togglSearch}
  ></button>
  <div class="popUp relative z-20 max-w-2xl mx-auto p-2 rounded">
    <form
      class="search w-full h-fit flex items-center bg-white rounded-md justify-center"
    >
      <input
        placeholder="Searth the internet..."
        type="text"
        name="title"
        class="input p-2 min-w-full h-12 rounded"
      />
    </form>
  </div>
</div>
