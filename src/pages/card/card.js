import React from "react";
import { FilmCard } from "../../components/card/movieCard";
import { MainContextProvider } from "../../components/contexts/mainContext";
import { PageLayout } from "../../components/layouts/pageLayout";


const FilmCardPage = () => {

    return (
        <PageLayout>
          <MainContextProvider>
            <FilmCard />
          </MainContextProvider>
        </PageLayout>
    )
}

export {FilmCardPage};