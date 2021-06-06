import React, { Component } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Joke extends Component {
    state = {
        users: [],
        name: ''
    }

    componentDidMount() {
        this.handleClick();
    }

    componentWillUnmount() {
        alert("Welcome");
    }


    handleClick = (e) => {
        axios.get("https://official-joke-api.appspot.com/random_joke")
            .then(res => {
                console.log(res.data)
                this.setState({
                    users: res.data
                })
            })
    }

    render() {

        return (
            <div>
                <br></br>
                <br></br>
                <h4>
                    {this.state.users.setup}
                </h4>
                <h5>
                    {this.state.users.punchline}
                </h5>
                <br></br>
                <Button onClick={this.handleClick}>New Joke</Button>
            </div>
        )
    }
}
