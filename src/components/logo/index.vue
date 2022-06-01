<template>
  <div class='logo' :style="tempAsideStyle">
    <img :src="Logo" alt="" :style="getImgStyle">
    <span v-if="!collapseStatus">
      {{ config.projectName }}
    </span>
  </div>
</template>

<script lang='ts' setup>
import Logo from '@/assets/logo.png'
import { config, tempAsideStyle } from '@/config'
import { collapseStatus } from "@/hooks/useCollapse";

const getImgStyle = computed(() => {
  return {
    height: '35px',
    'margin-right': collapseStatus.value ? '0' : '10px'
  }
})

</script>

<style lang='scss' scoped>
.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 15px;
  box-sizing: content-box;
  color: #fff;
  transition: width .28s;

  span {
    flex: 1;
  }
}
</style>