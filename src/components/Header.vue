<script>
import Main from '../components/Main.vue';
import Projects from '../components/Projects.vue';
import About from '../components/About.vue';

const routes = {
  '/': Main,
  '/projects':Projects,
  '/about': About,
}
export default {
  data() {
    return {
      showMenu: false,
      currentPath: window.location.hash
    }
  },
  computed: {
    currentView() {
      return routes[this.currentPath.slice(1) || '/'] || NotFound
    }
  },
  mounted() {
    window.addEventListener('hashchange', () => {
      this.currentPath = window.location.hash
    })
  }
}
</script>

<template>
  <div>
    <div class="bg-white divide-x-[3px]">
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
              text-black
              md:text-4xl
            "
          >
            <a href="/">
              <img class="w-32" src="../assets/Logo.svg" alt="">
            </a>
          </router-link>

          <!-- Mobile menu button -->
          <div @click="showMenu = !showMenu" class="flex md:hidden">
            <button
                type="button"
                class="
                text-black
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
          <li class="text-2xl text-black font-N27  hover:underline" >
            <a href="/">
              Home
            </a>
          </li>
          <li class="text-2xl text-black font-N27  hover:underline">
            <router-link to="#/projects">
              <a href="#/projects">
                Projects
              </a>
            </router-link>
          </li>
          <li class="text-2xl text-black font-N27  hover:underline">
            <router-link to="#/about">
              <a href="#/about">
                About
              </a>
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
  <div class="border-y-black">
  </div>
  <component :is="currentView" />
</template>
