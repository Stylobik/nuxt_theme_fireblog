<template>
  <section class="section">
    <div class="post-list">
      <div class="post columns" v-for="post in postslist" :key="post.slug">
        <div class="column is-one-third">
          <img :src="post.node.image.url" alt="Placeholder image" />
        </div>
        <div class="column">
          <h2 class="title is-3">{{post.node.title}}</h2>
          <div class="date">
            <small>
              <span class="date-clock">
                <ClockIcon />
              </span>
              {{post.node.publishedAt | formatDate}}
            </small>
          </div>
          <div class="post-teaser content">
            <p>{{post.node.teaser}}</p>
          </div>
          <nuxt-link :to="{name: 'posts-slug', params: {slug: post.node.slug}}" :key="post.slug" class="read-more button is-light">Read More</nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import dynamicRoutes from "~/plugins/dynamicRoutes.js";
import ClockIcon from "~/components/ClockIcon.vue";5
export default {
  components: {
    ClockIcon
  },
  props: ["postslist"]
};
</script>

<style scoped>
</style>