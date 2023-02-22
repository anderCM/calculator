import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <Navbar bg="dark" variant="dark">
    <Container fluid>
      <Link className="navbar-brand" to="/">
        <h1 className="d-none d-md-block">Math Magicians</h1>
        <h3 className="d-block d-md-none">Math Magicians</h3>
      </Link>
      <Nav className="float-end">
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/calculator">Calculator</Link>
        <Link className="nav-link" to="/quote">Quote</Link>
      </Nav>
    </Container>
  </Navbar>
);

export default NavBar;
