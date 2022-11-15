import React from 'react';
import { useSelector } from 'react-redux';
import InfiniteMoviesList from '../../utils/InfiniteMoviesList';
import FavoriteMovieCard from './FavoriteMovieCard';
import { RootState } from '../../utils/store';

const FavoriteMovies = () => {
  const movieIds = useSelector((state: RootState) => state.favorites);

  return (
    <InfiniteMoviesList items={movieIds}>
      {(movieId) => <FavoriteMovieCard movieId={movieId} />}
    </InfiniteMoviesList>
  );
};

export default FavoriteMovies;
