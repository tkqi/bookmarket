import Main from '../views/Main.vue';
import Login from '../views/LoginPage.vue'
export default [
  {
    path: '/login',
    name: 'login',
    meta: { title: "登录" },
    component: Login
  },
  {
    path: '/',
    name: 'home',
    meta: { title: "主页" },
    redirect:'/home', 
    component: Main,
    children: [
      {
        path: '/home',
        name: 'Home',
        meta: { title: "主页" },
        component:()=> import('@/views/Main.vue')
      },
      {
        path: '/doc',
        name: 'Doc',
        meta: { title: "文档" },
        component:()=> import('@/views/Doc.vue')
      }
    ]
  }
]