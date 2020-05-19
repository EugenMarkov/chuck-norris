import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    padding: "40px",
    backgroundColor: theme.palette.primary.light,
    width: "33.33%",
    boxSizing: "border-box",
  },
  title: {
    color: theme.palette.secondary.main,
    fontWeight: 500,
  },
}));

export default useStyles;
