<template>
  <el-container class="main">
    <el-aside width="200px">Aside</el-aside>
    <el-container direction="vertical">
      <el-header>
        <topbar />
      </el-header>
      <el-container>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
    <el-footer>footer</el-footer>
  </el-container>
</template>

<script>
import topbar from './Main/TopBar.vue';

export default {
  components: {
    topbar
  },
  data() {
    return {

    }
  }
}
</script>

<style lang="less">
.el-header,
.el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

.main {
  height: 100%;
}

html,
body {
  height: 100%;
}
</style>