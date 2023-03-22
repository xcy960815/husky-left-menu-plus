import Menu from './menu.vue';
import type { App } from 'vue';
export interface IMenuProps {
  path: string;
  children?: Array<IMenuProps>;
  meta?: {
    menuName: string;
    showInLeftMenu?: boolean;
    highLightActive?: string; // 左侧菜单栏高亮的菜单
    link?: string; // 外部链接
    target?: '_blank' | '_self' | '_parent' | '_top'; // 跳转外部链接的方式
    menuIcon?: string;
    permission?: Array<string>;
  };
}

Menu.install = (app: App): void => {
  app.component(Menu.name, Menu);
};

export default Menu;
