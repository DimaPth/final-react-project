import React from "react";
import { MainContextProvider } from "../../components/contexts/mainContext";
import { PageLayout } from "../../components/layouts/pageLayout";
import { MovieTable } from "../../components/table/movieTable";


const TablePage = () => {

    return (
        <PageLayout title='Table'>
          <MainContextProvider>
            <MovieTable />
          </MainContextProvider>
        </PageLayout>
    )
}

export {TablePage};