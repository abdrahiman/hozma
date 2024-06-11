<script>
  import { page } from "$app/stores";
  import axios from "axios";
  import "../app.css";
  import Nav from "../components/sections/nav.svelte";

  axios.defaults.headers.common = {
    Authorization: `Bearer ${$page.data.access_token}`,
  };
</script>

<div class="w-full relative h-full root">
  <Nav />
  <div class="page w-full h-full max-w-7xl mx-auto max-md:px-2">
    <slot />
  </div>
</div>
