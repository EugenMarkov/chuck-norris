import { combineReducers } from "redux";

import categoriesReducer from "./categoriesReducer";
import jokesReducer from "./jokesReducer";

const rootReducer = combineReducers({
  categoriesReducer,
  jokesReducer,
});

export default rootReducer;
