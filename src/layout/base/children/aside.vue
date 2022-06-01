<template>
  <div class='aside'>
    <!-- <Logo class="logo"></Logo> -->
    <Menu class="menu"></Menu>
  </div>
</template>

<script lang='ts' setup>
</script>

<style lang='scss' scoped>
.aside {
  height: 100vh;
  display: flex;
  flex-direction: column;

  .logo {
    height: 60px;
  }

  .menu {
    flex: 1;
  }
}
</style>