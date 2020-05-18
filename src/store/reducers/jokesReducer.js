import * as constants from "../constants";

const initialState = {
  isLoading: false,
  jokes: [],
  favoriteJokes: [],
  error: "",
};

const jokesReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.RANDOM_JOKE_REQUEST:
      return { ...state, isLoading: true };
    case constants.RANDOM_CATEGORY_JOKE_REQUEST:
      return { ...state, isLoading: true };
    case constants.RANDOM_JOKE_SUCCESS:
      return { ...state, isLoading: false, jokes: [...state.jokes, action.payload], error: ""};
    case constants.RANDOM_JOKE_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    case constants.SEARCH_JOKES_REQUEST:
      return { ...state, isLoading: true };
    case constants.SEARCH_JOKES_SUCCESS:
      return { ...state, isLoading: false, jokes: [...state.jokes, ...action.payload], error: ""};
    case constants.SEARCH_JOKES_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    case constants.FAVORITE_JOKES_GET:
      return { ...state, favoriteJokes: [...state.favoriteJokes, ...action.payload] };
    case constants.FAVORITE_JOKE_ADD_SUCCESS:
      return { ...state, favoriteJokes: [...state.favoriteJokes, action.payload] };
    case constants.FAVORITE_JOKE_REMOVE_SUCCESS:
      return { ...state, favoriteJokes: action.payload };
    default:
      return state;
  }
};

export default jokesReducer;
