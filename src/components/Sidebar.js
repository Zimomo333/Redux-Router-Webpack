import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from "react-router-dom";
import { Menu } from 'antd';
import  routes from "../router"

const { SubMenu } = Menu;

class Sidebar extends React.Component {

    nested(routes) {    //递归渲染嵌套导航栏
        return (
            routes.map( route => {
                if(!route.routes){
                    return (
                        <Menu.Item key={route.path} icon={<route.icon />}>
                            <Link to={route.path}>{route.title}</Link>
                        </Menu.Item>
                    );
                } else {
                    return (
                        <SubMenu key={route.path} icon={<route.icon />} title={route.title}>
                            { this.nested(route.routes) }
                        </SubMenu>
                    );
                }
            })
        );
    }

    render() {
        return (
            <div>
                <Menu
                    onClick={this.handleClick}
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="dark"
                >
                {/* 取route[0] 导航栏省略外层App组件 */}
                { this.nested(routes[1].routes) }
                </Menu>
            </div>
        );
    }
}

export default Sidebar