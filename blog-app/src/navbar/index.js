import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import {  logout,setlogin } from "../redux/reducers/auth"; 
import { useSelector, useDispatch } from "react-redux";



function Navy() {
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return {
      name: state.auth.name,
      isLoggedIn:state.auth.isLoggedIn
    };
  });

  console.log(state.name);




const loogedOut=()=>{
  dispatch(logout(state.isLoggedIn));
console.log(state.isLoggedIn,"jjjjjjjjjjj");

}

 




console.log(state.isLoggedIn)
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
          {state.isLoggedIn == true ? (
                    <Nav.Link   href="/login"   onClick={ ()=>   loogedOut()}>logout</Nav.Link>
                  ) : (
                    <Nav.Link  href="/login"   >log in</Nav.Link>
                  )}
            <Nav.Link href="/profile">{state.name}</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navy;




/*    {isLoggedIn == true ? (
                    <Nav.Link href="/login">logout</Nav.Link>
                  ) : (
                    <></>
                  )} */