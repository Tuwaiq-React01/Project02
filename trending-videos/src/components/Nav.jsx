import React from 'react'
import { Navbar, Container, Row, Col } from 'react-bootstrap';


export default function Nav() {
    return (
        <>
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">Home</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                         <a className="link" href="/Videos"> Videos</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        

        </>


    )
}
