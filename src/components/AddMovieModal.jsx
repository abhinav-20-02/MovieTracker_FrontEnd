import React, { useState, useEffect } from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';

const AddMovieModal = ({ show, handleClose, onSubmit, editData }) => {
  const [movieData, setMovieData] = useState({
    title: '',
    director: '',
    year: '',
    cast: '',
    rating: '',
    genre: '',
    image: 'https://images.unsplash.com/photo-1485846234645-a62644ef7467?q=80&w=2069&auto=format&fit=crop'
  });

  useEffect(() => {
    if (editData) {
      setMovieData(editData);
    } else {
      setMovieData({
        title: '',
        director: '',
        year: '',
        cast: '',
        rating: '',
        genre: '',
        image: 'https://images.unsplash.com/photo-1485846234645-a62644ef7467?q=80&w=2069&auto=format&fit=crop'
      });
    }
  }, [editData, show]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(movieData);
  };

  return (
    <Modal show={show} onHide={handleClose} centered contentClassName="bg-dark text-white border-secondary">
      <Modal.Header closeButton closeVariant="white" className="border-secondary">
        <Modal.Title className="fw-bold">{editData ? 'Edit Movie' : 'Add New Movie'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Movie Title</Form.Label>
            <Form.Control 
              type="text" 
              required 
              className="bg-secondary border-0 text-white"
              value={movieData.title}
              onChange={(e) => setMovieData({...movieData, title: e.target.value})}
              placeholder="e.g. Inception"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Director</Form.Label>
            <Form.Control 
              type="text" 
              required 
              className="bg-secondary border-0 text-white"
              value={movieData.director}
              onChange={(e) => setMovieData({...movieData, director: e.target.value})}
              placeholder="Christopher Nolan"
            />
          </Form.Group>
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Year</Form.Label>
                <Form.Control 
                  type="number" 
                  required 
                  className="bg-secondary border-0 text-white"
                  value={movieData.year}
                  onChange={(e) => setMovieData({...movieData, year: e.target.value})}
                  placeholder="2010"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Rating</Form.Label>
                <Form.Control 
                  type="number" 
                  step="0.1" 
                  max="10" 
                  required 
                  className="bg-secondary border-0 text-white"
                  value={movieData.rating}
                  onChange={(e) => setMovieData({...movieData, rating: e.target.value})}
                  placeholder="8.8"
                />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group className="mb-3">
            <Form.Label>Main Cast</Form.Label>
            <Form.Control 
              type="text" 
              required 
              className="bg-secondary border-0 text-white"
              value={movieData.cast}
              onChange={(e) => setMovieData({...movieData, cast: e.target.value})}
              placeholder="Leonardo DiCaprio, etc."
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Genre</Form.Label>
            <Form.Control 
              type="text" 
              required 
              className="bg-secondary border-0 text-white"
              value={movieData.genre}
              onChange={(e) => setMovieData({...movieData, genre: e.target.value})}
              placeholder="Sci-Fi, Action..."
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Image URL</Form.Label>
            <Form.Control 
              type="url" 
              className="bg-secondary border-0 text-white"
              value={movieData.image}
              onChange={(e) => setMovieData({...movieData, image: e.target.value})}
              placeholder="https://images.unsplash.com/..."
            />
          </Form.Group>
          <Button variant="success" type="submit" className="w-100 py-2 fw-bold border-0" style={{ backgroundColor: '#28a745' }}>
            {editData ? 'Update Movie' : 'Save Movie'}
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AddMovieModal;
