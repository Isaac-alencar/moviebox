import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { MovieOrShowType } from "../../common/types";

interface FavoriteState {
    movies: MovieOrShowType[];
}

const initialState: FavoriteState = {
    movies: []
};

const addFavoriteMovie = (
    state: FavoriteState,
    action: PayloadAction<MovieOrShowType>
) => {
    const existingMovie = state.movies.find(
        (movie) => movie.id === action.payload.id
    );
    if (!existingMovie) {
        state.movies.push(action.payload);
    }
};

const removeFavoriteMovie = (
    state: FavoriteState,
    action: PayloadAction<number>
) => {
    const newFavoriteMovieList = state.movies.filter(
        (movie) => movie.id !== action.payload
    );
    state.movies = newFavoriteMovieList;
};

export const favoritesSlice = createSlice({
    name: "favorites",
    initialState,
    reducers: {
        addFavoriteMovie,
        removeFavoriteMovie
    }
});

export const {
    addFavoriteMovie: addFavorite,
    removeFavoriteMovie: removeFavorite
} = favoritesSlice.actions;

export default favoritesSlice.reducer;
