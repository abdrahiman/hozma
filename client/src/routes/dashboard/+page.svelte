<script lang="ts">
  import { goto } from "$app/navigation";
  import { create } from "../../utils/api";
  $: loading = false;
  $: error = "";

  let handleCreate = async (event: any) => {
    error = "";
    loading = true;
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const file = formData.get("file");
    if (!file) {
      loading = false;
      return; // Early return if file is not present
    }

    const fileUpload = new FormData();
    fileUpload.append("file", file as Blob);

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
      // Optionally, handle the error in UI
    } finally {
      loading = false;
    }
  };
</script>

<div
  class="w-full flex justify-center px-2 items-center min-h-screen flex-col -mt-24 gap-4 h-fit pt-16"
>
  <h1 class="text-xl font-semibold">Create A Lesson</h1>
  <form
    class="rounded-xl items-center max-w-sm w-full flex flex-col gap-4 h-fit"
    enctype="multipart/form-data"
    on:submit={handleCreate}
  >
    {#if error}
      <p class="error">{error}</p>
    {/if}
    <div class="flex flex-col w-full">
      <label for="" class="text-gray-600">Pdf File</label>
      <input type="file" name="file" accept=".pdf" required />
    </div>
    <div class="flex flex-col w-full">
      <label for="" class="text-gray-600">Lesson Title</label>
      <input
        type="text"
        required
        id=""
        class="max-w-sm py-2 px-2 border border-[#ddd] outline-purple-600"
        name="title"
      />
    </div>
    <div class="flex flex-col w-full">
      <label for="" class="text-gray-600">Lesson Description</label>
      <textarea
        required
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
