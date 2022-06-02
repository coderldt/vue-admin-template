<template>
  <div class='home'>
    <el-input v-model="token"></el-input>
    <el-button @click="setTokenValue">setToken</el-button>
    <el-button type="primary" @click="getTokenValue">getToken</el-button>
  </div>
</template>

<script lang='ts' setup>
import { getToken, setToken } from '@/utils/store';

const token = ref('')

const setTokenValue = () => {
  setToken(token.value)
}

const getTokenValue = () => {
  const token = getToken()
  console.log(token);
}
</script>

<style lang='scss' scoped>
</style>