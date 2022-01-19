import { useHistory } from "react-router-dom";

import { MovieBoxLogo } from "../../assets";

import { FiArrowLeft } from "react-icons/fi";

import Card from "../../components/shimmer/Card";
import MovieCard from "../../components/MovieCard";

import * as S from "./styles";

export default function Favorites() {

  const fakeArr = Array.from(Array(20).keys());

  const history = useHistory()

  return (
    <>
      <S.Header>
        <FiArrowLeft size={24} onClick={() => history.goBack()} />
        <MovieBoxLogo />
      </S.Header>

      <S.PageTitle>Favorites</S.PageTitle>

      <S.Main>

        <S.MovieList>
          {fakeArr.map((key) => {
            return (
              <li key={key}>
                {isLoading ? <Card /> : <MovieCard />}
              </li>
            );
          })}
        </S.MovieList>

      </S.Main>
    </>
  );
}
