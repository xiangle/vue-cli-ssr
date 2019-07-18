<template>
  <div class="main">
    <vue-header></vue-header>
    <div class="details">
      <h1>{{title}}</h1>
      <div>{{past}}</div>
      <div>{{name}}</div>
      <div>{{phone}}</div>
      <div>{{email}}</div>
      <div>{{paragraphs}}</div>
    </div>
    <vue-footer></vue-footer>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      title: "",
      past: "",
      name: "",
      phone: "",
      email: "",
      paragraphs: ""
    };
  },
  methods: {
    async initPage() {
      const details = await this.getDetails();
      this.$header({
        title: details.title + '- news',
        description: details.past
      });
      this.$mixin(details);
    },
    async getDetails() {
      const { data } = await axios.get("http://localhost:9600/news/details/1");
      return data;
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

<style scoped lang="scss">
.details {
  div {
    padding: 5px 10px;
  }
}
</style>