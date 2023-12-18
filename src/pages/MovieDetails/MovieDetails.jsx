import React, { useState, useEffect } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import {
  PageContainer,
  GoBackButton,
  MovieDetailsContainer,
  AdditionalInfoContainer,
} from './MovieDetails.styled';
import { fetchMovieDetails } from 'API/API';

const MovieDetails = () => {
  const location = useLocation();
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const defaultImg =
    '<https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700>';

  useEffect(() => {
    const getMovieDetails = async () => {
      setLoading(true);
      try {
        const details = await fetchMovieDetails(movieId);
        setMovieDetails(details);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      } finally {
        setLoading(false);
      }
    };

    getMovieDetails();
  }, [movieId]);

  if (!movieDetails) {
    return;
  }

  return (
    <PageContainer>
      <Link to={location.state?.from ?? '/'}>
        <GoBackButton>Go back</GoBackButton>
      </Link>
      {loading && <Loader />}

      {movieDetails && (
        <MovieDetailsContainer>
          <img
            src={
              movieDetails.poster_path
                ? `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
                : defaultImg
            }
            alt={movieDetails.original_title}
          />
          <div>
            <h1>
              {movieDetails.title} ({movieDetails.release_date.slice(0, 4)})
            </h1>
            <p>User score: {movieDetails.popularity}</p>
            <h2>Overview</h2>
            <p>{movieDetails.overview}</p>
            <h2>Genres</h2>
            <ul>
              {movieDetails.genres.map(genre => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>
          </div>
        </MovieDetailsContainer>
      )}
      <hr />
      <AdditionalInfoContainer>
        <h3>Additional information</h3>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
        <hr />
        <Outlet />
      </AdditionalInfoContainer>
    </PageContainer>
  );
};

export default MovieDetails;
