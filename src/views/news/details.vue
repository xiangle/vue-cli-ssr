<template>
  <div class="main">
    <vue-header></vue-header>
    <div class="about">
      <h1>{{title}}</h1>
      <div>{{details.a}}</div>
      <div>{{details.b}}</div>
    </div>
    <vue-footer></vue-footer>
  </div>
</template>

<script>
import pageExtends from "@/extends/page.js";
export default {
  extends: pageExtends,
  data() {
    return {
      title: "This is an about page",
      details: {}
    };
  },
  methods: {
    async initPage() {
      this.$header({
        title: `header about ssr`,
        description: `about ssr description`
      });
      const details = await this.getDetails();
      this.$mixin({ details });
    },
    async getDetails() {
      return {
        a: 666,
        b: 888
      };
    }
  },
  async serverPrefetch(data) {
    await this.initPage();
  },
  async mounted() {
    await this.initPage();
  }
};
</script>