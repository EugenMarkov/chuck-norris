import * as constants from "../constants";

export const getRandomJokeRequest = () => {
  return {
    type: constants.RANDOM_JOKE_REQUEST,
  };
};
export const getRandomCategoryJokeRequest = () => {
  return {
    type: constants.RANDOM_CATEGORY_JOKE_REQUEST,
  };
};
export const getRandomJokeSuccess = data => {
  return {
    type: constants.RANDOM_JOKE_SUCCESS,
    payload: data,
  };
};
export const getRandomJokeFailure = error => {
  return {
    type: constants.RANDOM_JOKE_FAILURE,
    payload: error,
  };
};

export const searchJokesRequest = () => {
  return {
    type: constants.SEARCH_JOKES_REQUEST,
  };
};
export const searchJokesSuccess = data => {
  return {
    type: constants.SEARCH_JOKES_SUCCESS,
    payload: data,
  };
};
export const searchJokesFailure = error => {
  return {
    type: constants.SEARCH_JOKES_FAILURE,
    payload: error,
  };
};
export const searchJokesQuery = query => {
  return {
    type: constants.SEARCH_JOKES_QUERY,
    payload: query,
  };
};

export const getFavoriteJokes = data => {
  return {
    type: constants.FAVORITE_JOKES_GET,
    payload: data,
  };
};
export const addFavoriteJokeInit = () => {
  return {
    type: constants.FAVORITE_JOKE_ADD_INIT,
  };
};
export const addFavoriteJokeRequest = joke => {
  return {
    type: constants.FAVORITE_JOKE_ADD_REQUEST,
    payload: joke,
  };
};
export const addFavoriteJoke = data => {
  return {
    type: constants.FAVORITE_JOKE_ADD_SUCCESS,
    payload: data,
  };
};
export const removeFavoriteJokeInit = () => {
  return {
    type: constants.FAVORITE_JOKE_REMOVE_INIT,
  };
};
export const removeFavoriteJokeRequest = joke => {
  return {
    type: constants.FAVORITE_JOKE_REMOVE_REQUEST,
    payload: joke,
  };
};
export const removeFavoriteJoke = data => {
  return {
    type: constants.FAVORITE_JOKE_REMOVE_SUCCESS,
    payload: data,
  };
};
