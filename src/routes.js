import {TablePage, FilmCardPage} from './pages';

export const routes = [
    {
        path: "/",
        exact: true,
        id: 1,
        component: TablePage,
    },
    {
        path: "/card/:id",
        id: 1,
        component: FilmCardPage,
    },
]