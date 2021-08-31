import menu from './menu.vue'
import { App, DefineComponent } from 'vue'

// 按需加载element-plus
import { ElMenu, ElMenuItem, ElSubmenu } from 'element-plus'
// 有问题 通过postcss打包外部样式 会有错误
// import 'element-plus/lib/theme-chalk/index.css'

const components: Array<DefineComponent | any> = [menu]

const install = (app: App) => {
    app.use(ElMenu)
    app.use(ElSubmenu)
    app.use(ElMenuItem)
    components.forEach((component) => {
        app.component(component.name, component)
    })
}
export default {
    install,
}
