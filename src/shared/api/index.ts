import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const api_key = process.env.NEXT_PUBLIC_API_KEY;

export const getMovies = async ({
  page = 1,
  language = "en-US",
  sort_by = "popularity.desc",
  timeZone = "America/New_York",
}) => {
  const response = await axios.get(BASE_URL + "/discover/movie", {
    params: {
      api_key,
      language,
      sort_by,
      timeZone,
      page,
    },
  });

  return response.data;
};

export const getSeries = async ({
  page = 1,
  sort_by = "popularity.desc",
  language = "en-US",
  timeZone = "America/New_York",
}) => {
  const response = await axios.get(BASE_URL + "/discover/tv", {
    params: {
      api_key,
      sort_by,
      language,
      timeZone,
      page,
    },
  });

  return response.data;
};

export const getSerieById = async ({
  id = 2224,
}) => {
  const response = await axios.get(BASE_URL + `/find/${id}`, {
    params: {
      api_key
    },
  });

  return response.data;
};