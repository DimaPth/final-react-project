import React, { useState, useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "../layouts/defaultLayout.style";
import { MainContext } from "../contexts/mainContext";
import { NavLink, useParams } from "react-router-dom";
import { FilmApiServise } from "../features/services/filmsApiService";

const useStyles1 = makeStyles({
  root: {
    maxWidth: 500,
  },
  media: {
    height: 440,
    width: 300,
  },
});

const FilmCard = () => {
  const { tableItems } = useContext(MainContext);
  const [cardItems, setCardItems] = useState([]);
  console.log(cardItems);
  const { id } = useParams();
  const classes = useStyles1();

  useEffect(() => {
    FilmApiServise.getById(id)
      .then((data) => setCardItems(data))
  }, [id]);

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={`${cardItems.Poster}`} />
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
          <NavLink to="/">Back</NavLink>
        </Button>
      </CardActions>
    </Card>
  );
};

export { FilmCard };
