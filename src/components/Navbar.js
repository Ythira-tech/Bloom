import React from 'react';
import { Navbar, Container, Form, FormControl, Button } from 'react-bootstrap';
import './Navbar.css';
import logo from '../assets/mental-health.png'; // Adjust path if needed

function MindBloomNavbar() {
  return (
    <Navbar
      expand="lg"
      variant="light"
      className="position-absolute w-100 top-0 z-3 custom-navbar"
      style={{ backgroundColor: 'skyblue', border: 'none' }}
    >
      <Container>
        {/* Left: Brand */}
        <Navbar.Brand href="#home" className="mindbloom-brand">
          <img
            src={logo}
            alt="MindBloom Logo"
            style={{ width: '30px', marginRight: '8px' }}
          />
          MindBloom
        </Navbar.Brand>

        {/* Toggler for mobile */}
        <Navbar.Toggle aria-controls="navbar-nav" />

        {/* Center: Search */}
        <Navbar.Collapse
          id="navbar-nav"
          className="justify-content-end align-items-center"
        >
          <Form className="d-flex me-3" style={{ maxWidth: '300px' }}>
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              style={{ borderRadius: '17px', padding: '10px' }}
            />
            
          </Form>

          {/* Button-style links */}
          <div className="d-flex gap-4">
            <Button variant="outline-success" href="#login" className="rounded-pill">
              Login
            </Button>
            <Button variant="success" href="#sign-up" className="rounded-pill">
              Sign Up
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MindBloomNavbar;
