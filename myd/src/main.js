// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './zh_en'
import axios from 'axios'
import { Button,Radio,RadioGroup,RadioButton,Carousel,CarouselItem,Tabs,TabPane,Loading,Checkbox,CheckboxButton,CheckboxGroup,} from 'element-ui';
Vue.use(Button)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(RadioButton)
Vue.use(Checkbox)
Vue.use(CheckboxGroup)
Vue.use(CheckboxButton)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Loading)
Vue.config.productionTip = false
Vue.prototype.$http=axios
Vue.prototype.baseUrl=process.env.API_ROOT
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
	store,
  components: { App },
  template: '<App/>'
})
var loadinginstace
var num=0
axios.interceptors.request.use(
  config => {
		num++
		loadinginstace = Loading.service({
        text: '正在加载',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.3)',
    })
    return config;
  },
  error => {
    return Promise.reject(error);
  })
axios.interceptors.response.use(
    response => {
		num--
		if(num<=0){
			loadinginstace.close()
		}
				
        return response;
    },
    error => {
        return Promise.reject(error.response.data)   // 返回接口返回的错误信息
    });
router.beforeEach((to,from,next)=>{
	if(to.meta.title){
		document.title=to.meta.title
	}
	next()
})
router.afterEach(function (to) {
 window.scrollTo(0, 0)
})