import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';
import Home from './Home';
import Services from './Services';
import Packages from './Packages';
import BookingForm from './BookingForm';
import Button from 'react-bootstrap/Button';

function Navigator() {
  const location = useLocation();

  return (
    <>
      <Navbar bg="warning" variant="light" expand="lg">
        <Container>
          <Link to="/" className="navbar-brand">
            Travel
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="navbar-nav" className="justify-content-end">
            <Nav className="ml-2">
              <LinkContainer to="/" exact>
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/Services">
                <Nav.Link>Services</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/Packages">
                <Nav.Link>Packages</Nav.Link>
              </LinkContainer>
              {location.pathname !== '/BookingForm' && (
                <LinkContainer to="/BookingForm" className="d-lg-none w-100">
                  <Button variant="primary">Book Now</Button>
                </LinkContainer>
              )}
            </Nav>
            {!location.pathname.startsWith('/BookingForm') && (
              <LinkContainer to="/BookingForm" className="d-none d-lg-block">
                <Button variant="success">Book Now</Button>
              </LinkContainer>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Packages" element={<Packages />} />
        <Route path="/BookingForm" element={<BookingForm />} />
      </Routes>
    </>
  );
}

export default Navigator;
