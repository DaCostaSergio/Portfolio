<template>
<div class="flex mb-5">
  <div class="mr-60 text-2xl">
    <p>{{date}}</p>
  </div>

  <div class="text-2xl">
    <p>{{textAbout}}</p>
  </div>
</div>
</template>

<script>
export default {
  props: {
    date: Number,
    textAbout: String
  }
}

</script>

