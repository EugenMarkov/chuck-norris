import React, { useState } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import { ValidatorForm } from "react-material-ui-form-validator";
import { connect } from "react-redux";
import JokesCategories from "./JokesCategories";
import SearchInput from "./SearchInput";
import PreloaderAdaptiveSmall from "../../Preloader/AdaptiveSmall";
import useStyles from "./useStyles";
import { getRandomJokeRequest, getRandomCategoryJokeRequest, searchJokesRequest, searchJokesQuery } from "../../../store/actions/jokes";
import { getCategoryForJoke } from "../../../store/actions/categories";

const JokeForm = ({
  getRandomJokeRequest,
  getRandomCategoryJokeRequest,
  getCategoryForJoke,
  searchJokesRequest,
  searchJokesQuery,
  preloader
}) => {
  const classes = useStyles();
  const [value, setValue] = useState("random");
  const [category, setCategory] = useState("");
  const [query, setQuery] = useState("");


  const handleChange = event => setValue(event.target.value);

  const getJoke = () => {
    if (value === "random") {
      getRandomJokeRequest();
    } else if (value === "category") {
      getRandomCategoryJokeRequest();
      getCategoryForJoke(category);
    } else if (value === "search") {
      searchJokesRequest();
      searchJokesQuery(query);
    }
  };

  return (
    <ValidatorForm onSubmit={getJoke}>
      <FormControl className={classes.form} component="fieldset">
        <RadioGroup aria-label="joke" name="jokes" value={value} onChange={handleChange}>
          <FormControlLabel value="random" control={<Radio />} label="Random" />
          <FormControlLabel value="category" control={<Radio />} label="From categories" />
          {value === "category" && <JokesCategories setCategory={setCategory} />}
          <FormControlLabel value="search" control={<Radio />} label="Search" />
          {value === "search" && <SearchInput setQuery={setQuery} query={query} />}
        </RadioGroup>
      </FormControl>
      {preloader ? (
        <PreloaderAdaptiveSmall />
        ) : (<Button className={classes.getJokeBtn} variant="contained" type="submit">Get a joke</Button>)}
    </ValidatorForm>
  );
};

function mapStateToProps(state) {
  return {
    preloader: state.jokesReducer.isLoading,
  };
}

export default connect(mapStateToProps, {
  getRandomJokeRequest,
  getRandomCategoryJokeRequest,
  getCategoryForJoke,
  searchJokesRequest,
  searchJokesQuery,
})(JokeForm);
