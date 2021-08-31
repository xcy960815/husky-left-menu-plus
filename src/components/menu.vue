<template>
  <el-menu
    :default-active="defaultActive"
    class="layout-aside-menu"
    :background-color="backgroundColor"
    :text-color="textColor"
    :active-text-color="activeTextColor"
    :collapse="collapse"
    :collapse-transition="false"
    router
  >
    <menu-item v-for="route in menuData" :key="route.path" :current-route="route"></menu-item>
  </el-menu>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import menuItem from './menu-item.vue'
export default defineComponent({
  components: { menuItem },
  props: {
    menuData: {
      type: Array,
      default: () => [],
    },
    defaultActive: {
      type: String,
      default: () => '',
    },
    collapse: { type: Boolean, default: false },
    backgroundColor: {
      type: String,
      default: () => '#001529',
    },
    textColor: {
      type: String,
      default: 'rgba(255,255,255,.65)',
    },
    activeTextColor: {
      type: String,
      default: '#fff',
    },
  },
  name: 'husky-left-menu',
})
</script>

<style lang="less">
.layout-aside-menu {
  border: none;
  height: 100%;
}
</style>
