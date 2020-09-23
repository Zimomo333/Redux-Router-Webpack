import React from 'react'
import ReactDOM from 'react-dom'
import store from '../redux/store'
import { getInfo } from '../redux/action'

export default class Info extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            avatar: ''
        };
    }

    componentDidMount(){
        store.dispatch(getInfo()).then(() =>
            this.setState({
                name: store.getState().name,
                avatar: store.getState().avatar
            })
        )
    }

    render() {
        return (
            <div>
                <h3>I am { this.state.name }</h3>
                <h3>avatar: { this.state.avatar }</h3>
            </div>
        )
    }
}