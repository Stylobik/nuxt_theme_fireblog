require("dotenv").config();
import dynamicRoutes from "./plugins/dynamicRoutes.js";

export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  env: {
    baseUrl: process.env.NUXT_SITE_URL || "http://localhost:3000",
    endPoint: process.env.NUXT_FIREBLOG_GRAPHQL_ENDPOINT,
    socials: {
      linkedin: process.env.NUXT_SOCIALS_LINKEDIN,
      instagram: process.env.NUXT_SOCIALS_INSTAGRAM,
      twitter: process.env.NUXT_SOCIALS_TWITTER,
      facebook: process.env.NUXT_SOCIALS_FACEBOOK,
      youtube: process.env.NUXT_SOCIALS_YOUTUBE
    }
  },
  generate: {
    async routes() {
      let response = await dynamicRoutes();
      return response.data.posts.edges.map(post => ({
        route: `posts/${post.node.slug}`,
        payload: post
      }));
    }
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: ["~assets/variables.scss", "~assets/main.scss"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["~plugins/filters.js", "~/plugins/dynamicRoutes.js"],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    //"@nuxtjs/bulma", DO NOT use that way. See https://www.freecodecamp.org/news/up-goind-with-nuxt-js-bulma-and-sass/
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    "@nuxtjs/pwa",
    // Doc: https://github.com/nuxt-community/dotenv-module
    "@nuxtjs/dotenv"
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
