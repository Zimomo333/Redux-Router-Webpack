import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from "react-router-dom";
import { renderRoutes } from 'react-router-config';     // 官方路由配置助手(类似Vue Router，集中式配置)
import routes from './router'

import 'antd/dist/antd.css';

ReactDOM.render(
    <HashRouter>
        {/* 路由根入口，选择在index.js放置根入口，是为了给App组件传递prop.location，用以获取当前路径构建面包屑 */}
        { renderRoutes(routes) }
    </HashRouter>,
    document.getElementById("root")
);