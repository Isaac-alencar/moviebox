import { useState } from "react";

import { AiOutlineStar, AiFillStar } from "react-icons/ai";

import * as S from "./styles";

type MovieType = {
  id: number;
  original_title: string;
  poster_path: string;
};

export default function MovieCard({ id, original_title, poster_path }: MovieType) {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const toggleFavorite = () => setIsFavorite((prevState) => !prevState);

  return (
    <S.Container>
      <S.Favorite aria-label="toggle favorite">
        {isFavorite ? (
          <AiFillStar size={24} onClick={toggleFavorite} />
        ) : (
          <AiOutlineStar size={24} onClick={toggleFavorite} />
        )}
      </S.Favorite>
      <img
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={original_title}
      />
      <div>
        <S.Link to={`/movie/${id}`}>{original_title}</S.Link>
      </div>
    </S.Container>
  );
}
