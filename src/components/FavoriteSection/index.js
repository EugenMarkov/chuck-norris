import React from "react";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import v4 from "uuid";
import JokeItem from "../common/JokeItem";
import useStyles from "./useStyles";

const FavoriteSection = ({ favoriteJokes }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.title} variant="h4">Favourite</Typography>
      {favoriteJokes.map(el => <JokeItem key={v4()} joke={el} favorite />)}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    favoriteJokes: state.jokesReducer.favoriteJokes,
  };
}

export default connect(mapStateToProps)(FavoriteSection);
