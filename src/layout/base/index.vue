<template>
  <el-container>
    <el-aside :width="getAsideWidth">
      <Logo class="logo"></Logo>
      <el-scrollbar wrap-class="scrollbar-wrapper">
        <Menu class="menu"></Menu>
      </el-scrollbar>
    </el-aside>
    <el-container>
      <el-header>
        <Header></Header>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang='ts' setup>
import { collapseStatus } from '@/hooks/useCollapse';
import { Header, Logo } from './children';

const getAsideWidth = computed(() => {
  return collapseStatus.value ? '64px' : '200px'
})

</script>

<style lang='scss' scoped>
.el-container {
  display: flex;
  width: 100vw;
  height: 100vh;

  .el-aside {
    display: flex;
    flex-direction: column;
    height: inherit;
    transition: all 0.2s ease-in;
    background: #304156;

    .menu {
      flex: 1;
    }
  }

  .el-container {
    flex: 1;

    .el-header {
      background-color: #ffffff;
      color: var(--el-text-color-primary);
      line-height: 60px;
      padding: 0;
      transition: all 0.5s;
      z-index: 999;
    }

    .el-main {
      flex: 1;
      background-color: #f3f6f8;
      color: var(--el-text-color-primary);
      padding: 20px;
      transition: all 0.5s;
    }
  }
}
</style>