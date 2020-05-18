import React from "react";
import { Link, NavLink } from 'react-router-dom';
import {Navbar, Nav, Container} from "react-bootstrap";
import logo from "../../logo.png";


function Header() {
return (
  <div className="container-fluid">
    <div className="row">
      <Navbar bg="light" expand="md" className="w-100 pt-0 pb-0">
        <Container>
          <Link className="brand" to="/">
          <img src={logo} alt="logo" className="img img-fluid" width="100" />
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <NavLink exact className="nav-link" activeClassName="activeLink" to="/"> Home</NavLink>
              <NavLink className="nav-link" activeClassName="activeLink" to="/about"> About</NavLink>
              <NavLink className="nav-link" activeClassName="activeLink" to="/my-work"> Work</NavLink>
              <NavLink className="nav-link" activeClassName="activeLink" to="/posts"> Posts</NavLink>
              <NavLink className="nav-link" activeClassName="activeLink" to="/contact"> Contact</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  </div>
)
}

export default Header;