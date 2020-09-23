import { LOGIN, GET_INFO, LOGOUT } from './actionTypes'
import { getToken, getUserInfo } from '../utils/auth'

const initialState = {
    token: getToken(),
    name: getUserInfo() == null ? '' : getUserInfo().name,
    avatar: getUserInfo() == null ? '' : getUserInfo().avatar
};

export default function reducer(state = initialState, action) {

    switch(action.type) {
        case LOGIN:
            return Object.assign({}, state, {
                token: action.payload 
            })
            break
        case GET_INFO:
            return Object.assign({}, state, {
                name: action.payload.name,
                avatar: action.payload.avatar
            })
            break
        case LOGOUT:
            return Object.assign({}, state, {
                token: undefined,
                name: undefined,
                avatar: undefined
            })
        default:
            return state
    }
}