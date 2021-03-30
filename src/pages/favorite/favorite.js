import React from "react";
import { FavoriteFilms } from "../../components/favorite/favoriteFilms";
import { MainContextProvider } from "../../components/contexts/mainContext";
import { PageLayout } from "../../components/layouts/pageLayout";


const FavoriteFilmsPage = () => {

    return (
          <MainContextProvider>
            <FavoriteFilms />
          </MainContextProvider>
    )
}

export {FavoriteFilmsPage};