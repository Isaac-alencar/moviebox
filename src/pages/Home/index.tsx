import { useEffect } from "react";

import usePaginatedFetch from "../../hooks/usePaginatedFetch";

import { MovieBoxLogo } from "../../assets";

import Card from "../../components/shimmer/Card";
import MovieCard from "../../components/MovieCard";

import * as S from "./styles";

export default function Home() {
    const fakeArr = Array.from(Array(20).keys());

    const { data, isLoading, fetchNextPage } = usePaginatedFetch();

    useEffect(() => {
        function handleScroll() {
            const { scrollHeight, scrollTop, clientHeight } =
                window.document.documentElement;

            if (scrollHeight - scrollTop === clientHeight) {
                fetchNextPage();
            }
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    });

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
                        : data?.pages.map((page) => {
                              return page?.map(
                                  ({ id, poster_path, name, type }) => {
                                      return (
                                          <li key={id}>
                                              <MovieCard
                                                  id={id}
                                                  name={name}
                                                  poster_path={poster_path}
                                                  type={type}
                                              />
                                          </li>
                                      );
                                  }
                              );
                          })}
                </S.MovieList>
            </S.Main>
        </>
    );
}
