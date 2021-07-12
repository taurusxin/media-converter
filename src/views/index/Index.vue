<template>
<div class="container">
  <img alt="Mc logo" src="@/assets/Mc.png" class="logo">
  <div class="intro">基于 Vue3 + Electron 打造的简易高度可视化 FFmpeg GUI</div>

  <div class="footer">@Taurusxin</div>
</div>
</template>

<script>
export default {
  name: 'Index'
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  .intro {
    padding: 15px;
    font-size: 25px;
  }
  .footer {
    font-size: 13px;
    color: darkgrey;
    position: absolute;
    bottom: 10px;
  }
  .logo {
    width: 240px;
    height: 240px;
  }
}
</style>
