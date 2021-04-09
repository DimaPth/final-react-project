import React, { createContext, useEffect, useMemo, useState } from "react";
import { FilmApiServise } from "../features/services/filmsApiService";
import { useDebounce } from "../hooks/useDebounce";
import { LocalStorageService } from "../../services/localStorage";

export const MainContext = createContext({
  tableItems: [],
  totalResults: [],
  page: 1,
  text: "Enemy",
  setPage: () => {},
  prevPage: () => {},
  nextPage: () => {},
  setTableItems: () => {},
  setTotalResults: () => {},
});

export const MainContextProvider = ({ children }) => {
  const [tableItems, setTableItems] = useState([]);
  const [totalResults, setTotalResults] = useState([]);
  const [page, setPage] = useState(LocalStorageService.getItem("page") || 1);
  const [text, setText] = useState(
    LocalStorageService.getItem("searchValue") || ""
  );
  const searchValue = useDebounce(text, 800);

  const fetchFilms = async () => {
    const data = await FilmApiServise.getAll(page, searchValue);
    setTotalResults(data.totalResults);
    setTableItems(data.Search || []);
  };

  useEffect(() => {
    LocalStorageService.setItems({ searchValue, page });
    fetchFilms();
  }, [searchValue, page]);

  const value = useMemo(
    () => ({
      tableItems,
      page,
      text,
      totalResults,
      setText,
      setPage,
      setTableItems,
      setTotalResults,
    }),
    [tableItems, page, text]
  );
  return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
};
