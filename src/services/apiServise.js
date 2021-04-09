const createApiInstance = (baseUrl, defaultParams) => ({
  get: (url, params) =>
    fetch(`${baseUrl}/${url}`, { ...defaultParams, ...params })
      .then((data) => data.json())
      .catch((err) => {
        console.error(err);
      }),
});

export const ApiServise = createApiInstance(
  "https://movie-database-imdb-alternative.p.rapidapi.com",
  {
    headers: {
      "x-rapidapi-key": "735e98d632msh363566e7ac2764cp1fc60ajsn43cc8721f9fd",
      "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
    },
  }
);