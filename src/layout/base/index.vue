<template>
  <el-container>
    <el-aside :width="getAsideWidth">
      <Aside></Aside>
    </el-aside>
    <el-container>
      <el-header>
        <Header></Header>
      </el-header>
      <el-main>
        <transition name="fade-transform" mode="out-in">
          <router-view></router-view>
        </transition>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang='ts' setup>
import { collapseStatus } from '@/hooks/useCollapse';
import { Header, Aside } from './children';

const getAsideWidth = computed(() => {
  return collapseStatus.value ? '64px' : '200px'
})

</script>

<style lang='scss' scoped>
.el-container {
  height: 100vh;

  .el-aside {
    transition: width .28s;
    overflow: hidden;
  }
}
</style>