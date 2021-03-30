import React, { useState, useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { NavLink, useParams } from "react-router-dom";
import { FilmApiServise } from "../features/services/filmsApiService";
import { LocalStorageService } from "../../services/localStorage";

const useStyles1 = makeStyles((theme) => ({
  root: {
    maxWidth: 900,
    margin: '0 auto',
    display: 'flex',
    background: 'linear-gradient( rgb(140 138 138 / 60%), rgb(53 50 50 / 70%) )',
    color: theme.palette.common.white,
  },
  media: {
    height: 440,
    width: 300,
  },
  link: {
    textDecoration: 'none',
    color: 'black',
    margin: theme.spacing(2)
  },
  cardContent: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: "space-around",
    alignItems: 'center',
  }
}));

const FilmCard = () => {
  const [cardItems, setCardItems] = useState([]);
  const { id } = useParams();
  const classes = useStyles1();
  const handleClick = () =>{
    LocalStorageService.setItems({ cardItems });
  }

  useEffect(() => {
    FilmApiServise.getById(id)
      .then((data) => setCardItems(data))
  }, [id]);

  return (
    <Card className={classes.root}>
        <div>
          <CardMedia className={classes.media} image={`${cardItems.Poster}`} />
        </div>
        <div>
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h4" component="h2">
            {`${cardItems.Title}`}
          </Typography>
          <Typography variant="body1" component="p">
            {`Actors: ${cardItems.Actors}`}
          </Typography>
          <Typography variant="body1" component="p">
            <Typography variant='h5' component='p' style={{marginBottom: 10}}>Overview:</Typography>
            {`${cardItems.Plot}`}
          </Typography>
          <CardActions>
            <NavLink className={classes.link} to="/">
              <Button size="small" color="primary" variant="contained">
                Back
              </Button>
            </NavLink>
              <Button size="small" variant="contained" onClick={handleClick}>
                Add to favorite
              </Button>
          </CardActions>
        </CardContent>
      </div>
    </Card>
  );
};

export { FilmCard };
