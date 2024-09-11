import React, { Component } from 'react'; // Correctement importé Component
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'; // Imports nécessaires à partir de react-bootstrap

export default class NavbarComp extends Component { // Nom de la classe en PascalCase par convention
  render() {
    return (
      <Navbar expand="lg" className="bg-body-tertiary" class="hazem">
        <Container>
          <Navbar.Brand href="#home">hazem's web site</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">page1</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
