<template>
  <section class="hero">
    <div class="hero-head">
      <Navbar />
    </div>
    <div class="hero-body">
      <div>
       <h1 class="title is-1">{{blog.name}}</h1>
        <div class="subtitle">{{blog.description}}</div> <!-- a virer sur les pages posts -->
      </div>
    </div>
  </section>
</template>

<script>
import Navbar from "~/components/Navbar.vue";
export default {
  components: {
    Navbar
  },
  props: ["blog"]
};
</script>

<style scoped>
</style>
