import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <strong>MyApp</strong>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto"> 
            <Nav.Link as={Link} to="/login" className="btn btn-outline-light me-2 no-underline">
              Login
            </Nav.Link>
            <Nav.Link as={Link} to="/register" className="btn btn-primary no-underline">
              SignUp
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
