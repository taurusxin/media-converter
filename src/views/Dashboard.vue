<template>
  <el-container style="height: 100vh">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <side-bar></side-bar>
    </el-aside>

    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SideBar from '@/components/SideBar.vue'

export default defineComponent({
  name: 'Dashboard',
  components: {
    SideBar
  }
})
</script>

<style lang="scss" scoped>
</style>
