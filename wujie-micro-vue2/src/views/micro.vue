<template>
  <div>
    <h1>{{data===''?'hi':data}}</h1>
    <el-button @click="doPropsData">获取父应用通过props传递的值</el-button>
    <el-button @click="doPropsMethod">执行父应用通过props传递的方法</el-button>
    <el-button @click="microEmit">向父应用传值</el-button>
  </div>
</template>

<script>
export default {
  data ()
  {
    return {
      data: ''
    };
  },
  mounted ()
  {
    window.$wujie.bus.$on('input', (val) => this.data = val)
  },
  // beforeDestroy ()
  // {
  //   window.$wujie.bus.$off('input')
  // },
  methods: {
    doPropsMethod ()
    {
      window.$wujie.props.method.propsMethod()
    },
    doPropsData ()
    {
      this.data = window.$wujie.props.data
    },
    microEmit ()
    {
      window.$wujie.bus.$emit('microEmit', 'micro data')
    }
  }
};
</script>

<style scoped>

</style>
