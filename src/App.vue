<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
body {
  overflow-y: overlay;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0 auto;
  width: 600px;
}
@media screen and (max-width: 600px) {
  #app {
    width: 100%;
  }
}
</style>
