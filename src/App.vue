<script setup lang="ts">

</script>

<template>
  <el-config-provider namespace="zhk">
    <router-view></router-view>
  </el-config-provider>
</template>

<style>
  #app {
    text-align: center;
    color: var(--zhk-text-color-primary);
  }

  .element-plus-logo {
    width: 50%;
  }
</style>