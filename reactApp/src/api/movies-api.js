export const getMovies = async () => {
    const response = await  fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=a59e8be8feaa77cbab71a714e8581829&language=en-US&include_adult=false&page=1`
    )
    return response.json()
  };