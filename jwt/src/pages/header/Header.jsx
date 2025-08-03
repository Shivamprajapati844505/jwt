import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <Navbar bg={token ? "primary" : "dark"}>
      <Container>
        <Navbar.Brand
          as={token ? Link : "span"}
          to={token ? "/dashboard" : "/"}
        >
          Home
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />

        {token ? (
          <>
            <Nav.Link as={Link} to="/dashboard" className="nav-link">
              Dashboard
            </Nav.Link>
            <Nav.Link className="nav-link" onClick={handleLogout}>
              Logout
            </Nav.Link>
          </>
        ) : (
          <>
            <Nav.Link as={Link} to="/login" className="nav-link">
              Login
            </Nav.Link>
            <Nav.Link as={Link} to="/register" className="nav-link">
              Signup
            </Nav.Link>
          </>
        )}
      </Container>
    </Navbar>
  );
};

export default Header;
