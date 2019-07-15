<template>
  <layout-default>
    <div class="about">
      <h1>{{title}}</h1>
    </div>
  </layout-default>
</template>

<script>
import layoutDefault from "@/layout/default.vue";
export default {
  components: {
    layoutDefault
  },
  data() {
    return {
      title: "This is an about page"
    };
  },
  methods: {
    click() {
      this.title = "7777";
    }
  }
};
</script>