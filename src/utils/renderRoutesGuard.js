import store from '../redux/store'
import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Redirect, Switch } from 'react-router-dom'

function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
  
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
  
      return target;
    };
  
    return _extends.apply(this, arguments);
}

export default function renderRoutes(routes, extraProps, switchProps) {
    if (extraProps === void 0) {
      extraProps = {};
    }
  
    if (switchProps === void 0) {
      switchProps = {};
    }
  
    return routes ? React.createElement(Switch, switchProps, routes.map(function (route, i) {   //reactRouter.Switch 改 Switch
      return React.createElement(Route, {
        key: route.key || i,
        path: route.path,
        exact: route.exact,
        strict: route.strict,
        render: function render(props) {
          // 若已登录 或 为登陆页面 则渲染组件
          if( typeof(store.getState().token) !== 'undefined' || route.path === '/login' ){
            return route.render ? route.render(_extends({}, props, {}, extraProps, {
                route: route
            })) : React.createElement(route.component, _extends({}, props, extraProps, {
                route: route
            }));
          } else {
            // 若未登录，上一步if只渲染了<Route path="/" component={ LOGIN }></Route>，
            // 最后渲染<Redirect to="/login" />，相当于重定向到LOGIN组件
            return <Redirect to="/login" />
          }
        }
      });
    })) : null;
}