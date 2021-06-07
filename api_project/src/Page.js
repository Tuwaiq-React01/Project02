import React, { Component } from 'react'
import { Button, Card } from 'react-bootstrap';
import axios from 'axios'
import './Page.css'

export default class Page extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            sprites: {}
        }
    }
    componentDidMount() {
        this.callapi();
    }
    callapi() {
        axios({
            method: 'get',
            url: "games"
        }).then((response) => {

            console.log(response.data);
            this.setState({ data: response.data })
        }).catch((e) => {
            console.log("error", e);
        })
    }
    render() {
        return (
            <div >
                <p>{this.state.data.map((item, i) => {
                    return (
                            <div key={i} >
                                <div className="grid-container">
                                <Card style={{ width: '18rem' }} className="grid-item">
                                    <Card.Img className="image" variant="top" src={item.thumbnail} />
                                    <Card.Body>
                                        <Card.Title>Game Name: {item.title}</Card.Title>
                                        <Card.Text>
                                            <p>{item.short_description}</p>
                                        </Card.Text>
                                        <a href={item.freetogame_profile_url}> <Button variant="danger">Play</Button></a>
                                    </Card.Body>
                                </Card>
                                </div>
                            </div>
                    )
                })}</p>

            </div>
        )
    }
}
