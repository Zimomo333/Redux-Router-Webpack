import { ProfileOutlined, UserOutlined } from '@ant-design/icons';
import App from './App'
import Home from './views/home'
import Info from './views/Info'
import Orders from './views/orders/index'
import MyOrders from './views/orders/myOrders'
import Submit from './views/orders/submit'
import Login from './views/login'

const routes = [
    {
        path: '/',
        component: App,
        routes: [
            {
                path: '/home',
                component: Home,
                routes: [
                    {
                        path: '/home/info',
                        component: Info,
                        title: '个人中心',
                        icon: UserOutlined
                    },
                    { 
                        path: '/home/orders',
                        component: Orders,
                        title: '订单管理',
                        icon: ProfileOutlined,
                        routes: [
                            {
                                path: '/home/orders/my-orders',
                                component: MyOrders,
                                title: '我的订单',
                                icon: ProfileOutlined
                            },
                            {
                                path: '/home/orders/submit',
                                component: Submit,
                                title: '提交订单',
                                icon: ProfileOutlined
                            }
                        ]
                    }
                ]
            },
            {
                path: '/login',
                component: Login
            }
        ]
    }
]

export default routes