<template>
  <husky-left-menu style="width: 200px" :menu-data="routes"></husky-left-menu>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

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
    return { routes }
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
</style>
<style lang="less" scoped>
</style>
