
import { Navbar, Nav } from 'react-bootstrap';


export const NavBar = () => {
    return (
        <>
         <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
       
      <Nav.Link>About</Nav.Link>
      <Nav.Link href="#features">My List</Nav.Link>
    </Nav>
    
  </Navbar>
      </>
    )
}
