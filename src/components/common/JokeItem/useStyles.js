import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  wrapper: {
    padding: 40,
    marginTop: 40,
    width: "100%",
    maxWidth: 754,
    background: "#F8F8F8",
    borderRadius: 20,
    boxShadow: "none",
    boxSizing: "border-box",
    display: "flex",
    [theme.breakpoints.down("xs")]: {
      padding: 20,
    },
  },
  favWrapper: {
    padding: 20,
    width: "100%",
    background: "#FFFFFF",
    borderRadius: 10,
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    boxSizing: "border-box",
    display: "flex",
    marginBottom: 20,
  },
  messageIcon: {
    marginTop: 27,
    marginRight: 20,
  },
  mainBox: {
    display: "flex",
    flexDirection: "column",
    width: "Calc(100% - 60px)",
  },
  favoriteBtnWrapper: {
    textAlign: "right",
  },
  favoriteBtn: {
    height: 44,
    marginTop: -12,
    marginRight: -12,
  },
  id: {
    color: "#ABABAB",
    fontSize: 10,
    fontWeight: 500,
    lineHeight: "14px",
  },
  link: {
    color: "#8EA7FF",
    marginLeft: 3,
    marginRight: 3,
  },
  text: {
    marginTop: 5,
    marginBottom: 13,
    wordWrap: "break-word",
  },
  favText: {
    marginTop: 5,
    marginBottom: 10,
    fontSize: 14,
    lineHeight: "20px",
    wordWrap: "break-word",
  },
  info: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
  },
  hours: {
    fontSize: 10,
    lineHeight: "14px",
    color: "#ABABAB",
    marginRight: 10,
    marginTop: 10,
  },
  category: {
    fontSize: 10,
    fontWeight: 500,
    lineHeight: "14px",
    letterSpacing: "2px",
    textTransform: "uppercase",
    backgroundColor: "#FFFFFF",
    borderRadius: 6,
    padding: "6px 20px",
    marginTop: 10,
  },
  favCategory: {
    backgroundColor: "#F8F8F8",
  }
}));

export default useStyles;
