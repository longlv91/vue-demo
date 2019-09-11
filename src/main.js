import Vue from 'vue';
import App from './App.vue';
import Antd from 'ant-design-vue';
import PerfectScrollbar from 'vue2-perfect-scrollbar';
import 'vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css';
import 'ant-design-vue/dist/antd.css';
import router from './router';
import i18n from './translations';
import VueRx from 'vue-rx';
import VueApexCharts from 'vue-apexcharts';


Vue.config.productionTip = false;
Vue.use(VueRx);
Vue.use(Antd);
Vue.use(PerfectScrollbar);
Vue.use(VueApexCharts);
Vue.component('apexchart', VueApexCharts);

new Vue({
  i18n,
  router,
  render: h => h(App),
}).$mount('#app');
