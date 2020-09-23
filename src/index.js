import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from "react-router-dom";
import renderRoutes from './utils/renderRoutesGuard';   // 重写renderRoutes方法，增加路由权限拦截功能
import routes from './router'

import 'antd/dist/antd.css';

ReactDOM.render(
    <HashRouter>
        {/* 路由根入口，选择在index.js放置根入口，是为了给App组件传递prop.location，用以获取当前路径构建面包屑 */}
        { renderRoutes(routes) }
    </HashRouter>,
    document.getElementById("root")
);