import Vue from 'vue';
import Antd from 'ant-design-vue';
import App from './App';
import 'ant-design-vue/dist/antd.css';
import router from './router'
import ECharts from 'vue-echarts'
import { use } from 'echarts/core'
Vue.config.productionTip = false;

import {
  CanvasRenderer
} from 'echarts/renderers'
import {
  BarChart
} from 'echarts/charts'
import {
  GridComponent,
  TooltipComponent
} from 'echarts/components'

use([
  CanvasRenderer,
  BarChart,
  GridComponent,
  TooltipComponent
]);

Vue.component('v-chart', ECharts)

Vue.use(Antd);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
