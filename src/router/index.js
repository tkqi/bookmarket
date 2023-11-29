import Vue from 'vue'
import VueRouter from 'vue-router'
import baseRoutes from './routes'
Vue.use(VueRouter)

// 新建路由
const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: baseRoutes
})

// 路由守卫
router.beforeEach((to, from, next) => {
  // 验证登录token，不在登录页则验证，否则不验证
  if (to.path == '/login') {
    return next();
  }
  const token = sessionStorage.getItem('account');
  if(!token)
     return next('/login');
  else
     next();
})

// 跳转完成更新标题
router.afterEach((to, from)=>{
   document.title = to.meta.title;
})
export default router