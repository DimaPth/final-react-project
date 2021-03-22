import React from "react";
import { FilmCard } from "../../components/card/movieCard";
import { MainContextProvider } from "../../components/contexts/mainContext";
import { PageLayout } from "../../components/layouts/pageLayout";


const FilmCardPage = () => {

    return (
        <PageLayout title='Movie Card'>
          <MainContextProvider>
            <FilmCard />
          </MainContextProvider>
        </PageLayout>
    )
}

export {FilmCardPage};