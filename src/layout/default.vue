<template>
  <div>
    <vue-header></vue-header>
    <slot></slot>
    <vue-footer></vue-footer>
  </div>
</template>

<script>
import vueHeader from "./header.vue";
import vueFooter from "./footer.vue";
export default {
  components: {
    "vue-header": vueHeader,
    "vue-footer": vueFooter
  }
};
</script>

<style lang="scss" scoped>
nav {
  background-color: #24292e;
}
</style>