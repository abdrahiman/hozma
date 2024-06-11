<script lang="ts">
  import { goto } from "$app/navigation";
  import { remove, update } from "../../utils/api";
  $: loading = false;
  $: error = "";
  export let toggelEdite: (l?: any) => void;
  export let lesson;
  export let isHidden;

  let handleEdite = async (event: any) => {
    error = "";
    loading = true;
    event.preventDefault();
    const formData = new FormData(event.target);

    // Create lesson
    const payload = {
      name: formData.get("title")?.toString() || "",
      description: formData.get("description")?.toString() || "",
      grade: formData.get("grade"),
      subject: formData.get("subject"),
      tags: (formData.get("tags") as string).replaceAll(" ", "").split(","),
    };

    try {
      const data = await update("lessons/" + lesson._id, payload);
      if (!data._id) return new Error("Unkown Error");
      goto("/dashboard");
    } catch (error: any) {
      error = "Failed to edite lesson:" + error.message;
    } finally {
      loading = false;
    }
  };

  let handleDelete = async () => {
    let r = await prompt(
      "Please know that this action is permanent so be carefull, type yes or no",
      "yes"
    );
    if (r?.toLocaleLowerCase() == "yes") {
      try {
        const data = await remove("lessons/" + lesson._id);
        if (!data._id) throw new Error("Unkown Error");
        goto("/dashboard");
      } catch (error: any) {
        error = "Failed to edite lesson: " + error.message;
      }
    }
  };
</script>

{#if lesson}
  <aside
    class="fixed left-0 top-0 min-h-screen max-w-md w-full pt-20 bg-white border-r-2 border-[#ddd]"
    hidden={isHidden}
  >
    <div
      class="w-full flex justify-center px-2 items-center h-full flex-col gap-4 relative"
    >
      <button
        class="close absolute right-5 top-0 bg-red-300 w-fit"
        on:click={toggelEdite}
      >
        close
      </button>
      <h1 class="text-xl font-semibold">Edite A Lesson</h1>
      <form
        class="rounded-xl items-center max-w-sm w-full flex flex-col gap-4 h-fit"
        enctype="multipart/form-data"
        on:submit={handleEdite}
      >
        {#if error}
          <p class="error">{error}</p>
        {/if}
        <div class="flex flex-col w-full">
          <label for="" class="text-gray-600">Lesson Title</label>
          <input
            type="text"
            id=""
            value={lesson.name}
            class="max-w-sm py-2 px-2 border border-[#ddd] outline-purple-600"
            name="title"
          />
        </div>
        <div class="flex flex-col w-full">
          <label for="" class="text-gray-600">Lesson Description</label>
          <textarea
            id=""
            value={lesson.description}
            class="max-w-sm py-2 px-2 border border-[#ddd] outline-purple-600"
            name="description"
          />
        </div>
        <div class="flex flex-col w-full">
          <label for="" class="text-gray-600">Grade</label>
          <select
            name="grade"
            id=""
            value={lesson.grade}
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
            value={lesson.subject}
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
            value={lesson.tags.join(",")}
            class="max-w-sm py-2 px-2 border border-[#ddd] outline-purple-600"
            name="tags"
          />
        </div>
        <button class="btn w-full max-w-sm bg-purple-600 text-white py-2"
          >{loading ? "Loading" : "Edite"}</button
        >
      </form>
      <button
        class="btn w-full mx-auto max-w-sm bg-red-600 text-white py-2"
        on:click={handleDelete}>Delet This lesson</button
      >
    </div>
  </aside>
{/if}
