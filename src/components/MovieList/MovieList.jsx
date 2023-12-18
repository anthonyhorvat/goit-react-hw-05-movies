import { useLocation } from 'react-router-dom';
import {
  MovieListContainer,
  MovieListItem,
  StyledLink,
  PosterImage,
  MovieTitle,
} from './MovieList.styled';
const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <MovieListContainer>
      {movies.map(movie => (
        <MovieListItem key={movie.id}>
          <StyledLink to={`/movies/${movie.id}`} state={{ from: location }}>
            <PosterImage
              src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
              alt={`${movie.title} Poster`}
            />
            <MovieTitle>{movie.title}</MovieTitle>
          </StyledLink>
        </MovieListItem>
      ))}
    </MovieListContainer>
  );
};
export default MovieList;
