import React, { Component } from 'react'

export default class Artc extends Component {
    constructor(props){
        super(props)
        this.state = {
            Show:false
        }
    }
    showA(){
        this.setState({Show : !this.state.Show})
      }
    render() {
        return (
            <div>
                <button onClick={()=>this.showA()}>Show Details</button>
                { this.state.Show? <p> {this.props.de}</p> : null }
            </div>
        )
    }
}
