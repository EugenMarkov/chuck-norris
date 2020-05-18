import React from "react";
import useStyles from "./useStyles";

const PreloaderAdaptiveSmall = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <div className={classes.preloader} />
    </div>
  );
};

export default PreloaderAdaptiveSmall;
