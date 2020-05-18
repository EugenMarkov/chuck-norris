import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    padding: "40px",
    backgroundColor: "#F8F8F8",
    width: "33.33%",
    boxSizing: "border-box",
  },
  title: {
    color: "#ABABAB",
    fontWeight: 500,
  },
  getJokeBtn: {
    fontWeight: "bold",
    padding: "10px 40px",
    background: "linear-gradient(92.01deg, #8EA7FF 0%, #7291FF 100%)",
    borderRadius: 10,
    lineHeight: "22px",
    textTransform: "none",
    marginTop: 14,
  },
});

export default useStyles;
