import React from 'react';
import IconButton from '@material-ui/core/IconButton';

import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import { useDispatch, useSelector } from 'react-redux';
import { addMovie, removeMovie } from './favoritesSlice';
import { MovieID } from '../../tmdb-api/types';
import { RootState } from '../../app/store';

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.primary.dark,
  },
}));

interface FavoriteBadgeProps {
  movieId: MovieID;
  className?: string;
}

function FavoriteBadge({ movieId, className }: FavoriteBadgeProps) {
  const classes = useStyles();
  const inFavorites = useSelector((state: RootState) =>
    state.favorites.includes(movieId)
  );
  const dispatch = useDispatch();

  const onIconClick = (e: React.MouseEvent) => {
    e.preventDefault();

    if (inFavorites) {
      dispatch(removeMovie(movieId));
    } else {
      dispatch(addMovie(movieId));
    }
  };

  return (
    <Tooltip
      title={`${inFavorites ? 'Remove from' : 'Add to'} My List`}
      className={className || classes.root}
    >
      <IconButton onClick={onIconClick}>
        {inFavorites ? <BookmarkIcon /> : <BookmarkBorderIcon />}
      </IconButton>
    </Tooltip>
  );
}

export default FavoriteBadge;
