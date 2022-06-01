import { createWebHistory, createRouter, RouteRecordRaw } from "vue-router";
import { BaseLayout } from "@/layout";

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: BaseLayout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        component: () => import('@/view/home')
      },
      {
        path: 'creditQuery',
        component: () => import('@/view/creditQuery')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router