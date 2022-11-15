import React from 'react';
import MovieCard from '../../utils/MovieCard';
import { MovieID } from '../../utils/tmdb-api/types';
import useMovieDetails from '../../utils/useMovieDetails';

interface FavoriteMovieCardProps {
  movieId: MovieID;
}

const FavoriteMovieCard = ({ movieId }: FavoriteMovieCardProps) => {
  const { data: movie } = useMovieDetails(movieId);

  return <MovieCard movie={movie} />;
};

export default FavoriteMovieCard;
