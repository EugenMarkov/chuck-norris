import React from "react";
import { TextValidator } from "react-material-ui-form-validator";
import useStyles from "./useStyles";

const SearchInput = ({ setQuery, query }) => {
  const classes = useStyles();
  const searchChange = event => {
    setQuery(event.target.value);
  };

  return (
    <TextValidator
      value={query}
      onChange={e => searchChange(e)}
      className={classes.inputWrapper}
      inputProps={{ className: classes.input, maxLength: 120 }}
      variant="outlined"
      placeholder="Free text search..."
      validators={["required", "matchRegexp:[^\\s]{3}(.){0,117}"]}
      errorMessages={["this field is required", "text must be between 3 and 120 characters"]}
    />
  );
};

export default SearchInput;