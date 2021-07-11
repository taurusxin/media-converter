<template>
  <title-bar></title-bar>
  <el-container style="height: 100%">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <side-bar></side-bar>
    </el-aside>

    <el-main>
      <div class="main-container" style="padding-top: 40px">
        <router-view></router-view>
      </div>
    </el-main>
  </el-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SideBar from '@/components/SideBar.vue'
import TitleBar from '@/components/TitleBar.vue'

export default defineComponent({
  name: 'Dashboard',
  components: {
    SideBar, TitleBar
  }
})
</script>

<style lang="scss" scoped>
</style>
