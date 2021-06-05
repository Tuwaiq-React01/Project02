import React from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './StyleCards.css'

export default class Cards extends React.Component {
    constructor() {
        super();
        this.state = {
            epicArray: []
        }
    }
    componentDidMount() {
        axios.get(`https://api.nasa.gov/EPIC/api/natural/images?api_key=K6FLQtrQpXhz6wDRuCrVbtdmWl2hvnEz0aklQYZ3`)
            .then(Response => {
                const epicArray = Response.data;
                this.setState({ epicArray });
                console.log(this.state.epicArray)
            })
    }
    render() {
        console.log(this.state.epicArray)
        const allCards =
            this.state.epicArray.map((epic) => {
                return (
                    <div className="card" key={epic.identifier}>
                        <img src={`https://epic.gsfc.nasa.gov/archive/natural/2021/06/02/png/${epic.image}.png`} className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">{epic.date}</h5>
                            <p className="card-text">{epic.caption}</p>
                        </div>
                    </div>
                )
            })
        const rowItem = allCards.map((item) => {
            return <Col xs="4">
                {item}
            </Col>
        })
        return (
            <div>
                <Container className="Cont">
                    <Row>
                        {rowItem}
                    </Row>
                </Container >
            </div >
        );
    }
}

