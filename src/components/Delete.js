import React, { Component } from 'react'
import {ReactComponent as ReactLogo} from '../icons/delete.svg'

export default class Delete extends Component {
    render() {
        return (
            <div className="delete" onClick={this.props.handleDeleteGame} >
            <ReactLogo />
            </div>
        )
    }
}
