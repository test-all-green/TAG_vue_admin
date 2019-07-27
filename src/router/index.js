import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout/layout'
import User from '@/views/User'
import ParkingLot from '@/views/ParkingLot'
import ParkingOrder from '@/views/ParkingOrder'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Layout',
            component: Layout,
            children:[
                {
                    path: '/user',
                    name: 'User',
                    component: User,
                },
                {
                    path: '/parkingLot',
                    name: 'parkingLot',
                    component: ParkingLot,
                },
                {
                    path: '/parkingOrder',
                    name: 'parkingOrder',
                    component: ParkingOrder,
                }
            ]
        }
    ]
})