<template>
  <el-menu :default-openeds="['transcoding', 'merge-split', 'title']" router default-active="index">

    <el-menu-item index="index">
      <template #title><i class="el-icon-house"></i>首页</template>
    </el-menu-item>

    <el-submenu index="transcoding">
      <template #title><i class="el-icon-s-unfold"></i>转码</template>
      <el-menu-item index="video"><i class="el-icon-video-play"></i>视频转码</el-menu-item>
      <el-menu-item index="audio"><i class="el-icon-headset"></i>音频转码</el-menu-item>
    </el-submenu>

    <el-submenu index="merge-split">
      <template #title><i class="el-icon-video-camera"></i>合并分离</template>
      <el-menu-item-group>
        <template #title>视频</template>
        <el-menu-item index="video-merge"><i class="el-icon-video-play"></i>视频合并</el-menu-item>
        <el-menu-item index="video-split"><i class="el-icon-video-play"></i>视频分离</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group>
        <template #title>音频</template>
        <el-menu-item index="audio-merge"><i class="el-icon-video-play"></i>视频合并</el-menu-item>
        <el-menu-item index="audio-split"><i class="el-icon-video-play"></i>视频分离</el-menu-item>
      </el-menu-item-group>
    </el-submenu>

    <el-submenu index="title">
      <template #title><i class="el-icon-s-unfold"></i>字幕</template>
      <el-menu-item index="embed-title"><i class="el-icon-video-play"></i>嵌入字幕</el-menu-item>
    </el-submenu>

    <el-menu-item index="setting">
      <template #title><i class="el-icon-setting"></i>设置</template>
    </el-menu-item>

  </el-menu>
</template>

<script>
export default {
  name: 'SideBar'
}
</script>

<style scoped>

</style>
