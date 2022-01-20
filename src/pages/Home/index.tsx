import { useEffect, useState } from "react";

import api from "../../services/api";

import { MovieBoxLogo } from "../../assets";

import Card from "../../components/shimmer/Card";
import MovieCard from "../../components/MovieCard";

import * as S from "./styles";

type Movie = {
  id: number;
  poster_path: string;
  original_title: string;
};

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fakeArr = Array.from(Array(20).keys());

  useEffect(() => {
    api
      .get(`/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`)
      .then((response) => setMovies(response.data.results))
      .finally(() => setIsLoading((prevState) => !prevState));
  }, []);

  return (
    <>
      <S.Header>
        <nav>
          <MovieBoxLogo />
          <S.Link to="/favorites">Favorites</S.Link>
        </nav>
      </S.Header>

      <S.PageTitle>Movies</S.PageTitle>

      <S.Main>
        <S.MovieList>
          {isLoading
            ? fakeArr.map((key) => {
                return (
                  <li key={key}>
                    <Card />
                  </li>
                );
              })
            : movies.map(({ id, poster_path, original_title }: Movie) => {
                return (
                  <li key={id}>
                    <MovieCard
                      id={id}
                      original_title={original_title}
                      poster_path={poster_path}
                    />
                  </li>
                );
              })}
        </S.MovieList>
      </S.Main>
    </>
  );
}
