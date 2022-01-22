import { useQuery } from "react-query";

import { MovieType } from "../common/types";

import api from "../services/api";

type FetchMovie = () => Promise<MovieType[]>;

const fetchMovies: FetchMovie = async () => {
  const { data } = await api.get(
    `/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`
  );

  return data.results;
};

const useFetchMovies = () => useQuery("movies", fetchMovies);

export default useFetchMovies;
