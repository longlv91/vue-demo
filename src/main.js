import Vue from 'vue';
import App from './App.vue';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import router from './router';
import i18n from './translations';
import VueRx from 'vue-rx';

Vue.config.productionTip = false;
Vue.use(VueRx);
Vue.use(Antd);

new Vue({
  i18n,
  router,
  render: h => h(App),
}).$mount('#app');
