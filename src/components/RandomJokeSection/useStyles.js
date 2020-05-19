import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    padding: "40px 140px 140px",
    width: "66.66%",
    maxWidth: 960,
    boxSizing: "border-box",
    [theme.breakpoints.down("xl")]: {
      padding: "40px 140px 100px",
    },
    [theme.breakpoints.down("lg")]: {
      padding: "40px 100px 100px",
    },
    [theme.breakpoints.down("md")]: {
      padding: 40,
    },
    [theme.breakpoints.down("sm")]: {
      padding: "calc(20px + (100vw - 380px) * 20/454)",
      width: "100%",
    },
    [theme.breakpoints.down("xs")]: {
      padding: 20,
    },
  },
  headerTitleBox: {
    display: "flex",
    justifyContent: "space-between"
  },
  errorMessage: {
    color: "red",
    marginTop: 10,
  },
}));

export default useStyles;
