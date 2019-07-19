<template>
  <div class="main">
    <vue-header></vue-header>
    <div class="home">
      <div class="list" v-for="(item, index) of list" :key="index">
        <router-link :to="'/news/details/'+ index">
          <h3>{{item.title}}</h3>
          <span>{{item.past}}</span>
          <span>{{item.paragraphs}}</span>
        </router-link>
      </div>
    </div>
    <vue-footer></vue-footer>
  </div>
</template>

<script>
import axios from "axios";
// import listContext from "@/context/list.js";

export default {
  data() {
    return {
      list: []
    };
  },
  methods: {
    async initPage() {
      this.$header({
        title: `news`,
        description: `news description`
      });
      const list = await this.getList();
      this.$mixin({ list });
    },
    async getList() {
      const { data } = await axios.get("http://localhost:9600/news");
      return data;
    }
  },
  async serverPrefetch() {
    await this.initPage();
    // const ssrData = listContext(this.$ssrContext);
  },
  async mounted() {
    await this.initPage();
  }
};
</script>

<style scoped lang="scss">
.list {
  padding: 10px 0;
  span {
    display: inline-block;
    padding: 5px 10px;
  }
}
</style>