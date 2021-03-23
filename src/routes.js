import { TablePage, FilmCardPage } from "./pages";

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
];
