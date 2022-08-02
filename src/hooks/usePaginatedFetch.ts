import { useQuery, useInfiniteQuery, InfiniteData } from "react-query";

import api from "../services/api";

import { MovieType, ShowType, MovieOrShowType } from "../common/types";

type PaginatedFetchMovies = (page: number) => Promise<MovieType[]>;
type PaginatedFetchShows = (page: number) => Promise<ShowType[]>;

const fetchPaginatedMovies: PaginatedFetchMovies = async (page = 1) => {
    const { data } = await api.get(
        `/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
    );

    return data.results;
};

const fetchPaginatedTVShows: PaginatedFetchShows = async (page = 1) => {
    const { data } = await api.get(
        `/tv/popular?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
    );

    return data.results;
};

const usePaginatedFetch = () =>
    useInfiniteQuery(
        ["movies-and-shows"],
        ({ pageParam = 1 }) => {
            console.log({ pageParam });
            return Promise.all([
                fetchPaginatedMovies(pageParam),
                fetchPaginatedTVShows(pageParam)
            ]);
        },
        {
            getNextPageParam: (lastPage, allPages) => {
                return allPages.length + 1;
            },
            keepPreviousData: true,
            select: (data): InfiniteData<MovieOrShowType[]> => {
                return {
                    ...data,
                    pages: data.pages.map(([movies, shows]) => {
                        const moviesAndShows = [...movies, ...shows];

                        return moviesAndShows
                            .sort((a, b) => b.popularity - a.popularity)
                            .map((movieOrShow) => {
                                const isShow = "name" in movieOrShow;
                                let name = "";

                                if (isShow) {
                                    name = movieOrShow.name;
                                } else {
                                    name = movieOrShow.original_title;
                                }

                                return {
                                    id: movieOrShow.id,
                                    poster_path: movieOrShow.poster_path,
                                    name,
                                    type: isShow ? "show" : "movie"
                                };
                            });
                    })
                };
            }
        }
    );

export default usePaginatedFetch;
