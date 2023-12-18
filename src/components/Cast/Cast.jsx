import React, { useState, useEffect } from 'react';
import { fetchCast } from 'API/API';
import Loader from 'components/Loader/Loader';
import { useParams } from 'react-router-dom';
import { CastContainer } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const defaultImg =
    '<https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700>';

  useEffect(() => {
    const getMovieCredits = async () => {
      if (!movieId) return;
      setLoading(true);
      try {
        const actors = await fetchCast(movieId);
        setCast(actors);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getMovieCredits();
  }, [movieId]);

  return (
    <CastContainer>
      {loading && <Loader />}
      <h2>Cast</h2>
      <ul>
        {cast.map(actor => (
          <li key={actor.id}>
            <img
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                  : defaultImg
              }
              alt={actor.original_name}
              width={100}
            />
            <h3>{actor.name}</h3>
            <p>Character: {actor.character}</p>
          </li>
        ))}
      </ul>
    </CastContainer>
  );
};

export default Cast;
