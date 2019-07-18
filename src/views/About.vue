<template>
  <div class="main">
    <vue-header></vue-header>
    <div class="about">
      <h1>{{title}}</h1>
      <div>{{description}}</div>
    </div>
    <vue-footer></vue-footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      description: ""
    };
  },
  methods: {
    async initPage() {
      this.$header({
        title: `header about ssr`,
        description: `about ssr description`
      });
      const details = await this.getDetails();
      this.$mixin(details);
    },
    async getDetails() {
      return {
        title: "about",
        description: "about description"
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