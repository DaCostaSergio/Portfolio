<template>
  <div class="flex justify-center p-40">
    <h1 class="font-Helvetica text-center">
      <a class="font-Baunk text-9xl p-5 backdrop-filter-blur"> {{mainTitle}}</a>
    </h1>
  </div>
</template>

<script>
export default {
  props: {
    mainTitle: String,
  }
}

</script>