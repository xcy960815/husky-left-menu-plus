<template>
  <!-- 递归组件 -->
  <el-submenu
    v-if="currentRoute && currentRoute.children && currentRoute.children.length > 0"
    :index="currentRoute.path"
  >
    <template #title>
      <i v-if="currentRoute.meta.menuIcon" :class="currentRoute.meta.menuIcon"></i>
      <span>{{ currentRoute.meta.menuName }}</span>
    </template>
    <template v-for="childRoute in currentRoute.children" :key="childRoute.name">
      <menu-item :current-route="childRoute"> </menu-item>
    </template>
  </el-submenu>
  <el-menu-item v-else-if="currentRoute && currentRoute.meta.link" index>
    <template #title>
      <i v-if="currentRoute.meta.menuIcon" :class="currentRoute.meta.menuIcon"></i>
      <a :target="currentRoute.meta.target" class="link-dom" :href="currentRoute.meta.link">{{
        currentRoute.meta.menuName
      }}</a>
    </template>
  </el-menu-item>
  <el-menu-item v-else-if="currentRoute && currentRoute.path" :index="currentRoute.path">
    <template #title>
      <i v-if="currentRoute.meta.menuIcon" :class="currentRoute.meta.menuIcon"></i>
      <span>{{ currentRoute.meta.menuName }}</span>
    </template>
  </el-menu-item>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'menu-item',
  props: {
    currentRoute: {
      default: () => ({}),
      type: Object,
    },
  },
})
</script>
<style lang='less' scoped>
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