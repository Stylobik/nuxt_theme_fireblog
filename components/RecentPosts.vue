<template>
  <section class="section">
    <h3 class="block-title title is-5">Articles récents</h3>
    <div class="columns is-mobile" v-for="post in recentposts" :key="post.slug">
      <div class="column is-one-quarter">
        <img :src="post.node.image.url" alt="Placeholder image" />
      </div>
      <div class="column">
        <h4 class="post-title title is-6">{{post.node.title}}</h4>
        <div>
          <small>{{post.node.publishedAt | formatDate}}</small>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["recentposts"]
};
</script>

<style scoped>
</style>