<script lang="ts">
  import { goto } from "$app/navigation";

  export let togglSearch: () => {};
  let handleSearch = (e: any) => {
    e.preventDefault();
    let f = e.target;
    let q = new FormData(f).get("title");
    if (q) {
      goto("/search?q=" + q);
    }
    togglSearch();
  };
</script>

<div class="fixed w-screen h-screen left-0 top-0 pt-6">
  <a
    class="bg absolute left-0 top-0 z-10 backdrop-blur-md bg-opacity-5 bg-black w-screen h-full text-transparent"
    on:click={togglSearch}
    href="#search">l</a
  >
  <div class="popUp relative z-20 max-w-2xl mx-auto p-2 rounded">
    <form
      on:submit={handleSearch}
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
