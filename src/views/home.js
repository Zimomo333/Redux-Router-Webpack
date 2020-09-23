import React from 'react'
import ReactDOM from 'react-dom'

import { matchRoutes } from 'react-router-config';
import renderRoutes from '../utils/renderRoutesGuard';
import { Link } from "react-router-dom";
import routes from '../router'

import store from '../redux/store'
import { logout } from '../redux/action'
import { createHashHistory } from 'history';

import { MenuUnfoldOutlined, MenuFoldOutlined, DownOutlined } from '@ant-design/icons';
import Sidebar from '../components/Sidebar'
import { Breadcrumb, Menu, Dropdown, Button } from 'antd';
import './home.css'

import { Layout } from 'antd';
const { Header, Sider, Content } = Layout;

export default class App extends React.Component {
    state = {
        collapsed: false
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed
        });
    };

    onClicklogout = () => {
        store.dispatch(logout()).then(()=> {
            createHashHistory().push('/login');
        })
    }

    menu = (
        <Menu>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" onClick={this.onClicklogout}>
              退出登录
            </a>
          </Menu.Item>
        </Menu>
    );

    render() {
        // 从父路由传来的prop.location中获取当前路径
        // matchRoutes方法 根据当前路径，获取 路由匹配历史 数组
        const history = matchRoutes(routes, this.props.location.pathname).slice(1);     //slice 去除首页 '/' 路由历史
        return (
            <div>
                <Layout>
                    <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                        <div className="logo" >React-Router-Webpack</div>
                        <Sidebar />
                    </Sider>
                    <Layout className="site-layout">
                        <Header className="site-layout-background" style={{ padding: 0 }}>
                            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                                className: 'trigger',
                                onClick: this.toggle,
                            })}
                            <Breadcrumb style={{ display: "inline" }}>
                                <Breadcrumb.Item><Link to="/">首页</Link></Breadcrumb.Item>
                                {
                                    history.map( (item,index) => 
                                            <Breadcrumb.Item key={index} >
                                                <Link to={item.route.path}>{item.route.title}</Link>
                                            </Breadcrumb.Item>
                                    )
                                }
                            </Breadcrumb>
                            <Dropdown overlay={this.menu} >
                                <Button style={{ float: "right", margin: "15px 15px 0 0", backgroundColor: "black",color: "white" }}>菜单<DownOutlined /></Button>
                            </Dropdown>
                        </Header>
                        <Content
                            className="site-layout-background"
                            style={{
                                margin: '24px 16px',
                                padding: 24,
                                minHeight: 700
                            }}
                        >
                            {/* child routes won't render without this */}
                            {/* 根据父组件传来的路由信息，渲染当前路由下的子路由所对应的组件 */}
                            { renderRoutes(this.props.route.routes) }
                        </Content>
                    </Layout>
                </Layout>
            </div>
        )
    }
}