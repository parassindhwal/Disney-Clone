import axios from "axios";

//Typically we would store in {process.env.API_KEY}
const API_KEY = "ec3a128658899f851827242f4302958b";

export const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,

    fetchGenres: `/genre/movie/list?api_key=${API_KEY}&language=en-US`,
};

export const fetchSearch = (query) => `/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`;

export const fetchById = (id) => `/movie/${id}?api_key=${API_KEY}`

export const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
});

export function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + '...' : string;
}