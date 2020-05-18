import { all } from "redux-saga/effects";
import { watchCategories } from "./categoriesSaga";
import { watchJokesFetching } from "./jokesSaga";

export default function* () {
  yield all ([
    watchCategories(),
    watchJokesFetching(),
  ])
}
