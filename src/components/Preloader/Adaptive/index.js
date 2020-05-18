import React from "react";
import useStyles from "./useStyles";

const PreloaderAdaptive = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <div className={classes.preloader} />
    </div>
  );
};

export default PreloaderAdaptive;
