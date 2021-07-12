<template>
  <div class="app" style="height: 100%">
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
html, body, #app, .el-container {
  height: 100%;
  padding: 0;
  margin: 0;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
