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
  box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
}
</style>