<script lang="ts">
  import { goto } from "$app/navigation";
  import { create } from "../../utils/api";
  import { FilesToPDF } from "../../utils/pdf";
  $: loading = false;
  $: error = "";
  $: modeImage = false;
  let handleCreate = async (event: any) => {
    error = "";
    loading = true;
    event.preventDefault();
    const formData = new FormData(event.target);
    let files: FormDataEntryValue[] = formData.getAll("file");
    if (files.length === 0) {
      loading = false;
      return; // Early return if file is not present
    }

    const fileUpload = new FormData();
    if (modeImage) {
      const pdfDataUrl = await FilesToPDF(files);

      // Convert data URL to a Blob
      const response = await fetch(pdfDataUrl);
      const pdfBlob = await response.blob();

      fileUpload.append("file", pdfBlob);
    } else {
      fileUpload.append("file", files[0] as Blob);
    }

    // Upload PDF
    const images = await create("lessons/upload", fileUpload);
    if (!Array.isArray(images.images) || images.images.length === 0) {
      loading = false;
      error = "Error while uploading this pdf please try again";
      return; // Handle case where images are not uploaded correctly
    }

    // Create lesson
    const payload = {
      name: formData.get("title")?.toString() || "",
      description: formData.get("description")?.toString() || "",
      lesson: images.images,
      grade: formData.get("grade"),
      subject: formData.get("subject"),
      tags: (formData.get("tags") as string).replaceAll(" ", "").split(","),
    };
    console.log(payload);

    try {
      const lesson = await create("lessons", payload);
      if (!lesson._id) return new Error("Unkown Error");
      goto("/lesson/" + lesson._id);
    } catch (error: any) {
      (error = "Failed to create lesson:"), error.message;
    } finally {
      loading = false;
    }
  };
  export let toggelCreate: () => {};
  export let isHidden: boolean;
</script>

<aside
  class="fixed left-0 top-0 min-h-screen max-w-md w-full pt-20 bg-white border-r-2 border-[#ddd]"
  hidden={isHidden}
>
  <div
    class="w-full flex justify-center px-2 items-center h-full flex-col gap-4 relative"
  >
    <button
      class="close absolute right-5 top-0 bg-red-300 w-fit"
      on:click={toggelCreate}
    >
      close
    </button>
    <h1 class="text-xl font-semibold">Create A Lesson</h1>
    <form
      class="rounded-xl items-center max-w-sm w-full flex flex-col gap-4 h-fit"
      enctype="multipart/form-data"
      on:submit={handleCreate}
    >
      {#if error}
        <p class="error">{error}</p>
      {/if}
      <div class="flex w-full">
        <label for="">Images mode</label>
        <input
          type="checkbox"
          name=""
          id=""
          checked={modeImage}
          on:change={() => (modeImage = !modeImage)}
        />
      </div>
      {#if !modeImage}
        <div class="flex flex-col w-full">
          <label for="" class="text-gray-600">Pdf File</label>
          <input type="file" name="file" accept=".pdf" />
        </div>
      {:else}
        <div class="flex flex-col w-full">
          <label for="" class="text-gray-600">Image File</label>
          <input
            type="file"
            name="file"
            multiple
            accept=".png,.jpg,.jpeg"
            required
          />
        </div>
      {/if}
      <div class="flex flex-col w-full">
        <label for="" class="text-gray-600">Lesson Title</label>
        <input
          type="text"
          id=""
          class="max-w-sm py-2 px-2 border border-[#ddd] outline-purple-600"
          name="title"
        />
      </div>
      <div class="flex flex-col w-full">
        <label for="" class="text-gray-600">Lesson Description</label>
        <textarea
          id=""
          class="max-w-sm py-2 px-2 border border-[#ddd] outline-purple-600"
          name="description"
        />
      </div>
      <div class="flex flex-col w-full">
        <label for="" class="text-gray-600">Grade</label>
        <select
          name="grade"
          id=""
          class="py-2 border border-[#ddd] outline-purple-600 px-2"
        >
          <option value="7eme">7eme</option>
          <option value="8eme">8eme</option>
          <option value="9eme">9eme</option>
        </select>
      </div>
      <div class="flex flex-col w-full">
        <label for="" class="text-gray-600">Subject</label>
        <select
          name="subject"
          id=""
          class="py-2 border border-[#ddd] outline-purple-600 px-2"
        >
          <option value="math">math</option>
          <option value="phisic">phisic</option>
          <option value="arabic">arabic</option>
        </select>
      </div>
      <div class="flex flex-col w-full">
        <label for="" class="text-gray-600">tags(seperate by ,)</label>
        <input
          type="text"
          required
          id=""
          class="max-w-sm py-2 px-2 border border-[#ddd] outline-purple-600"
          name="tags"
        />
      </div>
      <button class="btn w-full max-w-sm bg-purple-600 text-white py-2"
        >{loading ? "Loading" : "Create"}</button
      >
    </form>
  </div>
</aside>
