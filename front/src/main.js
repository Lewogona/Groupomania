import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin, BootstrapVueIcons } from 'bootstrap-vue'
import PortalVue from 'portal-vue'
import VeeValidate from 'vee-validate';
import UserName from "./components/UserName"

import router from './router'
import store from './store'

Vue.component("UserName", UserName)

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(BootstrapVueIcons)
Vue.use(PortalVue)
Vue.use(VeeValidate);

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
