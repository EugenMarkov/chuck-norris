import axios from "axios";
import { takeLatest, put, call } from "redux-saga/effects";
import { getCategoriesSuccess, getCategoriesFailure } from "../actions/categories";
import * as constants from "../constants";

export function* getCategories() {
  try {
    const res = yield call(axios.get, "https://api.chucknorris.io/jokes/categories");
    yield put(getCategoriesSuccess(res.data));
  } catch (err) {
    yield put(getCategoriesFailure(err));
  }
}

export function* watchCategories() {
  yield (takeLatest(constants.CATEGORIES_GET_REQUEST, getCategories));
}
