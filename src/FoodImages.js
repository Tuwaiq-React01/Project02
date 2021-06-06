import React, { Component } from 'react'
import Row from 'react-bootstrap/Row';
import FoodImage from './FoodImage'

export default class FoodImages extends Component {
    render() {
        let images = []
        for (let i = 0; i < 30; i++) images.push(i)
        images = images.map(i => <FoodImage key={i} />)
        return (
            <Row>
                {images}
            </Row>
        )
    }
}
