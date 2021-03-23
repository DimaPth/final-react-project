import React, { createContext, useEffect, useMemo, useState } from "react";
import { FilmApiServise } from "../features/services/filmsApiService";
import { useDebounce } from "../hooks/useDebounce";
import { LocalStorageService } from "../../services/localStorage";

export const MainContext = createContext({
  tableItems: [],
  page: 1,
  text: "Enemy",
  setPage: () => {},
  prevPage: () => {},
  nextPage: () => {},
  setTableItems: () => {},
});

export const MainContextProvider = ({ children }) => {
  const [tableItems, setTableItems] = useState([]);
  const [page, setPage] = useState(LocalStorageService.getItem("page") || 1);
  const [text, setText] = useState(
    LocalStorageService.getItem("searchValue") || "Alien"
  );
  const searchValue = useDebounce(text, 800);

  const fetchFilms = async () => {
    const data = await FilmApiServise.getAll(page, searchValue);
    setTableItems(data.Search || []);
  };

  useEffect(() => {
    LocalStorageService.setItems({ searchValue, page });
    fetchFilms();
  }, [searchValue, page]);

  const nextPage = () => {
    setPage(page + 1);
  };

  const prevPage = () => {
    setPage(page - 1);
  };

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
    [tableItems, page, text, nextPage, prevPage]
  );
  return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
};
