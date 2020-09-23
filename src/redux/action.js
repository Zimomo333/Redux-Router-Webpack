import { loginApi, logoutApi, getInfoApi } from '../api/user'
import { LOGIN, GET_INFO, LOGOUT } from './actionTypes'     // 必须将action type 常量提取到一个js文件，若写在action.js里会报错：Cannot access 'LOGIN' before initialization
import { getToken, setToken, removeToken, setUserInfo, removeUserInfo } from '../utils/auth'
import { createAction } from 'redux-actions';

// 只使用redux-promise中间件，Action为Promise对象
// export const login = (loginForm) => {
//     const { username, password } = loginForm
//     return new Promise((resolve, reject) => 
//         loginApi({ username: username.trim(), password: password }).then(response => {
//             const { data } = response
//             setToken(data.token)
//             resolve({
//                 type: LOGIN,
//                 token: data.token
//             })
//         }).catch(error => {
//             reject(error)
//         })
//     )
// }

// 使用redux-actions简化，payload为Promise对象
export const login = (loginForm) => {
    const { username, password } = loginForm
    return createAction(
        LOGIN,
        () => {     // payload 为 Promise对象，promiseMiddleware会调用then取里面的值，然后重新dispatch(action)
            return loginApi({ username: username.trim(), password: password }).then( response =>{
                const { data } = response
                setToken(data.token)
                return data.token
            })
        }
    )
}

export const getInfo = createAction(
    GET_INFO,
    () => {
        return getInfoApi(getToken()).then(response => {
            const { data:{ userInfo } } = response
            setUserInfo(userInfo)
            return userInfo
        })
    }
)

export const logout = createAction(
    LOGOUT,
    () => {
        return logoutApi(getToken()).then(() => {
            removeToken()
            removeUserInfo()
            return null
        })
    }
)