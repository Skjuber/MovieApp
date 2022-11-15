import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
const useStyles = makeStyles({
  homePage: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  img: {
    width: '650px',
  },
  button: {
    marginTop: '20px',
  },
});

function HomePage() {
  const classes = useStyles();
  return (
    <div className={classes.homePage}>
      <div>
        <Typography variant="h1">
          All your streaming platforms in one app.
        </Typography>
        <Typography variant="h6" color="secondary">
          Get personalized recommendations for movies and series available on
          Netflix, Amazon Prime Video, Ivi and more.
        </Typography>

        <Button variant="contained" size="large" className={classes.button}>
          <Link to="/popular-movies">Discover movies for you</Link>
        </Button>
      </div>
      <img
        className={classes.img}
        src="https://i.imgur.com/KGEkxMi.jpg"
        alt=""
      />
    </div>
  );
}

export default HomePage;
