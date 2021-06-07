
import axios from 'axios';
import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';


export default class List extends React.Component {
   
    constructor(props) {
        super(props)
        this.state = {
            random: Math.random(),
            image: "/loading.gif",
            title: "Tom And jerry",
            response: null
        }
    }
 
    componentDidMount() {
        axios.get('http://www.omdbapi.com/?s=tom%20and%20jerry&apikey=d4902665')
            .then(response => this.setState({
                image: response.data.Search[ Math.floor(Math.random() *10 )].Poster,

                

                response: response
            })
        )
    }

    componentDidUpdate(){
        console.log(this.state.response);
    }

    render() {
        return (
            <h1>
            <Col sm={10} md={12} lg={3} >
            <Card>
                <Card.Img variant="top" src={this.state.image} />
            </Card>
            </Col>
            </h1>
        )
    }
}