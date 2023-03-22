<template>
  <h2 align="center">husky-left-menu-plus测试demo</h2>
  <HuskyLeftMenuPlus :menuData="menuDataState.menuData"></HuskyLeftMenuPlus>
</template>

<script lang="ts" setup>
import 'husky-left-menu-plus/dist/index.css';

import { reactive } from 'vue';
import HuskyLeftMenuPlus, { IMenuProps } from 'husky-left-menu-plus';
const menuDataState = reactive<{ menuData: Array<IMenuProps> }>({
  menuData: [
    {
      path: '/home',
      meta: {
        menuName: '首页',
        menuIcon: 'el-icon-s-home',
      },
    },
    {
      path: '/about',
      meta: {
        menuName: '关于',
        menuIcon: 'el-icon-s-home',
      },
    },
  ],
});
</script>
