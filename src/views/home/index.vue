<template>
  <div class="main">
    <vue-header></vue-header>
    <div class="home">
      <img alt="Vue logo" src="../../assets/logo.png" @click="click" />
      <vue-content msg="Welcome to Your Vue.js SSR App" />
      <div>
        <div class="list" v-for="(item, index) of list" :key="index">
          <router-link :to="'/news/details/'+ index">
            <span>{{item.title}}</span>
            <span>{{item.past}}</span>
            <span>{{item.paragraphs}}</span>
          </router-link>
        </div>
      </div>
    </div>
    <vue-footer></vue-footer>
  </div>
</template>

<script>
import axios from "axios";
// import listContext from "@/context/list.js";
import content from "./_content.vue";

export default { 
  components: {
    "vue-content": content
  },
  data() {
    return {
      list: []
    };
  },
  methods: {
    async initPage() {
      this.$header({
        title: `home`,
        description: `home description`
      });
      const list = await this.getList();
      this.$mixin({ list });
    },
    async getList() {
      const { data } = await axios.get("http://localhost:9600");
      return data;
    },
    click() {
      console.log(111);
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