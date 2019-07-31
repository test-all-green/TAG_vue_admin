import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout/layout'
import User from '@/views/User'
import ParkingLot from '@/views/ParkingLot'
import ShareParkingLot from '@/views/ShareParkingLot'
import ParkingOrder from '@/views/ParkingOrder'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/login',
            component: () => import('@/views/login'),
            hidden: true
          },
        {
            path: '/',
            name: 'Layout',
            component: Layout,
            redirect: '/login',
            children:[
                {
                    path: '/user',
                    name: 'User',
                    component: User,
                },
                {
                    path: '/parkingLot',
                    name: 'ParkingLot',
                    component: ParkingLot,
                },
                {
                    path: '/shareParkingLot',
                    name: 'ShareParkingLot',
                    component: ShareParkingLot,
                },
                {
                    path: '/parkingOrder',
                    name: 'ParkingOrder',
                    component: ParkingOrder,
                }
            ]
        }
    ]
})