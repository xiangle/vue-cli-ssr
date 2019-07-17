<template>
  <layout-default>
    <div class="about">
      <h1>{{title}}</h1>
    </div>
  </layout-default>
</template>

<script>
import pageExtends from "@/extends/page.js";
import layoutDefault from "@/layout/default.vue";
export default {
  extends: pageExtends,
  components: { layoutDefault },
  async serverPrefetch(data) {
    this.$header({
      title: `header about ssr`,
      description: `about ssr description`
    });
  },
  data() {
    return {
      title: "This is an about page"
    };
  },
  created() {},
  methods: {
    click() {
      this.title = "7777";
    }
  }
};
</script>