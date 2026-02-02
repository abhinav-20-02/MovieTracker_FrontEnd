import React, { useEffect, useState } from "react";
import { Container, Button, Row, Col, Card, Badge } from "react-bootstrap";
import { FaPlus, FaStar, FaTrash, FaEdit, FaUserTie, FaUsers, FaCalendarAlt } from 'react-icons/fa';
import AddMovieModal from "../components/AddMovieModal";
import {
  getWatchedMoviesApi,
  addMovieApi,
  updateMovieApi,
  deleteMovieApi
} from "../services/allApis";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editMovie, setEditMovie] = useState(null);

  const fetchMovies = async () => {
    try {
      const res = await getWatchedMoviesApi();
      if (res.status === 200) {
        setMovies(res.data);
      }
    } catch (error) {
      console.error("Failed to fetch movies:", error);
    }
  };

  const handleAddMovie = async (data) => {
    try {
      await addMovieApi({ ...data, status: "watched" });
      setShowModal(false);
      fetchMovies();
    } catch (error) {
      console.error("Failed to add movie:", error);
    }
  };

  const handleEditMovie = async (data) => {
    try {
      await updateMovieApi(data.id, data);
      setEditMovie(null);
      setShowModal(false);
      fetchMovies();
    } catch (error) {
      console.error("Failed to update movie:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteMovieApi(id);
      fetchMovies();
    } catch (error) {
      console.error("Failed to delete movie:", error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="bg-dark min-vh-100 py-5 mt-5">
      <Container className="pt-4">
        <div className="d-flex justify-content-between align-items-center mb-5 flex-wrap gap-3">
          <h2 className="text-white fw-bold mb-0">🎬 My Movies</h2>
          <Button 
            variant="success" 
            className="d-flex align-items-center gap-2 px-4 py-2 border-0 shadow-lg" 
            style={{ backgroundColor: '#28a745' }}
            onClick={() => {
              setEditMovie(null);
              setShowModal(true);
            }}
          >
            <FaPlus /> Add Movie
          </Button>
        </div>

        {movies.length === 0 ? (
          <div className="text-center py-5 text-secondary">
            <p className="fs-4">Your movie collection is empty.</p>
            <p>Click "Add Movie" to start tracking!</p>
          </div>
        ) : (
          <Row xs={2} sm={3} md={4} lg={5} xl={6} className="g-3">
            {movies.map(movie => (
              <Col key={movie.id}>
                <Card className="h-100 bg-secondary border-0 text-white shadow-sm movie-card overflow-hidden">
                  <div style={{ height: '180px', overflow: 'hidden', position: 'relative' }}>
                    <Card.Img 
                      variant="top" 
                      src={movie.image} 
                      style={{ objectFit: 'cover', height: '100%', transition: 'transform 0.3s' }}
                      className="card-hover-zoom"
                    />
                    <Badge 
                      bg="success" 
                      className="position-absolute top-0 end-0 m-1 d-flex align-items-center gap-1 p-1 shadow"
                      style={{ fontSize: '0.65rem' }}
                    >
                      <FaStar size={10} /> {movie.rating}
                    </Badge>
                  </div>
                  <Card.Body className="d-flex flex-column p-2">
                    <div className="mb-2">
                      <Card.Title className="fw-bold mb-0 text-truncate" style={{ fontSize: '0.9rem' }}>{movie.title}</Card.Title>
                      <small className="text-info fw-bold text-uppercase" style={{ fontSize: '0.6rem', letterSpacing: '0.5px' }}>
                        {movie.genre}
                      </small>
                    </div>

                    <div className="mb-2 mt-auto">
                      <div className="d-flex align-items-center gap-1 mb-1 opacity-75" style={{ fontSize: '0.7rem' }}>
                        <FaUserTie className="text-primary" size={10} />
                        <span className="text-truncate">{movie.director}</span>
                      </div>
                      <div className="d-flex align-items-center gap-1 mb-1 opacity-75" style={{ fontSize: '0.7rem' }}>
                        <FaCalendarAlt className="text-primary" size={10} />
                        <span>{movie.year}</span>
                      </div>
                    </div>

                    <div className="d-flex gap-1 pt-2 border-top border-dark">
                      <Button 
                        variant="outline-info" 
                        size="sm"
                        className="w-100 p-1 d-flex align-items-center justify-content-center gap-1 border-0 bg-dark-subtle"
                        style={{ fontSize: '0.7rem' }}
                        onClick={() => {
                          setEditMovie(movie);
                          setShowModal(true);
                        }}
                      >
                        <FaEdit size={10} /> Edit
                      </Button>
                      <Button 
                        variant="outline-danger" 
                        size="sm"
                        className="w-100 p-1 d-flex align-items-center justify-content-center gap-1 border-0 bg-dark-subtle"
                        style={{ fontSize: '0.7rem' }}
                        onClick={() => handleDelete(movie.id)}
                      >
                        <FaTrash size={10} /> Delete
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        )}

        <AddMovieModal
          show={showModal}
          handleClose={() => setShowModal(false)}
          onSubmit={editMovie ? handleEditMovie : handleAddMovie}
          editData={editMovie}
        />
      </Container>
    </div>
  );
};

export default Movies;
