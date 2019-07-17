<template>
  <layout-default>
    <div class="home">
      <img alt="Vue logo" src="../assets/logo.png" @click="click" />
      <HelloWorld msg="Welcome to Your Vue.js App" />
      <h3>{{name}}</h3>
      <div>
        <ul>
          <li v-for="(item, index) of list" :key="index">{{item}}</li>
        </ul>
      </div>
    </div>
  </layout-default>
</template>

<script>
import listContext from "@/context/list.js";
import pageExtends from "@/extends/page.js";
import layoutDefault from "@/layout/default.vue";
import HelloWorld from "@/components/HelloWorld.vue";
import axios from "axios";

export default {
  extends: pageExtends,
  components: {
    layoutDefault,
    HelloWorld
  },
  async serverPrefetch() {
    this.$header({
      title: `header hello ssr `,
      description: `ssr description`
    });
    const ssrData = listContext(this.$ssrContext);
    this.list = await this.getList();
  },
  data() {
    return {
      name: 343,
      list: []
    };
  },
  methods: {
    click() {
      console.log(111);
    },
    async getList() {
      return [1, 2, 3];
    }
  }
};
</script>