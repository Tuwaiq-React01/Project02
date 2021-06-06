import React, { Component } from 'react'
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

export default class FoodImage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            image: "/loading.gif",
            title: "Meal Title",
            desc: "Instructions",
            response: null
        }
    }

    componentDidMount() {
        axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
            .then(response => this.setState({
                image: response.data.meals[0].strMealThumb,
                title: response.data.meals[0].strMeal,
                desc: response.data.meals[0].strInstructions,
                response: response
            })
        )
    }

    componentDidUpdate(){
        console.log(this.state.response);
    }

    render() {
        return (
            <Col sm={6} md={4} lg={3} >
            <Card>
                <Card.Img variant="top" src={this.state.image} />
                <Card.Body>
                    <Card.Title>{this.state.title}</Card.Title>
                    <Card.Text>{this.state.desc}</Card.Text>
                </Card.Body>
            </Card>
            </Col>
        )
    }
}
