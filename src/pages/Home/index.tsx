import { useState } from "react"; 

import usePaginatedFetch from "../../hooks/usePaginatedFetch";

import { MovieBoxLogo } from "../../assets";

import Card from "../../components/shimmer/Card";
import MovieCard, { MovieCardData } from "../../components/MovieCard";

import * as S from "./styles";

export default function Home() {
  const fakeArr = Array.from(Array(20).keys());

  const [page, setPage] = useState<number>(1);

  const { data: movies, isLoading } = usePaginatedFetch(page);

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
            : movies?.map(
                ({ id, poster_path, original_title }: MovieCardData) => {
                  return (
                    <li key={id}>
                      <MovieCard
                        id={id}
                        original_title={original_title}
                        poster_path={poster_path}
                      />
                    </li>
                  );
                }
              )}
        </S.MovieList>
        <S.Navigation>
          <S.NavigationButton
            onClick={() => setPage((prevPage) => prevPage - 1)}
            disabled={page === 1 ? true : false}
          >
            Prev Page
          </S.NavigationButton>
          <S.NavigationButton
            onClick={() => setPage((prevPage) => prevPage + 1)}
            disabled={false}
          >
            Next Page
          </S.NavigationButton>
        </S.Navigation>
      </S.Main>
    </>
  );
}
