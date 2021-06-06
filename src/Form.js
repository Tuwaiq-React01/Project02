import React, { Component } from 'react'


export default class form extends Component {
    render() {
        return (
            <div>
                <label>{this.props.text}</label>
                <input type={this.props.type}></input>  {/*the props will change depending on the component */}
           
            </div>
        )
    }
}
