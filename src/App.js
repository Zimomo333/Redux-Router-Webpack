import React from 'react'
import ReactDOM from 'react-dom'
import { renderRoutes } from 'react-router-config';

export default class App extends React.Component {
    render() {
        return (
            <div>
                { renderRoutes(this.props.route.routes) }
            </div>
        )
    }
}