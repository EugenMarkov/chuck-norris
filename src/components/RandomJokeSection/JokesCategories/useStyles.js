import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    marginTop: 12,
    marginBottom: 2,
  },
  btn: {
    color: "#ABABAB",
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
    color: "#333333",
    background:"#F8F8F8",
  }
});

export default useStyles;
