export type MovieType = {
    id: number;
    poster_path: string;
    original_title: string;
    overview: string;
    vote_average: number;
    release_date: number;
    runtime: number;
    genres: Array<{ id: number; name: string }>;
    popularity: number;
};

export type ShowType = {
    id: number;
    poster_path: string;
    name: string;
    overview: string;
    vote_average: number;
    genres: Array<{ id: number; name: string }>;
    popularity: number;
};

export type MovieOrShowType = {
    id: number;
    poster_path: string;
    name: string;
    type: "movie" | "show";
};
