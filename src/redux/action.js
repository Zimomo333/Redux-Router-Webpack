import { loginApi, logoutApi, getInfoApi } from '../api/user'
import { LOGIN, GET_INFO, LOGOUT } from './actionTypes'     // 必须将action type 常量提取到一个js文件，若写在action.js里会报错：Cannot access 'LOGIN' before initialization
import { setToken, removeToken, setUserInfo, removeUserInfo } from '../utils/auth'
import { createAction } from 'redux-actions';

export const login = (loginForm) => {
    const { username, password } = loginForm
    return createAction(
        LOGIN,
        loginApi({ username: username.trim(), password: password }).then(response => {
            const { data } = response
            setToken(data.token)
            return data.token
        })
    )
}

export const getInfo = (token) => {
    return createAction(
        GET_INFO,
        getInfoApi(state.token).then(response => {
            const { data:{ userInfo } } = response
            setUserInfo(userInfo)
            return userInfo
        })
    )
}

export const logout = (token) => {
    return createAction(
        LOGOUT,
        logoutApi(token).then(() => {
            removeToken()
            removeUserInfo()
            return null
        })
    )
}