import * as constants from "../constants";

export const getCategoriesRequest = () => {
  return {
    type: constants.CATEGORIES_GET_REQUEST,
  };
};

export const getCategoriesSuccess = data => {
  return {
    type: constants.CATEGORIES_GET_SUCCESS,
    payload: data,
  };
};

export const getCategoriesFailure = error => {
  return {
    type: constants.CATEGORIES_GET_FAILURE,
    payload: error,
  };
};

export const getCategoryForJoke = category => {
  return {
    type: constants.CATEGORY_FOR_JOKE,
    payload: category,
  };
};