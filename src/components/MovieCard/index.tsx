import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/useStore";

import { MovieOrShowType } from "../../common/types";

import {
    addFavorite,
    removeFavorite
} from "../../store/reducers/favoriteSlice";

import { AiOutlineStar, AiFillStar } from "react-icons/ai";

import * as S from "./styles";

export default function MovieCard(movieData: MovieOrShowType) {
    const { movies } = useAppSelector((state) => state.favorites);

    const dispatch = useAppDispatch();

    const [isFavorite, setIsFavorite] = useState<boolean>(() => {
        const isFavoriteMovie = movies.find(
            (movie) => movie.id === movieData.id
        );
        return !!isFavoriteMovie;
    });

    const toggleFavorite = () => {
        if (isFavorite) {
            dispatch(removeFavorite(movieData.id));
            setIsFavorite((prevState) => !prevState);
        } else {
            dispatch(addFavorite(movieData));
            setIsFavorite((prevState) => !prevState);
        }
    };

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
                src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`}
                alt={movieData.name}
            />
            <div>
                <S.Link to={`/movie/${movieData.id}`}>{movieData.name}</S.Link>
                <S.Type>
                    {movieData.type === "movie" ? `Movie` : `TV Show`}
                </S.Type>
            </div>
        </S.Container>
    );
}
