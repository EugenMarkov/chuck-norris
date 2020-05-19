import React from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import ErrorCatcher from "../common/ErrorCatcher";
import RandomJokeSection from "../RandomJokeSection";
import FavoriteSection from "../FavoriteSection";
import useStyles from "./useStyles";

export default function HomePageContent() {
  const classes = useStyles();
  const matches = useMediaQuery(theme => theme.breakpoints.up("md"));

  return (
    <div className={classes.root}>
      <ErrorCatcher>
        <RandomJokeSection />
        {matches && <FavoriteSection />}
      </ErrorCatcher>
    </div>
  );
}
