import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 480,
    width: "calc(380px + (100vw - 380px) * 100/454)",
    padding: "calc(20px + (100vw - 380px) * 20/454)",
    backgroundColor: theme.palette.primary.light,
    flex: 1,
    boxSizing: "border-box",
    [theme.breakpoints.down("xs")]: {
      width: "calc(320px + (100vw - 320px))",
      padding: 20,
    },
  },
  title: {
    color: theme.palette.secondary.main,
    fontWeight: 500,
  },
  cancelBtnWrapper: {
    display: "flex",
    justifyContent: "flex-end",
  },
  cancelBtn: {
    marginRight: 10,
    cursor: "pointer",
  },
}));

export default useStyles;
