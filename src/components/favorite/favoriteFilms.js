import { Box, Button, Card, CardActionArea, CardContent, CardMedia, IconButton, makeStyles, Paper, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { LocalStorageService } from "../../services/localStorage";
import { MainContext } from "../contexts/mainContext";
import DeleteSweepIcon from '@material-ui/icons/DeleteSweep';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 20,
    marginRight: 15,
    maxWidth: 150,
    backgroundColor: '#292828',
    position: 'relative',
  },
  deleteAll: {
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 2,
    color: 'firebrick',
  },
  deleteIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    zIndex: 2,
    color: 'firebrick',
  },
  media: {
    height: 225,
    width: 150,
  },
  container: {
    position: 'relative',
    display: 'flex',
    flexWrap: 'wrap',
  },
  content: {
    backgroundColor: '#292828',
    color: theme.palette.common.white,
  },
  text: {
    margin: '20px auto 0',
    color: theme.palette.common.white,
    textAlign: 'center',
  },
}));



export const FavoriteFilms = () => {
  const classes = useStyles();
  const [favoriteFilm, setFavoriteFilm] = useState(LocalStorageService.getItem("favorite" || []));
  const removeAll = () => {
    LocalStorageService.setItems({
        favorite: []
    });
    setFavoriteFilm('')
  };
  const removeFilm = (id) => {
    console.log(id);
    setFavoriteFilm(favoriteFilm.filter(film => film.imdbID !== id));
    LocalStorageService.setItems({
      favorite: favoriteFilm.filter((film) => film.imdbID !== id)
    });
  }
  return (
    <Box className={classes.container}>
      <IconButton
          edge="start"
          className={classes.deleteAll}
          onClick={removeAll}
      >
        <DeleteSweepIcon fontSize='large' />
      </IconButton>
      {(!favoriteFilm || favoriteFilm.length === 0)
        ? (<Typography className={classes.text} variant="h5" component="h2">No favorite films</Typography>) 
        : (favoriteFilm.map(film => {
        return(
          <Card className={classes.root}> 
            <CardActionArea>
              <NavLink to={`/card/${film.imdbID}`}>
                <CardMedia
                  className={classes.media}
                  image={`${film.Poster}`}
                />
              </NavLink>
            </CardActionArea>
            <CardContent className={classes.content}>
              <Typography gutterBottom variant="h6" component="h2">
                {film.Title}
              </Typography>
            </CardContent>
            <IconButton
                edge="start"
                className={classes.deleteIcon}
                onClick={() => removeFilm(film.imdbID)}
            >
              <DeleteIcon />
            </IconButton>
          </Card>
        )
      }))}
    </Box>
  );
};
