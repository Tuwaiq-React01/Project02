import React from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap';


export default function MainPage() {
    return (
        <div>
            <Container style={{marginTop:"50px"}}>
                <Row>
                    <Col><img src="http://gifimage.net/wp-content/uploads/2017/11/gif-no-background-3.gif" alt="" /></Col>
                    <Col style={{marginTop:"115px"}}>
                    <h2>Trending Videos</h2>
                    <h6>If You Want To See The Most Popular Videos In The World</h6>
                    <a href="/Videos"> <Button variant="outline-primary" style={{marginTop:"25px"}}>Videos</Button></a>
                    </Col>
                </Row>

                {/* <Row>
                    <Col style={{marginTop:"115px"}}>
                    <h2>Music</h2>
                    <h6>If You Want To Hear The Most Famous Music in The World</h6>
                    <a href="/Videos"> <Button variant="outline-primary" style={{marginTop:"25px"}}>Music</Button></a>
                    </Col>
                    <Col><img src="https://lh3.googleusercontent.com/proxy/qXhul2poe_p1A2YpC3ZhirJowlOGXY-1r5izIc8q3UAPFYOwn34DbR_f5aWLWWfESARaMgCdrocEFRuJquzghsNyVcR5Pw10qig4LTbGPfJGWEuyG9oav4of-zY88_7TPw" alt=""  width="650px" height="500px"/></Col>
                </Row> */}
<br />
            </Container>
        </div>
    )
}

