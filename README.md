# husky-left-menu-plus

### 安装方法

npm install husky-left-menu-plus --save-dev

```javascript
import huskyLeftMenuPlus from 'husky-left-menu-plus' //引入改组件
vue.use(huskyLeftMenuPlus)
```

```typescript
    // 参数类型
    menuData: {
      type: Array<{
          path:String
          name?:String
          meta:{
              menuName: String
              menuIcon?:String
          }
      }>,
      default: () => [],
    },
    defaultActive: {
      type: String, //默认高亮的表单item 同element-plus
      default: () => '',
    },
    collapse: { type: Boolean, default: false }, //菜单栏展开收起 同element-plus
    backgroundColor: {
      type: String, //背景色 同element-plus
      default: () => '#001529',
    },
    textColor: {
      type: String, //文字颜色 同element-plus
      default: 'rgba(255,255,255,.65)',
    },
    activeTextColor: {
      type: String, //高亮的文字颜色 同element-plus
      default: '#fff',
    },
```
