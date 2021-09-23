
import Vue from 'vue'
import App from './App.vue'
import antd from 'ant-design-vue'
import Icon from './components/Icon.vue'

import 'ant-design-vue/dist/antd.css'


Vue.use(antd)
Vue.component('Icon', Icon)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
