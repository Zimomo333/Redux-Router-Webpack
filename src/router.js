import { ProfileOutlined, UserOutlined } from '@ant-design/icons';
import React, { PureComponent } from 'react'
import App from './App'
import Info from './views/Info'
import Orders from './views/orders/index'
import MyOrders from './views/orders/myOrders'
import Submit from './views/orders/submit'

const routes = [
    {
        component: App,
        routes: [
            {
                path: '/info',
                component: Info,
                title: '个人中心',
                icon: UserOutlined
            },
            { 
                path: '/orders',
                component: Orders,
                title: '订单管理',
                icon: ProfileOutlined,
                routes: [
                    {
                        path: '/orders/my-orders',
                        component: MyOrders,
                        title: '我的订单',
                        icon: ProfileOutlined
                    },
                    {
                        path: '/orders/submit',
                        component: Submit,
                        title: '提交订单',
                        icon: ProfileOutlined
                    }
                ]
            }
        ]
    }
]

export default routes