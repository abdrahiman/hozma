<script lang="ts">
  import { goto } from "$app/navigation";
  import { API_HOST } from "../../utils/api";
  let handleSubmit = async (e: any) => {
    e.preventDefault();
    let formData = new FormData(e.target);
    let data = await fetch(API_HOST + "auth/login", {
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password: formData.get("password"),
        email: formData.get("email"),
      }),
      method: "POST",
    });
    if (data.ok) {
      let user = await data.json();
      goto("/login?token=" + user.access_token);
    }
  };
</script>

<div class="w-full flex justify-center px-2 items-center min-h-screen">
  <form
    class="rounded-xl items-center max-w-sm -mt-24 w-full flex flex-col gap-4 h-full"
    action=""
    on:submit={handleSubmit}
  >
    <div class="flex flex-col w-full">
      <label for="" class="text-gray-600">Email</label>
      <input
        type="email"
        required
        id=""
        class="max-w-sm py-2 px-2 border border-[#ddd] outline-purple-600"
        name="email"
      />
    </div>
    <div class="flex flex-col w-full">
      <label for="" class="text-gray-600">Password</label><input
        type="password"
        id=""
        required
        class="max-w-sm w-full py-2 px-2 border border-[#ddd] outline-purple-600"
        name="password"
      />
    </div>
    <button class="btn w-full max-w-sm bg-purple-600 text-white py-2"
      >Login In</button
    >
  </form>
</div>
