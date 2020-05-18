import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import { ValidatorForm } from "react-material-ui-form-validator";
import { connect } from "react-redux";
import v4 from "uuid";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import JokesCategories from "./JokesCategories";
import SearchInput from "./SearchInput";
import PreloaderAdaptiveSmall from "../Preloader/AdaptiveSmall";
import FavoriteButton from "./FavoriteButton";
import JokeItem from "../common/JokeItem";
import useStyles from "./useStyles";
import { getRandomJokeRequest, getRandomCategoryJokeRequest, searchJokesRequest, searchJokesQuery } from "../../store/actions/jokes";
import { getCategoryForJoke } from "../../store/actions/categories";

const RandomJokeSection = ({
  getRandomJokeRequest,
  getRandomCategoryJokeRequest,
  getCategoryForJoke,
  searchJokesRequest,
  searchJokesQuery,
  jokes,
  preloader,
  error
}) => {
  const classes = useStyles();
  const matches = useMediaQuery(theme => theme.breakpoints.up("md"));
  const [value, setValue] = useState("random");
  const [category, setCategory] = useState("");
  const [query, setQuery] = useState("");
  const [openFavorite, setOpenFavorite] = useState(false);

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
    <div className={classes.root}>
      <div className={classes.headerTitleBox}>
        <Typography variant="h4">MSI 2020</Typography>
        {!matches && <FavoriteButton openFavorite={openFavorite} setOpenFavorite={setOpenFavorite} />}
      </div>
      <Typography variant="h2">Hey!</Typography>
      <Typography variant="h3">Let’s try to find a joke for you:</Typography>
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
      {error && (
        <Typography className={classes.errorMessage}>{`Something went wrong. Error: ${error.message}`}</Typography>)}
      {jokes.map(el => <JokeItem key={v4()} joke={el} />)}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    preloader: state.jokesReducer.isLoading,
    jokes: state.jokesReducer.jokes,
    error: state.jokesReducer.error,
  };
}

export default connect(mapStateToProps, {
  getRandomJokeRequest,
  getRandomCategoryJokeRequest,
  getCategoryForJoke,
  searchJokesRequest,
  searchJokesQuery,
})(RandomJokeSection);
