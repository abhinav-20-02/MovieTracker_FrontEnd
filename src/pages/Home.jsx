import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import movieCollage from '../assets/images/1_1.webp';

const Home = () => {
  return (
    <div style={{
      backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.9) 30%, rgba(0,0,0,0.3) 100%), url(${movieCollage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'right center',
      backgroundAttachment: 'fixed',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center'
    }}>
      <Container className="py-5 mt-5">
        <Row className="align-items-center">
          <Col lg={8} className="text-start">
            <h1 className="display-3 fw-bold mb-4 text-white" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
              Track every movie you've ever watched.
            </h1>
            <p className="lead text-white mb-5" style={{ 
              opacity: 0.95, 
              textShadow: '1px 1px 3px rgba(0,0,0,0.8)',
              maxWidth: '600px'
            }}>
              The social network for film lovers. Keep track of what you've seen, log your favorites, and share your reviews with the community.
            </p>
            <Button as={Link} to="/movies" variant="success" size="lg" className="px-5 py-3 fw-bold shadow-lg border-0" style={{ backgroundColor: '#28a745' }}>
              Get Started
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
