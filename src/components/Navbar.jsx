import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const Navigation = () => {
  return (
    <div>
      <Navbar className="navigation fixed-top transparent" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <h3>Event</h3>
          </Navbar.Brand>
          <Navbar.Toggle
            className="bg-light"
            aria-controls="basic-navbar-nav"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">
                <p className="text-white">Home</p>
              </Nav.Link>
              <Nav.Link href="#link">
                <p className="text-white">About</p>
              </Nav.Link>
              <Nav.Link href="#link">
                <p className="text-white">Dashboard</p>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
