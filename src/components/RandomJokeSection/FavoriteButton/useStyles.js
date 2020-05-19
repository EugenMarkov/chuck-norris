import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  favTitle: {
    color: theme.palette.secondary.main,
    fontWeight: 500,
  },
  favButtonWrapper: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  favButton: {
    marginRight: 10,
    cursor: "pointer",
  },
}));

export default useStyles;
