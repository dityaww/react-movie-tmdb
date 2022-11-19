import axios from "axios";

const baseUrl = "https://api.themoviedb.org/3";
const apiKey = "31c499cf30a379941277e812be4c8246";

export const getMovie = async () => {
  const movie = await axios.get(`${baseUrl}/movie/popular?api_key=${apiKey}`);
  // console.log({ Mov: movie });
  return movie.data.results;
};

export const searchMovie = async (query) => {
  const search = await axios.get(
    `${baseUrl}/search/movie?api_key=${apiKey}&query=${query}&page=1`
  );
  console.log(search.data);
  return search.data;
};
