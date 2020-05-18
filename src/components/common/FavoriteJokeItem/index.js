import React from "react";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Card from "@material-ui/core/Card";
import Tooltip from "@material-ui/core/Tooltip";
import { connect } from "react-redux";
import { removeFavoriteJokeInit, removeFavoriteJokeRequest } from "../../../store/actions/jokes";
import useStyles from "./useStyles";

const FavoriteJokeItem = ({ joke, removeFavoriteJokeInit, removeFavoriteJokeRequest }) => {
  const classes = useStyles();
  const { value, id, url, updated_at, categories } = joke;
  const hours = Math.floor((Date.now() - Date.parse(updated_at)) / (1000 * 60 * 60));

  const removeJokeFromFavorite = () => {
    removeFavoriteJokeInit();
    removeFavoriteJokeRequest(id);
  };

  return (
    <Card className={classes.wrapper}>
      <svg className={classes.messageIcon} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="20" fill="#F8F8F8" />
        <path d="M27.2504 11H12.7496C11.2335 11 10 12.2333 10 13.7496V22.6238C10 24.1367 11.2281 25.368 12.7399 25.3734V29.4004L18.5271 25.3734H27.2504C28.7665 25.3734 30 24.1399 30 22.6238V13.7496C30 12.2333 28.7665 11 27.2504 11ZM28.8281 22.6238C28.8281 23.4937 28.1204 24.2015 27.2504 24.2015H18.1594L13.9117 27.1573V24.2015H12.7496C11.8796 24.2015 11.1719 23.4937 11.1719 22.6238V13.7496C11.1719 12.8795 11.8796 12.1719 12.7496 12.1719H27.2504C28.1204 12.1719 28.8281 12.8795 28.8281 13.7496V22.6238Z" fill="#ABABAB" />
        <path d="M15.353 15.1407H24.6472V16.3126H15.353V15.1407Z" fill="#ABABAB" />
        <path d="M15.353 17.6407H24.6472V18.8126H15.353V17.6407Z" fill="#ABABAB" />
        <path d="M15.353 20.1407H24.6472V21.3126H15.353V20.1407Z" fill="#ABABAB" />
      </svg>
      <div className={classes.mainBox}>
        <div className={classes.favoriteWrapper}>
          <Tooltip arrow title="Remove from favorite" placement="top">
            <IconButton className={classes.favoriteBtn} onClick={() => removeJokeFromFavorite()}>
              <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M18.4134 1.66367C17.3781 0.590857 15.9575 0 14.413 0C13.2585 0 12.2012 0.348712 11.2704 1.03637C10.8008 1.38348 10.3752 1.80814 10 2.3038C9.62494 1.80829 9.19922 1.38348 8.7294 1.03637C7.79877 0.348712 6.74149 0 5.58701 0C4.04251 0 2.62177 0.590857 1.58646 1.66367C0.563507 2.72395 0 4.17244 0 5.74252C0 7.35852 0.630341 8.83778 1.98364 10.3979C3.19427 11.7935 4.93423 13.2102 6.94916 14.8507C7.63718 15.411 8.41705 16.046 9.22684 16.7224C9.44077 16.9015 9.71527 17 10 17C10.2846 17 10.5592 16.9015 10.7729 16.7227C11.5826 16.0461 12.363 15.4108 13.0513 14.8503C15.0659 13.2101 16.8059 11.7935 18.0165 10.3978C19.3698 8.83778 20 7.35852 20 5.74238C20 4.17244 19.4365 2.72395 18.4134 1.66367Z"
                  fill="#FF6767"
                />
              </svg>
            </IconButton>
          </Tooltip>
        </div>
        <Typography className={classes.id} noWrap>
          ID:
          <a href={url} className={classes.link}>{id}</a>
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M9.54539 0H5.90903C5.65799 0 5.45448 0.203515 5.45448 0.45455C5.45448 0.705585 5.65799 0.9091 5.90903 0.9091H8.44803L3.76946 5.58768C3.59198 5.76516 3.59198 6.05298 3.76946 6.2305C3.85819 6.31923 3.97452 6.36362 4.09085 6.36362C4.20718 6.36362 4.32352 6.31923 4.41223 6.23048L9.09086 1.55191V4.09091C9.09086 4.34194 9.29437 4.54546 9.54541 4.54546C9.79644 4.54546 9.99996 4.34194 9.99996 4.09091V0.45455C9.99994 0.203515 9.79642 0 9.54539 0Z"
              fill="#8EA7FF"
            />
            <path
              d="M7.72725 4.54544C7.47622 4.54544 7.2727 4.74895 7.2727 4.99999V9.0909H0.90908V2.72726H4.99999C5.25103 2.72726 5.45454 2.52374 5.45454 2.27271C5.45454 2.02167 5.25103 1.81818 4.99999 1.81818H0.45455C0.203515 1.81818 0 2.02169 0 2.27273V9.54545C0 9.79646 0.203515 9.99998 0.45455 9.99998H7.72727C7.97831 9.99998 8.18182 9.79646 8.18182 9.54543V4.99999C8.1818 4.74895 7.97829 4.54544 7.72725 4.54544Z"
              fill="#8EA7FF"
            />
          </svg>
        </Typography>
        <Typography className={classes.text}>{value}</Typography>
        <div className={classes.info}>
          <Typography className={classes.hours} noWrap>{`Last update: ${hours} hours ago`}</Typography>
          {!!categories.length && <Typography className={classes.category}>{categories[0]}</Typography>}
        </div>
      </div>
    </Card>
  );
};

export default connect( null, { removeFavoriteJokeInit, removeFavoriteJokeRequest })(FavoriteJokeItem);
