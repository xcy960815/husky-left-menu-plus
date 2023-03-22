<template>
  <el-menu
    :default-active="defaultActive"
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
import { ElMenu } from 'element-plus';
import { defineComponent, PropType } from 'vue';
import menuItem from './menu-item.vue';
import { IMenuProps } from './index';
export default defineComponent({
  components: { menuItem, ElMenu },
  props: {
    menuData: {
      type: Array as PropType<IMenuProps[]>,
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

  name: 'husky-left-menu-plus',
});
</script>

<style lang="less">
@import url('element-plus/dist/index.css');
.layout-aside-menu {
  border: none;
  height: 100%;
}
</style>
