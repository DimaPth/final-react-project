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
import { useStyles1 } from "./movieCard.style";

const getFavoriteItems = () => LocalStorageService.getItem("favorite") || [];

const FilmCard = () => {
  const { id } = useParams();
  const classes = useStyles1();
  const [cardItems, setCardItems] = useState([]);
  const [isSelected, setIsSelected] = useState(
    getFavoriteItems().some((fItem) => fItem.imdbID === id)
  );
  const handleClick = () => {
    const curItems = getFavoriteItems();
    LocalStorageService.setItems({
      favorite: isSelected
        ? curItems.filter((film) => film.imdbID !== id)
        : [...curItems, cardItems],
    });
    setIsSelected((v) => !v);
  };

  useEffect(() => {
    FilmApiServise.getById(id).then((data) => setCardItems(data));
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
            <Typography variant="h5" component="p" style={{ marginBottom: 10 }}>
              Overview:
            </Typography>
            {`${cardItems.Plot}`}
          </Typography>
          <CardActions>
            <NavLink className={classes.link} to="/">
              <Button size="small" color="primary" variant="contained">
                Back
              </Button>
            </NavLink>
            <Button size="small" variant="contained" onClick={handleClick}>
              {isSelected ? "Added" : "Add to favorite"}
            </Button>
          </CardActions>
        </CardContent>
      </div>
    </Card>
  );
};

export { FilmCard };
