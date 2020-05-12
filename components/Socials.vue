<template>
  <div class="socials">
    <h3 class="block-title title is-5">Follow us</h3>
    <ul>
      <li v-for="social in links" :key="social._id">
        <a :href="`https://www.${social}.com`" rel="noopener noreferrer" target="_blank">
          <img :src="`images/icon-${social}.svg`"/>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["socials"],
  data: function() {
    return {
      links: Object.keys(process.env.socials)
    };
  }
};
</script>

<style >
</style>
