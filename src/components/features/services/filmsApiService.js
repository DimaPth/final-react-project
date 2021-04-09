const { ApiServise } = require("../../../services/apiServise");

export const FilmApiServise = {
  getAll: (page = 1, nameFilter) =>
    ApiServise.get(
      `?r=json&s=${nameFilter || "ass"}${page ? `&page=${page}` : ""}`
    ),
  getById: (id) => ApiServise.get(`?r=json&i=${id}`),
};
