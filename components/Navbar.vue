<template>
    <nav class="navbar">
      <div class="container">
        <div class="navbar-brand">
            <div class="navbar-burger" @click="showNav = !showNav" :class="{ 'is-active': showNav }">
            <span></span>
            <span></span>
            <span></span>
            </div>
        </div>
      <div class="navbar-menu" :class="{ 'is-active': showNav }">
        <div class="navbar-end">
          <a class="navbar-item" href="/about">
            Home
          </a>
          <a class="navbar-item" href="/path">
            Back to site
          </a>
        </div>
      </div>
      </div>
    </nav>
</template>

<script>
export default {
  props: [],
    data: function() {
    return {
      showNav: false
    };
  },
};
</script>

<style scoped>
</style>
