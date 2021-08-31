<template>
  <div style="width: 200px">
    <husky-left-menu :collapse="isCollapse" :menu-data="routes"></husky-left-menu>
  </div>

  <el-button @click="isCollapse = !isCollapse">click me</el-button>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
export default defineComponent({
  name: 'App',
  setup() {
    const routes = ref([
      {
        path: '/real-time-develop',
        name: '/real-time-develop',
        meta: {
          menuIcon: 'el-icon-setting',
          menuName: '实时开发',
        },
      },
      {
        path: '/task-list',
        name: '/task-list',
        meta: {
          menuName: '任务列表',
          menuIcon: 'el-icon-setting',
        },
      },
    ])
    const isCollapse = ref<Boolean>(false)
    onMounted(() => {
      console.log('onMounted')
    })
    return { routes, isCollapse }
  },
})
</script>
<style>
* {
  padding: 0;
  margin: 0;
}
html,
body,
#app {
  height: 100%;
  width: 100%;
}
#app {
  display: flex;
}
</style>
<style lang="less" scoped>
</style>
