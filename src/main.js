import Vue from 'vue';
import App from './App.vue';
import VueEllipseProgress from 'vue-ellipse-progress';

Vue.use(VueEllipseProgress);


Vue.config.productionTip = false
new Vue({
  render: h => h(App),
}).$mount('#app')

window.Vue = Vue