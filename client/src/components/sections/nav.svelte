<script lang="ts">
  import Search from "./search.svelte";
  $: search = false;
  let togglSearch = () => (search = !search);
</script>

<nav
  class="h-14 bg-white w-full px-[calc((100vw-80rem)/2)] max-md:px-4 flex items-center sticky top-0 left-0 z-30 justify-between border-b border-b-[#ddd]"
>
  {#if search}<Search {togglSearch} />{/if}
  <div class="logo">
    <a href="/">
      <img
        src="https://laimuna-reviews.imgix.net/lr/logo-with-text.svg?auto=format&fit=max&w=128"
        alt="logo"
        class="h-6"
      />
    </a>
  </div>
  <div class="w-fit flex gap-4">
    <button
      on:click={togglSearch}
      class="search bg-[#f3f4f6] rounded-full p-2 w-fit"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="svg-inline--fa w-6 text-gray-700 h-6"
        ><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg
      >
    </button>
    <a href="/login">
      <button class="user bg-[#f3f4f6] rounded-full p-2 w-fit">
        <svg
          class="h-6 w-6 text-gray-700"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
          ><path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12ZM12 14C9.87827 14 8.00001 15.8783 8.00001 18H16C16 15.8783 14.1217 14 12 14ZM4 18C4 14.6863 7.58172 12 12 12C16.4183 12 20 14.6863 20 18V20H4V18Z"
          ></path></svg
        >
      </button>
    </a>
  </div>
</nav>
