<template>
  <layout-default>
    <div class="home">
      <img alt="Vue logo" src="../assets/logo.png" @click="click" />
      <HelloWorld msg="Welcome to Your Vue.js App" />
    </div>
  </layout-default>
</template>

<script>
import layoutDefault from "@/layout/default.vue";
import HelloWorld from "@/components/HelloWorld.vue";
import axios from "axios";
export default {
  middleware: "list",
  asyncData(ctx) {
    // return {}
  },
  header(ctx) {
    return {
      title: `hello ssr`,
      description: `ssr description`
    };
  },
  components: {
    layoutDefault,
    HelloWorld
  },
  methods: {
    click() {
      console.log(111);
    }
  }
};
</script>