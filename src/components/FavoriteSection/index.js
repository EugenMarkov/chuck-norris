import React from "react";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import v4 from "uuid";
import FavoriteJokeItem from "../common/FavoriteJokeItem";
import useStyles from "./useStyles";

const FavoriteSection = ({ favoriteJokes }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.title} variant="h4">Favourite</Typography>
      {favoriteJokes.map(el => <FavoriteJokeItem key={v4()} joke={el} />)}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    favoriteJokes: state.jokesReducer.favoriteJokes,
  };
}

export default connect(mapStateToProps)(FavoriteSection);
