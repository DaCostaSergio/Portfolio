<script setup>
import NavBar from './components/NavBar.vue'
import Home from  './components/Home.vue'
import About from './components/About.vue'
import MainTitle from './components/MainTitle.vue'
import Projects from './components/Projects.vue'

</script>

<template>
  <header class="fixed w-full z-10 top-0 right-0 px-20 backdrop-blur">
    <NavBar></NavBar>

  </header>
  <main>
    <div>
      <Home></Home>
    </div>

    <div>
       <MainTitle mainTitle="projects"></MainTitle>
      <Projects></Projects>
    </div>


    <MainTitle mainTitle="about"></MainTitle>

    <MainTitle mainTitle="contact"></MainTitle>


  </main>
  <div>



  </div>
  <main>
  </main>
</template>


