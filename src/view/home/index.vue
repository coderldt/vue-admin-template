<template>
  <div class='home'>
    <span>{{ count }}</span>
    <el-button type="primary" @click="count += 1">jwjwjwjwjj</el-button>
  </div>
</template>

<script lang='ts' setup>
const count = ref(0)
</script>

<style lang='less' scoped>
</style>