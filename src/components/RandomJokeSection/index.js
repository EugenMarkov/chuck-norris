import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import v4 from "uuid";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import JokeForm from "./JokeForm";
import FavoriteButton from "./FavoriteButton";
import JokeItem from "../common/JokeItem";
import useStyles from "./useStyles";

const RandomJokeSection = ({ jokes, error }) => {
  const classes = useStyles();
  const matches = useMediaQuery(theme => theme.breakpoints.up("md"));
  const [openFavorite, setOpenFavorite] = useState(false);

  return (
    <div className={classes.root}>
      <div className={classes.headerTitleBox}>
        <Typography variant="h4">MSI 2020</Typography>
        {!matches && <FavoriteButton openFavorite={openFavorite} setOpenFavorite={setOpenFavorite} />}
      </div>
      <Typography variant="h2">Hey!</Typography>
      <Typography variant="h3">Let’s try to find a joke for you:</Typography>
      <JokeForm />
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

export default connect(mapStateToProps)(RandomJokeSection);
