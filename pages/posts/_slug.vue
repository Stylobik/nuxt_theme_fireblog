<template>
  <div>
    <Header :blog="blog" />
    <article>
      <div class="container">
        <div class="columns">
          <div class="column post-detail">
            <h1 class="title is-1">{{post.title}}</h1>
            <div class="date">
              <span class="date-clock">
                <ClockIcon />
              </span>
              {{post.publishedAt | formatDate}}
            </div>
            <div class="post-image">
              <img :src="post.image.url" :alt="post.image.alt" />
            </div>
            <div v-html="post.content" class="content" />
            <div class="post-author">
              <img :src="post.author.picture" />
              <span class="name">{{post.author.name}}</span>
            </div>
          </div>
          <div class="column is-one-third">
            <aside>
              <RecentPosts :recentposts="posts" />
              <Socials />
            </aside>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
import Header from "~/components/Header.vue";
import ClockIcon from "~/components/ClockIcon.vue";
import dynamicRoutes from "~/plugins/dynamicRoutes.js";
import RecentPosts from "~/components/RecentPosts.vue";
import Socials from "~/components/Socials.vue";

export default {
  components: {
    RecentPosts,
    Header,
    Socials,
    ClockIcon
  },
  data() {
    return {
      slug: this.$route.params.slug
    };
  },
  // wip
  async asyncData({ $axios, slug, route }) {
    let { data } = await dynamicRoutes();
    const s = route.params.slug;
    for (let i = 0; i < data.posts.edges.length; i++) {
      var el = data.posts.edges[i];
      const posts = data.posts.edges;
      switch (el.node.slug) {
        case s:
          return {
            blog: data.blog,
            post: el.node,
            posts: posts
          };
          break;
      }
    }
  },
  mounted() {}
};
</script>
