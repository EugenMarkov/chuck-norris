import React from "react";
import Typography from "@material-ui/core/Typography";
import Drawer from "@material-ui/core/Drawer";
import FavoriteTabletAndMobileSection from "../../FavoriteTabletAndMobileSection";
import useStyles from "./useStyles";

const FavoriteButton = ({ openFavorite, setOpenFavorite }) => {
  const classes = useStyles();

  const toggleDrawer = (event, open) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setOpenFavorite(open);
  };

  return (
    <div className={classes.favButtonWrapper}>
      <svg
        className={classes.favButton}
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={e => toggleDrawer(e, true)}
      >
        <circle cx="14" cy="14" r="14" fill="#333333" />
        <rect x="7" y="16" width="14" height="2" rx="1" fill="white" />
        <rect x="7" y="10" width="14" height="2" rx="1" fill="white" />
      </svg>
      <Typography className={classes.favTitle} variant="h4">Favourite</Typography>
      <Drawer anchor="right" open={openFavorite} onClose={e => toggleDrawer(e, false)}>
        <FavoriteTabletAndMobileSection onClose={toggleDrawer} />
      </Drawer>
    </div>
  );
};

export default FavoriteButton;
