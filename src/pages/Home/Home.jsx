import React, { useEffect, useState } from 'react';
import { getTrendingMovies } from 'API/API';
import Loader from 'components/Loader/Loader';
import MovieList from 'components/MovieList/MovieList';
import { PageTitle } from './Home.styled';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      setLoading(true);
      try {
        const trendingMovies = await getTrendingMovies();
        setTrendingMovies(trendingMovies);
      } catch (error) {
        console.error('Error fetching trending movies', error);
      } finally {
        setLoading(false);
      }
    };
    fetchTrendingMovies();
  }, []);
  return (
    <main>
      <PageTitle>Trending today</PageTitle>
      <MovieList movies={trendingMovies} />
      {loading && <Loader />}
    </main>
  );
};

export default Home;
