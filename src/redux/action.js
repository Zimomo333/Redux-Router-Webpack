import { login, logout, getInfo } from '../api/user'
import { setToken, removeToken, setUserInfo, removeUserInfo } from '../utils/auth'
import { createAction } from 'redux-actions';

export const LOGIN = 'LOGIN';
export const GET_INFO = 'GET_INFO';
export const LOGOUT = 'LOGOUT';

export const login = (loginForm) => {
    const { username, password } = loginForm
    return createAction(
        LOGIN,
        login({ username: username.trim(), password: password }).then(response => {
            const { data } = response
            setToken(data.token)
            return data.token
        })
    )
}

export const getInfo = (token) => {
    return createAction(
        GET_INFO,
        getInfo(state.token).then(response => {
            const { data:{ userInfo } } = response
            setUserInfo(userInfo)
            return userInfo
        })
    )
}

export const logout = (token) => {
    return createAction(
        LOGOUT,
        logout(token).then(() => {
            removeToken()
            removeUserInfo()
            return null
        })
    )
}