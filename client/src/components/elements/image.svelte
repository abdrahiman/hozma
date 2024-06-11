<script lang="ts">
  import axios from "axios";
  import { onMount } from "svelte";
  export let src: string;
  export let className: string;
  export let alt: string;

  $: loaded = false;
  $: failed = false;
  $: loading = false;

  $: if (src) {
    loading = true;
    loaded = false;
    axios
      .get(src)
      .then(() => {
        loading = false;
        loaded = true;
      })
      .catch(() => {
        loading = false;
        failed = true;
      });
  }
</script>

{#if loaded}
  <img {src} {alt} class={className} />
{:else if failed}
  <img
    src="https://icon-library.com/images/not-found-icon/not-found-icon-20.jpg"
    alt="Not Found"
    class={className}
  />
{:else if loading}
  <img
    class={className + " p-12"}
    src="https://c.tenor.com/On7kvXhzml4AAAAi/loading-gif.gif"
    alt="Loading..."
  />
{/if}
