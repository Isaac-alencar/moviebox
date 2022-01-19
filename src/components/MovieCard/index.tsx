import { useState } from 'react';

import { AiOutlineStar, AiFillStar } from "react-icons/ai";

import * as S from './styles';

export default function MovieCard() {

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
        src="https://image.tmdb.org/t/p/w500/oKIBhzZzDX07SoE2bOLhq2EE8rf.jpg"
        alt="Mr Robot"
      />
      <div>
        <S.Link to="/movie/id">Mr Robot</S.Link>
      </div>
    </S.Container>
  );
}
