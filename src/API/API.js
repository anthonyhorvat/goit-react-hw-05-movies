import axios from 'axios';
const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'c4a9dfca9cba37da86d3cf680152b639';

export const getTrendingMovies = async () => {
  try {
    const response = await axios.get(
      `${API_URL}trending/movie/day?api_key=${API_KEY}`
    );
    return response.data.results;
  } catch (error) {
    console.error('Error fetching trending movies:', error);
    return [];
  }
};

export const searchMovies = async query => {
  try {
    const response = await axios.get(
      `${API_URL}search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=1&include_adult=false`
    );
    return response.data.results;
  } catch (error) {
    console.error('Error searching movies:', error);
    return [];
  }
};
export const fetchMovieDetails = async movieId => {
  try {
    const response = await axios.get(
      `${API_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    return [];
  }
};

export const fetchCast = async movieId => {
  try {
    const response = await axios.get(
      `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
    );
    return response.data.cast;
  } catch (error) {
    console.error('Error fetching trending movies:', error);
    return [];
  }
};

export const fetchReviews = async movieId => {
  try {
    const response = await axios.get(
      `${API_URL}movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
    );
    return response.data.results;
  } catch (error) {
    console.error('Error fetching movie reviews:', error);
    return [];
  }
};
