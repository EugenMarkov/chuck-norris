import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    maxWidth: 1440,
    [theme.breakpoints.up("xl")]: {
      margin: "0 auto",
    },
    minHeight: "100vh",
  },
}));

export default useStyles;
