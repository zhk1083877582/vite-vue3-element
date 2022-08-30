<template>
  <BaseHeader />
  <div style="display: flex">
    <BaseSide />
    <!-- <div>
          
        </div> -->
    <!-- <el-select v-model="value" class="m-2" placeholder="Select" size="large">
          <el-option v-for="item in options" :key="item.value" :label="item.label"
            :value="item.value" />
        </el-select>
        <el-switch v-model="value1" /> -->
  </div>
  <HelloWorld msg="Hello Vue " />
</template>
<script setup lang="ts">
  import { ref, reactive } from 'vue';
  const value = ref('')
  const options = reactive([
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  }])
  const value1 = ref(true)
</script>
<style>
</style>