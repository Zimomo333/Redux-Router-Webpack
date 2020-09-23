import { ProfileOutlined, UserOutlined } from '@ant-design/icons';
import Home from './views/home'
import Info from './views/Info'
import Orders from './views/orders/index'
import MyOrders from './views/orders/myOrders'
import Submit from './views/orders/submit'
import Login from './views/login'

const routes = [
    {   // /login 必须放在 / 之前，要先渲染出<Route path="/" component={ LOGIN }></Route>，再渲染<Redirect to="/login" />
        path: '/login',
        component: Login
    },
    {
        path: '/',
        component: Home,
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