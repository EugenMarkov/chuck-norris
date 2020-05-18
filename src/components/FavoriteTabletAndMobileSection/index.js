import React from "react";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import v4 from "uuid";
import FavoriteJokeItem from "../common/FavoriteJokeItem";
import useStyles from "./useStyles";

const FavoriteTabletAndMobileSection = ({ favoriteJokes, onClose }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.cancelBtnWrapper}>
        <svg
          className={classes.cancelBtn}
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={e => onClose(e, false)}
        >
          <circle cx="14" cy="14" r="14" fill="#333333" />
          <rect width="14.8492" height="2.12131" rx="1.06065" transform="matrix(0.707103 -0.707111 0.707103 0.707111 8 18.5)" fill="white" />
          <rect width="14.8492" height="2.12131" rx="1.06065" transform="matrix(0.707103 0.707111 -0.707103 0.707111 9.5 8)" fill="white" />
        </svg>
        <Typography className={classes.title} variant="h4">
          Favourite
        </Typography>
      </div>
      {favoriteJokes.map(el => <FavoriteJokeItem key={v4()} joke={el} />)}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    favoriteJokes: state.jokesReducer.favoriteJokes,
  };
}

export default connect(mapStateToProps)(FavoriteTabletAndMobileSection);
