import axios from "axios";
import PropTypes from "prop-types";

const apiKey = "70b578b89e653df64359734665bd9f6b";

const BASE_URL = "https://api.themoviedb.org/3";
axios.defaults.baseURL = BASE_URL;

axios.defaults.params = {
  api_key: apiKey,
  language: "en-US",
};

const trending = async () => {
  try {
    const config = { url: "/trending/all/day" };
    const data = await axios(config);
    console.log(data);
    return data;
  } catch (error) {
    console.log("error", { error });
    return [];
  }
};

const searchMovie = async (query) => {
  try {
    const config = { url: "/search/movie", params: { query } };
    const data = await axios(config);
    return data;
  } catch (error) {
    console.log("error", { error });
    return [];
  }
};

const movieDetail = async (id) => {
  try {
    const config = { url: `/movie/${id}` };
    const data = await axios(config);
    return data;
  } catch (error) {
    console.log("error", { error });
    return [];
  }
};

const movieCredits = async (id) => {
  try {
    const config = { url: `/movie/${id}/credits` };
    const data = await axios(config, id);
    return data;
  } catch (error) {
    console.log("error", { error });
    return [];
  }
};

const movieReview = async (id) => {
  try {
    const config = { url: `/movie/${id}/reviews` };
    const data = await axios(config);
    return data;
  } catch (error) {
    console.log("error", { error });
    return [];
  }
};

const search = {
  trending,
  searchMovie,
  movieDetail,
  movieCredits,
  movieReview,
};
search.propTypes = {
  query: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default search;
