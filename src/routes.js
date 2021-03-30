import { TablePage, FilmCardPage, FavoriteFilmsPage } from "./pages";

export const routes = [
  {
    path: "/",
    exact: true,
    component: TablePage,
  },
  {
    path: "/card/:id",
    component: FilmCardPage,
  },
  {
    path: "/favorite/",
    component: FavoriteFilmsPage,
  },
];
