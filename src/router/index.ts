import { createWebHistory, createRouter, RouteRecordRaw } from "vue-router";
import { BaseLayout } from "@/layout";

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: BaseLayout,
    children: [
      {
        path: 'home',
        component: () => import('@/view/home')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router