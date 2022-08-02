<script>

import Sia from '../components/Projects/Sia.vue';
import Asap from '../components/Projects/Asap.vue';

const routes = {
  '/':Asap,
  '/sia':Sia,


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
        <ul>
          <li class="text-2xl text-black font-N27 w-20  hover:underline" >
            <router-link to="#/sia">
              <a href="#/sia">
                <img src="../Medias/GR371_DaCosta_Sergio_TPP_Affiche.jpg" alt="">
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
