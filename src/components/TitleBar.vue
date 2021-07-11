<template>
<div class="title-bar"></div>
</template>

<script>
export default {
  name: 'TitleBar'
}
</script>

<style scoped>
.title-bar {
  position: absolute;
  top: 0;
  left: 0;
  -webkit-app-region: drag;
  height: 40px;
  background-color: transparent;
  width: 100%;
}
</style>
