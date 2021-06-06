import React, { Component } from 'react'
import {ReactComponent as ReactLogo} from '../icons/heart.svg'
export default class Fave extends Component {
    render() {
        return (
            // <img src="heart.svg" alt="Favorite" onClick={this.props.handleFaveToggle} />
            <div className={`fave ${this.props.isFave? "is-fave" : ""}`} onClick={this.props.handleFaveToggle} >
            <ReactLogo />
            </div>
        )
    }
}
