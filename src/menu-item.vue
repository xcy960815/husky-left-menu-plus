<template>
  <!-- 递归组件 -->
  <el-submenu
    v-if="currentRoute && currentRoute.children && currentRoute.children.length > 0"
    :index="currentRoute.path"
  >
    <i v-if="currentRoute.meta?.menuIcon" :class="currentRoute.meta?.menuIcon"></i>
    <template #title>
      <span>{{ currentRoute.meta?.menuName }}</span>
    </template>
    <template v-for="childRoute in currentRoute.children" :key="childRoute.name">
      <menu-item :current-route="childRoute"> </menu-item>
    </template>
  </el-submenu>
  <el-menu-item v-else-if="currentRoute && currentRoute.meta?.link" index="">
    <i v-if="currentRoute.meta?.menuIcon" :class="currentRoute.meta.menuIcon"></i>
    <template #title>
      <a :target="currentRoute.meta?.target" class="link-dom" :href="currentRoute.meta?.link">{{
        currentRoute.meta?.menuName
      }}</a>
    </template>
  </el-menu-item>
  <el-menu-item v-else-if="currentRoute && currentRoute.path" :index="currentRoute.path">
    <i v-if="currentRoute.meta?.menuIcon" :class="currentRoute.meta?.menuIcon"></i>
    <template #title>
      <span>{{ currentRoute.meta?.menuName }}</span>
    </template>
  </el-menu-item>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { ElMenuItem, ElSubMenu } from 'element-plus';
import { IMenuProps } from './index';
export default defineComponent({
  name: 'menu-item',
  props: {
    currentRoute: {
      default: () => ({}),
      type: Object as PropType<IMenuProps>,
    },
  },
  components: { ElMenuItem, ElSubMenu },
});
</script>
<style lang="less" scoped>
.el-menu-item {
  cursor: pointer;
  color: red;
  a {
    text-decoration: none;
    color: #ffffff;
  }
}

.el-menu-item.is-active {
  background: #1890ff !important;
}
.link-dom {
  display: block;
  text-decoration: none;
  color: #fff;
}
.custom-el-menu-item {
  overflow: hidden;
  .custom-el-menu-tooltip {
    display: inline-block;
    width: 100px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style>
