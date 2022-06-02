<template>
  <div class='hamburger' @click="handleCollapseChange">
    <el-icon :size="18">
      <Fold v-if="collapseStatus" />
      <Expand v-else />
    </el-icon>
  </div>
</template>

<script lang='ts' setup>
import { collapseStatus, handleCollapseChange } from '@/hooks/useCollapse'
</script>

<style lang='scss' scoped>
.hamburger {
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 15px;
  cursor: pointer;

  &:hover {
    background: #f9f9f9;
  }
}
</style>