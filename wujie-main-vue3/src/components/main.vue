<script setup>
import { ElMessage } from 'element-plus';
import { ref } from 'vue'
import wujie from 'wujie-vue3'
const input = ref('')
const emitInput = () => wujie.bus.$emit('input', input.value)
const propsMethod = () => ElMessage.success('执行父应用方法成功')
wujie.bus.$on('microEmit', (val) => input.value = val)
</script>
        
<template>
  <div class="container">
    <h1>main-vue3</h1>
    <el-input v-model="input" size="large" v-on:keyup.enter="emitInput">
      <template #append>
        <el-button @click="emitInput" icon="Promotion">
        </el-button>
      </template>
    </el-input>
  </div>
  <div class="container">
    <h1>micro-vue2</h1>
    <WujieVue alive name="micro" url="http://localhost:8087" :props="{data:'props data',method:{propsMethod}}">
    </WujieVue>
  </div>
</template>
        
<style scoped lang="scss">
.container {
  padding: 48px;
  border-radius: 4px;
  width: 800px;

  &:first-child {
    border: 2px #40a0ff4b solid;

    .el-input {
      width: 480px;
    }
  }

  &:last-child {
    border: 2px #f16b5f42 solid;
  }
}
</style>
        