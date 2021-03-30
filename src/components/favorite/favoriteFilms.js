import { Box, Button, Card, CardMedia, Paper } from '@material-ui/core'
import React, { useContext, useState } from 'react'
import { LocalStorageService } from "../../services/localStorage";
import { MainContext } from '../contexts/mainContext';

export const FavoriteFilms = () => {
    const {favoriteFilm, setFavoriteFilm} = useContext(MainContext);
    setFavoriteFilm(LocalStorageService.getItem('cardItems'));
    return (
        <Box>
            <Button color='secondary' onClick={() => console.log(favoriteFilm)}>test</Button>
        </Box>
    )
}
