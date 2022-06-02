<template>
  <div class='logo' :style="tempAsideStyle">
    <img :src="Logo" alt="" :style="getImgStyle">
    <span class="projectName" v-show="!collapseStatus">
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
    'margin': collapseStatus.value ? '0' : '0 20px 0 10px'
  }
})

</script>

<style lang='scss' scoped>
.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 15px;
  box-sizing: border-box;
  height: 60px;
  color: #fff;
  transition: width .28s;

  img {
    height: 30px;
    line-height: 60px;
  }

  .projectName {
    white-space: nowrap;
  }

  span {
    flex: 1;
  }
}
</style>