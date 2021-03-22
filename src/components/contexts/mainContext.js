import React, { createContext, useEffect, useMemo, useState } from 'react';
import { useDebounce } from '../hooks/useDebounce';

export const MainContext = createContext({
    tableItems: [],
    page: 1,
    text: "Enemy",
    setPage: () => {},
    prevPage: () => {},
    nextPage: () => {},
    setTableItems: () => {},
})

export const MainContextProvider = ({children}) => {
    const [tableItems, setTableItems] = useState([]);
    const [page, setPage] = useState(1);
    const [text, setText] = useState("Enemy");

    useEffect(() => {
        fetch(
          `https://movie-database-imdb-alternative.p.rapidapi.com/?s=${text}&page=${page}&r=json`,
          {
            method: "GET",
            headers: {
              "x-rapidapi-key":
                "735e98d632msh363566e7ac2764cp1fc60ajsn43cc8721f9fd",
              "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
            },
          }
        )
          .then((response) => response.json())
          .then(data => setTableItems(data.Search))
          .catch((err) => {
            console.error(err);
          });
    }, [text, page])

    const nextPage = () => {
        setPage(page + 1);
    }

    const prevPage = () => {
        setPage(page - 1);
    }

    const value = useMemo(
        () => ({
            tableItems,
            page,
            text,
            setText,
            nextPage,
            prevPage,
            setPage,
            setTableItems,
        }),
        [tableItems]
    )
    return (
        <MainContext.Provider value={value}>{children}</MainContext.Provider>
    )
}