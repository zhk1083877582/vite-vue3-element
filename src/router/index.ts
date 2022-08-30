import { createRouter, createWebHistory } from 'vue-router'
// 开启历史模式
// vue2中使用的mode：history 实现
const routes = [
{
  path: '/',
  redirect: '/home' // 重定向到home页面
},
{
  path: '/home',
  component: () => import('@/views/Home.vue') // 在src文件夹下新建的views文件夹，用于存放各个页面
},
{
  path: '/about',
  component: () => import('@/views/AdoutView.vue')
}, {
  path: '/test',
  component: () => import('@/views/test.vue')
}]
const router = createRouter(
{
  history: createWebHistory(),
  routes
})

export default router