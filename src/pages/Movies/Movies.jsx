import React, { useState, useEffect } from 'react';
import { searchMovies } from 'API/API';
import { useSearchParams } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import SearchForm from 'components/SearchForm/SearchForm';
import MovieList from 'components/MovieList/MovieList';

const Movies = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const searchRequest = searchParams.get('query');

  useEffect(() => {
    if (!searchRequest) {
      return;
    }
    const getMovies = async () => {
      setLoading(true);
      try {
        const foundedMovies = await searchMovies(searchRequest);
        if (foundedMovies.length === 0) {
          alert('Oops! Movie is not found');
        }
        setSearchResults(foundedMovies);
      } catch (error) {
        setError('Ooops. Something went wrong...');
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getMovies();
  }, [searchRequest]);

  function onSubmit(value) {
    setSearchParams({ query: `${value}` });
  }

  return (
    <main>
      <SearchForm searchMovies={onSubmit} />
      {loading && <Loader />}
      {error && <div>{error}</div>}

      {searchResults && <MovieList movies={searchResults} />}
    </main>
  );
};

export default Movies;

// const Movies = () => {
//   const [movies, setMovies] = useState([
//     'movie-1',
//     'movie-2',
//     'movie-3',
//     'movie-4',
//     'movie-5',
//   ]);
//   const [searchParams, setSearchParams] = useSearchParams();
//   const movieId = searchParams.get('movieId');

//   const visibleMovies = movies.filter(movie => movie.includes(movieId));
//   return (
//     <div>
//       <input
//         type="text"
//         value={movieId}
//         onChange={evt => setSearchParams({ movieId: evt.target.value })}
//       ></input>
//       <br />
//       {movies.map(movie => {
//         return (
//           <Link key={movie} to={`${movie}`}>
//             {movie}
//             <br />
//           </Link>
//         );
//       })}
//     </div>
//   );
// };

// export default Movies;
