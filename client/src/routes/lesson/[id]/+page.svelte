<script lang="ts">
  import Image from "../../../components/elements/image.svelte";
  import toPDF from "../../../utils/pdf.js";

  export let data;
  $: i = 0;
  $: loading = false;
  let donwloadPdf = async () => {
    loading = true;
    let pdfUrl = await toPDF(data.lesson.lesson);
    let a = document.createElement("a");
    a.href = pdfUrl;
    a.download = data.lesson.name + ".pdf";
    loading = false;
    a.click();
    a.remove();
  };

  function next() {
    if (data.lesson.lesson.length - 1 > i) {
      i++;
    }
  }

  function prev() {
    if (i != 0) {
      i--;
    }
  }
  $: modeFull = true;
</script>

<svelte:head>
  <title>{data.lesson.name}</title>
</svelte:head>

<div class="page w-full h-full pt-12 pb-6">
  <div class="mx-auto flex items-start gap-4 w-full max-md:flex-col-reverse">
    <div class="info max-w-sm w-full flex gap-4 flex-col">
      <h1 class="text-xl font-bold capitalize">{data.lesson.name}</h1>
      <p class="my-2">{data.lesson.description}</p>
      <div class="col flex w-full gap-4">
        <span class="">Year:</span>
        <span class="">{new Date(data.lesson.createdAt).getFullYear()}</span>
      </div>
      <div class="col flex w-full gap-4">
        <span class="">Tags:</span>
        <span class="">{data.lesson.tags}</span>
      </div>
      <div class="col flex w-full gap-4">
        <span class="">Subject:</span>
        <span class="">{data.lesson.subject}</span>
      </div>
      <div class="left">
        <button class="btn bg-purple-500 px-4 py-2" on:click={donwloadPdf}>
          <span>{loading ? "Loading" : "Download"}</span>
        </button>
      </div>
    </div>
    <aside class="flex flex-col gap-2 w-full items-center">
      <div
        class="h-10 z-20 text-black bg-[#ddd] px-4 max-w-fit rounded-full flex gap-2 items-center"
      >
        <button on:click={prev} class="p-1 rounded-full h-fit bg-white"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-arrow-left"
            ><path d="m12 19-7-7 7-7" /><path d="M19 12H5" /></svg
          ></button
        >
        <div class="flex min-w-fit items-center gap-2 pr-2">
          {i + 1 + " out of " + data.lesson.lesson.length}
        </div>

        <button class="p-1 rounded-full h-fit bg-white" on:click={next}
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-arrow-right"
            ><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg
          ></button
        >
      </div>
      <button
        class="reader w-full max-h-[calc(100vh-10rem)] overflow-auto bg-white border border-[#ddd] relative rounded-xl max-w-5xl flex items-center flex-col justify-start cursor-zoom-in"
        on:click={() => (modeFull = !modeFull)}
      >
        <Image
          src={data.lesson.lesson[i]}
          alt={data.lesson.name}
          className="w-fit relative z-10 {!modeFull
            ? 'object-contain max-h-[calc(100vh-10rem-4rem)]'
            : 'min-h-fit w-full object-cover'}"
        />
      </button>
    </aside>
  </div>
</div>

<style>
  button.down {
    font-family: inherit;
    font-size: 17px;
    background: #212121;
    color: white;

    fill: rgb(155, 153, 153);
    padding: 0.4em 0.8em;
    display: flex;
    align-items: center;
    cursor: pointer;
    border: none;
    border-radius: 15px;
    font-weight: 1000;
  }

  button.down span {
    display: block;
    margin-left: 0.1em;
    transition: all 0.3s ease-in-out;
  }

  button.down svg {
    display: block;
    transform-origin: center center;
    transition: transform 0.3s ease-in-out;
  }

  button.down:hover {
    background: #000;
  }

  button.down:hover .svg-wrapper {
    transform: scale(1.25);
    transition: 0.5s linear;
  }

  button.down:hover svg {
    transform: translateX(1.2em) scale(1.1);
    fill: #fff;
  }

  button.down:hover span {
    opacity: 0;
    transition: 0.5s linear;
  }

  button.down:active {
    transform: scale(0.95);
  }
</style>
