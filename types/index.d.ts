import { AllowedComponentProps } from 'vue';
import { ComponentCustomProps } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import { DefineComponent } from 'vue';
import { ExtractPropTypes } from 'vue';
import { PropType } from 'vue';
import { VNodeProps } from 'vue';

declare const _default: DefineComponent<
  {
    menuData: {
      type: PropType<IMenuProps[]>;
      default: () => never[];
    };
    defaultActive: {
      type: StringConstructor;
      default: () => string;
    };
    collapse: {
      type: BooleanConstructor;
      default: boolean;
    };
    backgroundColor: {
      type: StringConstructor;
      default: () => string;
    };
    textColor: {
      type: StringConstructor;
      default: string;
    };
    activeTextColor: {
      type: StringConstructor;
      default: string;
    };
  },
  unknown,
  unknown,
  {},
  {},
  ComponentOptionsMixin,
  ComponentOptionsMixin,
  {},
  string,
  VNodeProps & AllowedComponentProps & ComponentCustomProps,
  Readonly<
    ExtractPropTypes<{
      menuData: {
        type: PropType<IMenuProps[]>;
        default: () => never[];
      };
      defaultActive: {
        type: StringConstructor;
        default: () => string;
      };
      collapse: {
        type: BooleanConstructor;
        default: boolean;
      };
      backgroundColor: {
        type: StringConstructor;
        default: () => string;
      };
      textColor: {
        type: StringConstructor;
        default: string;
      };
      activeTextColor: {
        type: StringConstructor;
        default: string;
      };
    }>
  >,
  {
    defaultActive: string;
    collapse: boolean;
    backgroundColor: string;
    textColor: string;
    activeTextColor: string;
    menuData: IMenuProps[];
  }
>;
export default _default;

export declare interface IMenuProps {
  path: string;
  children?: Array<IMenuProps>;
  meta?: {
    menuName: string;
    showInLeftMenu?: boolean;
    highLightActive?: string;
    link?: string;
    target?: '_blank' | '_self' | '_parent' | '_top';
    menuIcon?: string;
    permission?: Array<string>;
  };
}

export {};
