<template>
  <div class='' @click="handleCollapseChange">
    <el-icon>
      <Fold v-if="collapseStatus" />
      <Expand v-else />
    </el-icon>
  </div>
</template>

<script lang='ts' setup>
import { collapseStatus, handleCollapseChange } from '@/hooks/useCollapse'
</script>

<style lang='scss' scoped>
</style>