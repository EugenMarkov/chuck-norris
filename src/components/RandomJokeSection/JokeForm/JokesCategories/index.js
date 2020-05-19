import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import v4 from "uuid";
import { connect } from "react-redux";
import Typography from "@material-ui/core/Typography";
import useStyles from "./useStyles";

const JokesCategories = ({ setCategory, categories, error }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const classes = useStyles();
  const selectCategory = (index, el) => {
    setSelectedIndex(index);
    setCategory(el);
  };

  useEffect(() => {
    if (categories.length) {
      setCategory(categories[0]);
    }
  }, [categories, setCategory]);

  return (
    <div className={classes.root}>
      {error ? (
        <Typography className={classes.errorMessage}>{`Something went wrong. Error: ${error.message}`}</Typography>
      ) : (
        !!categories.length && categories.map((el, index) => {
          return (
            <Button
              index={index}
              className={selectedIndex === index ? `${classes.btn} ${classes.btn_active}` : classes.btn}
              key={v4()}
              variant="outlined"
              onClick={() => selectCategory(index, el)}
            >
              {el}
            </Button>
          )})
      )}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    categories: state.categoriesReducer.categories,
    error: state.categoriesReducer.error,
  };
}

export default connect(mapStateToProps)(JokesCategories);
