import { LOGIN,GET_INFO,LOGOUT } from './action'
import { getToken } from '../utils/auth'

const initialState = {
    token: getToken(),
    name: '',
    avatar: ''
};

export default function reducer(state = initialState, action) {

    switch(action.type) {
        case LOGIN:
            return Object.assign({}, state, {
                token: action.token 
            })
            break
        case GET_INFO:
            return Object.assign({}, state, {
                name: action.userInfo.name,
                avatar: action.userInfo.avatar
            })
            break
        case LOGOUT:
            return Object.assign({}, state, {
                token: '',
                name: '',
                avatar: ''
            })
        default:
            return state
    }
}