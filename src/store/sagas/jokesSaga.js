import axios from "axios";
import { takeLatest, put, call, take, all, fork } from "redux-saga/effects";
import {
  getRandomJokeSuccess,
  getRandomJokeFailure,
  searchJokesSuccess,
  searchJokesFailure,
  getFavoriteJokes,
  addFavoriteJoke,
  removeFavoriteJoke,
} from "../actions/jokes";
import * as constants from "../constants";
import { store } from "../index";

const fetchRandomJoke = category => {
  const url = category
    ? `https://api.chucknorris.io/jokes/random?category=${category}`
    : "https://api.chucknorris.io/jokes/random";

  return axios
    .get(url)
    .then(res => ({ data: res.data }))
    .catch(error => ({ error }));
};

export function* getRandomJoke() {
  const { data, error } = yield call(fetchRandomJoke);
  if (data) {
    yield put(getRandomJokeSuccess(data));
  } else {
    yield put(getRandomJokeFailure(error));
  }
}

export function* getRandomJokeFromCategory() {
  const { payload } = yield take(constants.CATEGORY_FOR_JOKE);
  const { data, error } = yield call(fetchRandomJoke, payload);
  if (data) {
    yield put(getRandomJokeSuccess(data));
  } else {
    yield put(getRandomJokeFailure(error));
  }
}

const fetchSearchJokes = query => {
  return axios
    .get(`https://api.chucknorris.io/jokes/search?query=${query}`)
    .then(res => ({ data: res.data.result }))
    .catch(error => ({ error }));
};

export function* searchQueryJokes() {
  const { payload } = yield take(constants.SEARCH_JOKES_QUERY);
  const { data, error } = yield call(fetchSearchJokes, payload);
  if (data) {
    yield put(searchJokesSuccess(data));
  } else {
    yield put(searchJokesFailure(error));
  }
}

export function* getLocalFavoriteJokes() {
  const data = JSON.parse(localStorage.getItem("Favorite Jokes"));
  if (data) {
    yield put(getFavoriteJokes(data));
  }
}

export function* addLocalFavoriteJoke() {
  const { payload } = yield take(constants.FAVORITE_JOKE_ADD_REQUEST);
  yield put(addFavoriteJoke(payload));
  localStorage.setItem("Favorite Jokes", JSON.stringify(store.getState().jokesReducer.favoriteJokes));
}

export function* removeLocalFavoriteJoke() {
  const { payload } = yield take(constants.FAVORITE_JOKE_REMOVE_REQUEST);
  const updatedFavoriteJokes = store.getState().jokesReducer.favoriteJokes.filter(joke => joke.id !== payload);
  yield put(removeFavoriteJoke(updatedFavoriteJokes));
  localStorage.setItem("Favorite Jokes", JSON.stringify(store.getState().jokesReducer.favoriteJokes));
}

export function* watchJokesFetching() {
  yield all([
    takeLatest(constants.RANDOM_JOKE_REQUEST, getRandomJoke),
    takeLatest(constants.RANDOM_CATEGORY_JOKE_REQUEST, getRandomJokeFromCategory),
    takeLatest(constants.SEARCH_JOKES_REQUEST, searchQueryJokes),
    fork(getLocalFavoriteJokes),
    takeLatest(constants.FAVORITE_JOKE_ADD_INIT, addLocalFavoriteJoke),
    takeLatest(constants.FAVORITE_JOKE_REMOVE_INIT, removeLocalFavoriteJoke),
  ]);
}
