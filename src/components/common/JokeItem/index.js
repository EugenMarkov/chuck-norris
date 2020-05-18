import React from "react";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Card from "@material-ui/core/Card";
import Tooltip from "@material-ui/core/Tooltip";
import { connect } from "react-redux";
import {
  addFavoriteJokeInit,
  addFavoriteJokeRequest,
  removeFavoriteJokeInit,
  removeFavoriteJokeRequest,
} from "../../../store/actions/jokes";
import useStyles from "./useStyles";

const JokeItem = ({
  favoriteJokes,
  joke,
  addFavoriteJokeInit,
  addFavoriteJokeRequest,
  removeFavoriteJokeInit,
  removeFavoriteJokeRequest,
  favorite
}) => {
  const classes = useStyles();
  const { value, id, url, updated_at, categories } = joke;
  const hours = Math.floor((Date.now() - Date.parse(updated_at)) / (1000 * 60 * 60));

  const addJokeToFavorite = () => {
    addFavoriteJokeInit();
    addFavoriteJokeRequest(joke);
  };

  const removeJokeFromFavorite = () => {
    removeFavoriteJokeInit();
    removeFavoriteJokeRequest(id);
  };

  return (
    <Card className={favorite ? classes.favWrapper : classes.wrapper}>
      <svg className={classes.messageIcon} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="20" fill={favorite ? "F8F8F8" : "white"} />
        <path d="M27.2504 11H12.7496C11.2335 11 10 12.2333 10 13.7496V22.6238C10 24.1367 11.2281 25.368 12.7399 25.3734V29.4004L18.5271 25.3734H27.2504C28.7665 25.3734 30 24.1399 30 22.6238V13.7496C30 12.2333 28.7665 11 27.2504 11ZM28.8281 22.6238C28.8281 23.4937 28.1204 24.2015 27.2504 24.2015H18.1594L13.9117 27.1573V24.2015H12.7496C11.8796 24.2015 11.1719 23.4937 11.1719 22.6238V13.7496C11.1719 12.8795 11.8796 12.1719 12.7496 12.1719H27.2504C28.1204 12.1719 28.8281 12.8795 28.8281 13.7496V22.6238Z" fill="#ABABAB" />
        <path d="M15.3529 15.1407H24.6471V16.3126H15.3529V15.1407Z" fill="#ABABAB" />
        <path d="M15.3529 17.6407H24.6471V18.8126H15.3529V17.6407Z" fill="#ABABAB" />
        <path d="M15.3529 20.1407H24.6471V21.3126H15.3529V20.1407Z" fill="#ABABAB" />
      </svg>

      <div className={classes.mainBox}>
        <div className={classes.favoriteBtnWrapper}>
          {favoriteJokes.some(el => el.id === id) ? (
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
          ) : (
            <Tooltip arrow title="Add to favorite" placement="top">
              <IconButton className={classes.favoriteBtn} onClick={() => addJokeToFavorite()}>
                <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M10 17C9.71527 17 9.44077 16.9015 9.22684 16.7224C8.41888 16.0475 7.63992 15.4132 6.95267 14.8536L6.94916 14.8507C4.93423 13.2102 3.19427 11.7935 1.98364 10.3979C0.630341 8.83778 0 7.35852 0 5.74252C0 4.17244 0.563507 2.72395 1.58661 1.66367C2.62192 0.590857 4.04251 0 5.58716 0C6.74164 0 7.79892 0.348712 8.72955 1.03637C9.19922 1.38348 9.62494 1.80829 10 2.3038C10.3752 1.80829 10.8008 1.38348 11.2706 1.03637C12.2012 0.348712 13.2585 0 14.413 0C15.9575 0 17.3782 0.590857 18.4135 1.66367C19.4366 2.72395 20 4.17244 20 5.74252C20 7.35852 19.3698 8.83778 18.0165 10.3978C16.8059 11.7935 15.0661 13.2101 13.0515 14.8504C12.363 15.4108 11.5828 16.0461 10.773 16.7227C10.5592 16.9015 10.2846 17 10 17ZM5.58716 1.11932C4.37363 1.11932 3.25882 1.58203 2.44781 2.42232C1.62476 3.2753 1.17142 4.45439 1.17142 5.74252C1.17142 7.10165 1.70013 8.31719 2.88559 9.68375C4.03137 11.0047 5.73563 12.3923 7.70889 13.9989L7.71255 14.0018C8.4024 14.5635 9.18442 15.2003 9.99832 15.8802C10.8171 15.199 11.6003 14.5612 12.2916 13.9986C14.2647 12.392 15.9688 11.0047 17.1146 9.68375C18.2999 8.31719 18.8286 7.10165 18.8286 5.74252C18.8286 4.45439 18.3752 3.2753 17.5522 2.42232C16.7413 1.58203 15.6264 1.11932 14.413 1.11932C13.524 1.11932 12.7078 1.38931 11.9872 1.92171C11.3449 2.39637 10.8975 2.99642 10.6352 3.41627C10.5003 3.63217 10.2629 3.76105 10 3.76105C9.73709 3.76105 9.49966 3.63217 9.36478 3.41627C9.10263 2.99642 8.65524 2.39637 8.01285 1.92171C7.29218 1.38931 6.47598 1.11932 5.58716 1.11932Z"
                    fill="#FF6767"
                  />
                </svg>
              </IconButton>
            </Tooltip>
          )}
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
        <Typography className={favorite ? classes.favText : classes.text}>{value}</Typography>
        <div className={classes.info}>
          <Typography className={classes.hours} noWrap>{`Last update: ${hours} hours ago`}</Typography>
          {!!categories.length && (
          <Typography className={favorite ? `${classes.category} ${classes.favCategory}` : classes.category}>
            {categories[0]}
          </Typography>
        )}
        </div>
      </div>
    </Card>
  );
};

function mapStateToProps(state) {
  return {
    favoriteJokes: state.jokesReducer.favoriteJokes,
  };
}

export default connect(mapStateToProps, {
  addFavoriteJokeInit,
  addFavoriteJokeRequest,
  removeFavoriteJokeInit,
  removeFavoriteJokeRequest,
})(JokeItem);
