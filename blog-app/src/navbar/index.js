import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { useSelector, useDispatch } from "react-redux";
 


function Navy() {

  const state = useSelector((state) => {
    return {
  
      name: state.auth.name,
    };
  });

console.log(state.name);

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Blogry</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/posts">Posts</Nav.Link>
            <Nav.Link href="/Users">Users</Nav.Link>
            
          </Nav>
          <Nav>
          
            <Nav.Link  href="/profile">
          {state.name}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navy;