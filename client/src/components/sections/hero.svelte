<script lang="ts">
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";
  let search = (e: any) => {
    e.preventDefault();
    let f = e.target;
    let q = new FormData(f).get("title");
    if (q) {
      $page.url.searchParams.set("q", q as string);
      goto("/" + $page.url.search + "#search", { invalidateAll: true });
    } else {
      $page.url.searchParams.delete("q");
      goto("/" + $page.url.search + "#search", { invalidateAll: true });
    }
  };
</script>

<div class="hero w-full min-h-screen">
  <div
    class="bg absolute left-0 h-0 w-full min-h-screen bg-[#678e78] -z-10"
  ></div>
  <section class="pt-44 text-center text-white">
    <h1 class="text-5xl font-extrabold max-md:text-2xl">
      Understand More, Study Less
    </h1>
    <p class="text-lg mt-3 max-md:text-sm">
      Find top-rated study notes from students <br /> taking the same courses as
      you.
    </p>
    <form
      on:submit={search}
      class="search relative w-[520px] h-fit mx-auto max-md:px-6 max-md:w-full"
    >
      <input
        placeholder="Searth the internet..."
        type="text"
        name="title"
        class="input mt-6 min-w-full"
      />
      <button class="absolute right-5 top-2/4 w-fit h-fit">
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
          class="svg-inline--fa w-6 text-gray-400 h-6"
          ><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg
        >
      </button>
    </form>
  </section>
</div>

<style>
  .input {
    min-height: 50px;
    padding: 12px;
    border-radius: 12px;
    border: 1.5px solid white;
    outline: none;
    color: #000;
    transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1);
    /* box-shadow: 0px 0px 20px -18px; */
  }

  .input:hover,
  .input:focus {
    border: 2px solid #ddd;
    /* box-shadow: 0px 0px 20px -17px; */
  }

  .input:active,
  .input:focus {
    transform: scale(0.95);
  }

  .input:focus {
    border: 2px solid #ddd;
  }
  .input + button {
    right: 2rem;
  }
</style>
