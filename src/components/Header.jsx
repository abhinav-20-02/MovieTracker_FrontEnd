import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { FaCompactDisc } from 'react-icons/fa'; // Using FaCompactDisc as a placeholder or FaFilm
import { Link } from 'react-router-dom';
import { FaClapperboard } from 'react-icons/fa6';

const Header = () => {
  return (
    <Navbar 
      fixed="top" 
      bg="dark" 
      variant="dark" 
      expand="lg" 
      className="py-3 px-2"
      style={{ 
        backgroundColor: 'rgba(13, 13, 13, 0.8) !important',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        zIndex: 1000
      }}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center gap-2 fw-bold fs-4">
          <FaClapperboard className="text-success" />
          <span style={{ letterSpacing: '1px' }}>MOVIETRACKER</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto gap-4">
            <Nav.Link as={Link} to="/" className="fw-medium hover-text-success">Home</Nav.Link>
            <Nav.Link as={Link} to="/movies" className="fw-medium hover-text-success">Movies</Nav.Link>
            {/* <Nav.Link as={Link} to="/watchlist" className="fw-medium hover-text-success">Watchlist</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
