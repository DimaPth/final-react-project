import React, { useState, useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useStyles } from '../layouts/defaultLayout.style';
import { MainContext } from "../contexts/mainContext";
import { NavLink, useParams } from "react-router-dom";

const useStyles1 = makeStyles({
    root: {
      maxWidth: 300,
    },
    media: {
      height: 220,
      width: 150
    },
});

const FilmCard = () => {
  const {tableItems} = useContext(MainContext);
  const [cardItems, setCardItems] = useState([]);
  console.log(cardItems);
  const {id} = useParams();
  const classes = useStyles1();

  useEffect(() => {
    fetch(`https://movie-database-imdb-alternative.p.rapidapi.com/?i=${id}&r=json`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "597c815aa4msh28d92088334d0eap1a133cjsnace39729c4ac",
        "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com"
      }
    })
    .then(response => response.json())
    .then(data => setCardItems(data))
    .catch(err => {
      console.error(err);
    });
  },[id])

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={`${cardItems.Poster}`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {`${cardItems.Title}`}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {`${cardItems.Plot}`}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <NavLink to='/'>
            Back
          </NavLink>
        </Button>
      </CardActions>
    </Card>
  );
}

export {FilmCard};