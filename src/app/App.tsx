import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import MainMenu from './MainMenu';
import SearchMovies from '../features/search-movies/SearchMovies';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import LocalMoviesIcon from '@material-ui/icons/LocalMovies';
import HomeIcon from '@material-ui/icons/Home';

import LoadingIndicator from './LoadingIndicator';
import Typography from '@material-ui/core/Typography';
import HomePage from './HomePage';
import './App.css';

const PopularMovies = React.lazy(
  () => import('../features/popular-movies/PopularMovies')
);
const SearchMoviesResult = React.lazy(
  () => import('../features/search-movies/SearchMoviesResult')
);
const FavoriteMovies = React.lazy(
  () => import('../features/favorites/FavoriteMovies')
);
const MovieDetails = React.lazy(
  () => import('../features/movie-details/MovieDetails')
);

const useStyles = makeStyles({
  toolbar: {
    justifyContent: 'space-between',
  },
  main: {
    display: 'flex',
    justifyContent: 'center',
  },
  content: {
    width: '85%',
  },
});

function App() {
  const classes = useStyles();

  return (
    <Router>
      <CssBaseline />
      <AppBar color="secondary" position={'sticky'}>
        <LoadingIndicator />
        <Toolbar className={classes.toolbar}>
          <Route
            render={(props) => (
              <MainMenu
                {...props}
                items={[
                  {
                    path: '/',
                    label: 'Home',
                    iconComponent: HomeIcon,
                  },
                  {
                    path: '/popular-movies',
                    label: 'Movies',
                    iconComponent: LocalMoviesIcon,
                  },
                  {
                    path: '/my-list',
                    label: 'My list',
                    iconComponent: BookmarkBorderIcon,
                  },
                ]}
              />
            )}
          />
          <Route path={['/search/:query', '/']} component={SearchMovies} />
        </Toolbar>
      </AppBar>
      <main className={classes.main}>
        <div className={classes.content}>
          <Suspense fallback={<Typography>Loading...</Typography>}>
            <Switch>
              <Redirect from="/search" exact to="/" />
              <Route path="/" exact component={HomePage} />
              <Route path="/popular-movies" exact component={PopularMovies} />
              <Route path="/search/:query" component={SearchMoviesResult} />
              <Route path="/my-list" component={FavoriteMovies} />
              <Route path="/movie/:movieId" component={MovieDetails} />
            </Switch>
          </Suspense>
        </div>
      </main>
    </Router>
  );
}

export default App;
