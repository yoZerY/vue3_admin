import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/layout/index.vue'

const publicRoutes = [
  {
    path: '/',
    name: 'Layout',
    redirect: '/profile',
    component: Layout,
    children: [
      {
        path: '/profile',
        name: 'Profile',
        meta: {
          title: 'Profile',
          icon: 'el-icon-user',
          iconName: 'User'
        },
        component: import('../views/profile/index.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login/index.vue')
  },
  {
    path: '/404',
    name: 'Error404',
    component: () => import('../views/errorPages/404.vue')
  },
  {
    path: '/401',
    name: 'Error401',
    component: () => import('../views/errorPages/401.vue')
  }
]

const privateRoutes = [
  {
    path: '/user',
    component: Layout,
    redirect: '/user/manage',
    name: 'userManage',
    meta: {
      title: 'user',
      icon: 'personnel'
    },
    children: [
      {
        path: '/user/manage',
        component: () => import('@/views/userManage/index.vue'),
        meta: {
          title: 'userManage',
          icon: 'personnel-manage'
        }
      },
      {
        path: '/user/info/:id',
        name: 'userInfo',
        component: () => import('@/views/userInfo/index'),
        props: true,
        meta: {
          title: 'userInfo'
        }
      },
      {
        path: '/user/import',
        name: 'import',
        component: () => import('@/views/import/index'),
        meta: {
          title: 'excelImport'
        }
      },
      {
        path: '/user/role',
        component: () => import('@/views/roleList/index.vue'),
        meta: {
          title: 'roleList',
          icon: 'role'
        }
      },
      {
        path: '/user/permission',
        component: () => import('@/views/permissionList/index.vue'),
        meta: {
          title: 'permissionList',
          icon: 'permission'
        }
      }
    ]
  },
  {
    path: '/article',
    component: Layout,
    redirect: '/article/ranking',
    name: 'articleRanking',
    meta: { title: 'article', icon: 'article' },
    children: [
      {
        path: '/article/ranking',
        component: () => import('@/views/articleRanking/index.vue'),
        meta: {
          title: 'articleRanking',
          icon: 'article-ranking'
        }
      },
      {
        path: '/article/:id',
        component: () => import('@/views/articleDetail/index.vue'),
        meta: {
          title: 'articleDetail'
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: [...publicRoutes, ...privateRoutes]
})

export default router
