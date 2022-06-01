<template>
  <div class='header'>
    <Hamburger></Hamburger>
    <span @click="handleCollapseChange">头部</span>
  </div>
</template>

<script lang='ts' setup name="header">
import { collapseStatus, handleCollapseChange } from '@/hooks/useCollapse';
</script>

<style lang='scss' scoped>
.header {
  display: flex;
  align-items: center;
  height: inherit;
  box-sizing: border-box;
  padding: 10px;
  background-color: #eaeaea;
}
</style>