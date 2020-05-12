<template>
  <div>
    <Header :blog="blog"/>
     <div class="container">
      <div class="columns">
        <div class="column">
          <PostsList :postslist="posts" />
        </div>
        <div class="column is-one-third">
          <aside>
            <RecentPosts :recentposts="posts"  />
            <Socials />
          </aside>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RecentPosts from "~/components/RecentPosts.vue";
import PostsList from "~/components/PostsList.vue";
import Header from "~/components/Header.vue";
import Socials from "~/components/Socials.vue";
import dynamicRoutes from "~/plugins/dynamicRoutes.js";

export default {
  components: {
    RecentPosts,
    Header,
    PostsList,
    Socials
  },
  mounted: function() {},
  // No asyncData in nuxt components
  // -> https://nuxtjs.org/faq/async-data-components#async-data-in-components-
  async asyncData() {
    let { data } = await dynamicRoutes();
    return {
      blog: data.blog,
      posts: data.posts.edges
    };
  }
};
</script>

<style lang="scss">
</style>
