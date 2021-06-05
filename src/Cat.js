import React, { Component } from 'react'

export default class Cat extends Component {
    componentDidMount(){
        alert("Component Did Mount")
        document.getElementsByTagName("body")[0].style.backgroundColor="#8a827b"
    }
    componentWillUnmount(){
        alert("GoodBay")
    }
    render() {
        let facts = this.props.data.map((fact) => {
            return (
            <div class="m-3 d-flex justify-content-center">
                <div class="m-3">
                    <div class="card text-white bg-info mb-3" style={{ maxWidth: "18rem" }}>
                        <div class="card-header">Cat</div>
                        <div class="card-body">
                            <h5 class="card-title">this facts for cat</h5>
                            <p class="card-text">{fact.text}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
        })
        return (
            <div>
                    {facts}
            </div>
        )
    }
}
