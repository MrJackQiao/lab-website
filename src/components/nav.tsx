import React from "react";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../App.css";

export default function Header() {
  return (
    <Container fluid>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand as={NavLink} to="/">
            X-Lab
          </Navbar.Brand>
          <Nav className="justify-content-end" variant="pills" id="navbar">
            <Nav.Link as={NavLink} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/people">
              People
            </Nav.Link>
            <Nav.Link as={NavLink} to="/publication">
              Publications
            </Nav.Link>
            <Nav.Link as={NavLink} to="/openings">
              Openings
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </Container>
  );
}
