import * as constants from "../constants";

const initialState = {
  isLoading: false,
  categories: [],
  error: "",
};

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.CATEGORIES_GET_REQUEST:
      return { ...state, isLoading: true };
    case constants.CATEGORIES_GET_SUCCESS:
      return { ...state, isLoading: false, categories: action.payload, error: ""};
    case constants.CATEGORIES_GET_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
};

export default categoriesReducer;
