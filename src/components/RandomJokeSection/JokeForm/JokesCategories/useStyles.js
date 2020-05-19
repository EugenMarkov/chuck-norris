import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 12,
    marginBottom: 2,
  },
  btn: {
    color: theme.palette.secondary.main,
    fontSize: 12,
    fontWeight: 500,
    lineHeight: "16px",
    letterSpacing: 2,
    marginRight: 10,
    marginBottom: 10,
    border: "2px solid #F8F8F8",
    boxSizing: "border-box",
    borderRadius: 6,
  },
  btn_active: {
    color: theme.palette.primary.main,
    background: theme.palette.primary.light,
  },
  errorMessage: {
    color: "red",
  },
}));

export default useStyles;
