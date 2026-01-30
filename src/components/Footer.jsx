import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-secondary py-4 border-top border-secondary">
      <Container className="text-center">
        <p className="mb-0">&copy; {new Date().getFullYear()} MovieTracker. All Movie Data from My Personal Collection.</p>
        <small>Built with React, Bootstrap, and Love for Cinema.</small>
      </Container>
    </footer>
  );
};

export default Footer;
