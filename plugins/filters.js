import Vue from "vue";

export default async function(ctx, inject) {
  Vue.filter("formatDate", val => new Date(val).toLocaleDateString());
}
