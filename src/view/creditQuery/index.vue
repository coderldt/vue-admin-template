<template>
  <div class='home'>
    <span>{{ count }}</span>
    <el-button type="primary" @click="count += 1">2222222</el-button>
  </div>
</template>

<script lang='ts' setup>
const count = ref(0)
</script>

<style lang='scss' scoped>
</style>