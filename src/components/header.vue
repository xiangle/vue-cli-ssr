<template>
  <div class="header">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/news">News</router-link>|
      <router-link to="/about">About</router-link>
    </div>
  </div>
</template>

<style lang="scss">
#nav {
  padding: 30px;
  font-size: 16px;
  a {
    display: inline-block;
    font-weight: bold;
    color: #2c3e50;
    padding: 0 10px;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>