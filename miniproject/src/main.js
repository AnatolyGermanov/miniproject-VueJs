import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import components from '@/components/UI'
import directives from '@/directives'
import vuetify from '@/plugins/vuetify'

const app = createApp(App);

components.forEach((component) => {
    app.component(component.name, component)
})

directives.forEach((directive) => {
    app.directive(directive.name, directive);
})

router.beforeEach((to, from, next) => {
    if (!store.state.user.isAuth && to.meta.requiredAuth){
        next('/')
    }
    else{
        next()
    }
})

app
    .use(store)
    .use(router)
    .use(vuetify)
    .mount('#app')
