import commonApi from "./commonApi";
import { BASE_URL } from "./baseUrl";

export const getWatchedMoviesApi = () =>
  commonApi("GET", `${BASE_URL}/movies?status=watched`);

export const addMovieApi = (data) =>
  commonApi("POST", `${BASE_URL}/movies`, data);

export const updateMovieApi = (id, data) =>
  commonApi("PUT", `${BASE_URL}/movies/${id}`, data);

export const deleteMovieApi = (id) =>
  commonApi("DELETE", `${BASE_URL}/movies/${id}`);
