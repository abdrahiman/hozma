<script lang="ts">
  export let lesson: any;
</script>

{#if lesson}
  <a
    class="card bg-white border shadow-sm rounded-xl flex flex-col gap-2 w-full overflow-hidden"
    href="/lesson/{lesson._id}"
  >
    <img
      class="image max-h-64 border-b-2 object-top border-[#ddd]"
      src={lesson.lesson[0]}
      alt=""
    />
    <div class="head px-2 flex flex-col mt-1">
      <span dir="auto" class="title text-xl w-full font-semibold capitalize"
        >{lesson.name}</span
      >
      <span class="category text-purple-600">{lesson.subject}</span>
    </div>
    <div
      class="info text-xs flex flex-col gap-1 p-2 text-gray-600 pl-3 items-center mt-2 border-t-2 border-[#441b1b10]"
    >
      <div class="w-full items-center flex gap-4 px-2 p-1">
        <span class="flex gap-1 items-center">
          <svg
            focusable="false"
            data-prefix="fas"
            data-icon="books"
            class="svg-inline--fa fa-books w-3 h-3 fa-fw _db78be352894 _655c9c811d87 _f8ace26848d1"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            ><path
              fill="currentColor"
              d="M0 32C0 14.3 14.3 0 32 0H96c17.7 0 32 14.3 32 32V96H0V32zm0 96H128V384H0V128zM0 416H128v64c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V416zM160 32c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32V96H160V32zm0 96H288V384H160V128zm0 288H288v64c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V416zm203.6-19.9L320 232.6V142.8l100.4-26.9 66 247.4L363.6 396.1zM412.2 85L320 109.6V11l36.9-9.9c16.9-4.6 34.4 5.5 38.9 22.6L412.2 85zM371.8 427l122.8-32.9 16.3 61.1c4.5 17-5.5 34.5-22.5 39.1l-61.4 16.5c-16.9 4.6-34.4-5.5-38.9-22.6L371.8 427z"
            ></path></svg
          >{new Date(lesson.createdAt).getFullYear()}</span
        >
        <span class="flex gap-1 items-center">
          <svg
            focusable="false"
            data-prefix="fas"
            data-icon="thumbs-down"
            class="svg-inline--fa fa-thumbs-down w-4 h-4 fa-fw _0fe5f551a7f6 _6d88284663af _2c9c2722281b"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            ><path
              fill="currentColor"
              d="M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-18.5-10.5-34.6-25.9-42.6C497 236.6 504 223.1 504 208c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 384H96c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32H32C14.3 96 0 110.3 0 128V352c0 17.7 14.3 32 32 32z"
            ></path></svg
          >18</span
        >
        <span class="flex gap-1 items-center">
          <svg
            focusable="false"
            data-prefix="fad"
            data-icon="thumbs-up"
            class="svg-inline--fa fa-thumbs-up w-4 h-4 fa-fw _0fe5f551a7f6 _6d88284663af _f0c3d80d4cc4"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            ><g class="fa-duotone-group"
              ><path
                class="fa-secondary"
                fill="currentColor"
                d="M351.1 89.4c5.2-26-11.7-51.3-37.7-56.5s-51.3 11.7-56.5 37.7L254.6 82c-6.6 33.2-24.8 63-51.2 84.2l-7.4 5.9c-22.8 18.2-36 45.8-36 75V272v48 38.3c0 32.1 16 62.1 42.7 79.9l38.5 25.7c15.8 10.5 34.3 16.1 53.3 16.1H392c26.5 0 48-21.5 48-48c0-3.6-.4-7-1.1-10.4c19.2-6.3 33.1-24.3 33.1-45.6c0-9.1-2.5-17.6-6.9-24.9c22.2-4.2 38.9-23.7 38.9-47.1c0-15.1-7-28.6-17.9-37.4c15.4-8 25.9-24.1 25.9-42.6c0-26.5-21.5-48-48-48H320c13.7-23.1 23.5-48.5 28.8-75.2l2.3-11.4z"
              ></path><path
                class="fa-primary"
                fill="currentColor"
                d="M0 224c0-17.7 14.3-32 32-32H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224z"
              ></path></g
            ></svg
          >17</span
        >
      </div>
      <!-- <div class="w-full items-center flex gap-2">
      <svg
        focusable="false"
        data-prefix="fad"
        data-icon="building-columns"
        class="w-3 h-3 svg-inline--fa fa-building-columns fa-fw _db78be352894 _6d88284663af _7192e2a689b8 _82463a42f399"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        ><g class="fa-duotone-group"
          ><path
            class="fa-secondary"
            fill="currentColor"
            d="M128 192H64V420.3c-.6 .3-1.2 .7-1.7 1.1l-48 32c-11.7 7.8-17 22.4-12.9 35.9S17.9 512 32 512H480c14.1 0 26.5-9.2 30.6-22.7s-1.1-28.1-12.9-35.9l-48-32c-.6-.4-1.2-.7-1.8-1.1V192H384V416H344V192H280V416H232V192H168V416H128V192z"
          ></path><path
            class="fa-primary"
            fill="currentColor"
            d="M268.6 2.6c-8-3.4-17.2-3.4-25.2 0l-224 96c-14 6-21.8 21-18.7 35.8S16.8 160 32 160v8c0 13.3 10.7 24 24 24H456c13.3 0 24-10.7 24-24l0-8c15.2 0 28.3-10.7 31.3-25.6s-4.8-29.9-18.7-35.8l-224-96zM256 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
          ></path></g
        ></svg
      >
      <span>{lesson.grade}</span>
    </div> -->
    </div>
  </a>
{/if}
