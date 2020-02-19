import Vue from 'vue'
import VueRouter from 'vue-router'
import index  from '../views/index.vue'
import wode  from '../views/wode.vue'
import pinglun  from '../views/pinglun.vue'
import wenzhangxiangqing  from '../views/wenzhangxiangqing.vue'
import banner  from '../views/banner.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: index,
  },
	{
		path: '/wode',
		component: wode,
	},
	{
		path: '/pinglun',
		component: pinglun,
	},
	{
		path: '/wenzhangxiangqing',
		component: wenzhangxiangqing,
	},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
