import axios from 'axios';

const API_KEY = import.meta.env.VITE_MOVIE_API_KEY;

export interface Movie {
    id: number;
    title: string;
    poster_path: string;
    release_date: string;
    vote_average: number;
}

export const searchMovies = async (query: string): Promise<Movie[]> => {
    const response = await axios.get(`https://api.themoviedb.org/3/search/movie`, {
        params: {
            api_key: API_KEY,
            query,
        },
    });
    return response.data.results;
};