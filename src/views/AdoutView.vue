<script setup lang="ts">
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  const router = useRouter()
  const p1 = ref('123');
  const toHome = () => {
    router.push({
      path: '/'
    })
  }
</script>
<template>
  <BaseHeader />
  <div style="display: flex">
    <BaseSide />
  </div>
  <div class="div_class">
    <p class="p_class">{{p1}}</p>
    <el-button @click="toHome()">El ToHome</el-button>
  </div>
</template>
<style lang="scss">
  .div_class {
    .p_class {
      color: red;
    }
  }
</style>