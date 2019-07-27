import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout/layout'
import Test from '@/views/Test'


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
                    path: '/test',
                    name: 'Test',
                    component: Test,
                }
            ]
        }
    ]
})