import Vue from 'vue'
import App from './App.vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(Element)
Vue.config.productionTip = false
console.log(`目前是${process.env.NODE_ENV}环境`)
new Vue({
  render: h => h(App),
}).$mount('#app')
