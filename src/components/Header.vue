<template>
  <div>
    <div class="bg-black">
      <nav
          class="
          container
          px-6
          py-8
          mx-auto
          md:flex md:justify-between md:items-center
        "
      >
        <div class="flex items-center justify-between">
          <router-link
              to="/"
              class="
              text-xl
              font-N27
              font-bold
              text-white
              md:text-4xl
              hover:text-blue-400
            "
          >
            Sergio Da Costa
          </router-link>

          <!-- Mobile menu button -->
          <div @click="showMenu = !showMenu" class="flex md:hidden">
            <button
                type="button"
                class="
                text-white
                hover:text-gray-400
                focus:outline-none focus:text-white
              "
            >
              <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                <path
                    fill-rule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                ></path>
              </svg>
            </button>
          </div>
        </div>


        <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
        <ul
            :class="showMenu ? 'flex' : 'hidden'"
            class="
            flex-col
            mt-8
            space-y-4
            md:flex
            md:space-y-0
            md:flex-row
            md:items-center
            md:space-x-10
            md:mt-0
          "
        >
          <li class="text-2xl text-white font-N27  hover:text-blue-400">
            Home
          </li>
          <li class="text-2xl text-white font-N27  hover:text-blue-400">
            Projects
          </li>
          <li class="text-2xl text-white font-N27  hover:text-blue-400">
            About
          </li>
          <li class="text-2xl text-white font-N27  hover:text-blue-400">
            Email
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showMenu: false,
    };
  },
};
</script>