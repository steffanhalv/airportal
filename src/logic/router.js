import {
    createRouter,
    createWebHistory
} from 'vue-router'

const routes = [{
    path: '/',
    component: () => import('@/views/Login.vue')
},
{
    path: '/admin',
    component: () => import('@/views/Dashboard.vue'),
    children: [{
        path: 'users',
        component: () => import('@/views/Users.vue')
    },
    {
        path: 'server',
        component: () => import('@/views/Server.vue')
    },
    {
        path: 'profile',
        component: () => import('@/views/Profile.vue')
    },
    {
        path: 'settings',
        component: () => import('@/views/Settings.vue')
    },
    {
        path: 'types/:type',
        component: () => import('@/views/Type.vue'),
        props: true
    }
    ]
},
{
    path: '/setup',
    component: () => import('@/views/Setup.vue')
},
{
    path: '/:pathMatch(.*)*',
    redirect: '/'
}
]

const router = createRouter({
    history: createWebHistory("/"),
    routes
})

export default router