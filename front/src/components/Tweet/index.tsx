import React from "react";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";

import UserAvatar from "../ui/UserAvatar";
import TweetTools from "../TweetTools";

import { ITweet } from "../../store/models/tweet/types";

import { useStyles } from "./styles";

interface IProps {
  tweet: ITweet;
}

const Tweet: React.FC<IProps> = ({ tweet }): JSX.Element => {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <Link to={`/home/${tweet.id}`}>
        <div className={styles.rootHeader}>
          <div className={styles.rootAvatar}>
            <UserAvatar url={tweet.user.avatarUrl} size='small' />
          </div>
          <Typography className={styles.rootUser}>
            {tweet.user.name} <br />
            <small>{tweet.user.nickname} час назад</small>
          </Typography>
        </div>
        <Typography className={styles.rootText}>{tweet.text}</Typography>
        {tweet.imageUrl ? (
          <img
            className={styles.rootPicture}
            src='https://img1.goodfon.ru/original/3830x2550/d/48/nastroeniya-devushka-ulybka-3172.jpg'
          />
        ) : null}
      </Link>
      <div className={styles.rootFooter}>
        <TweetTools color='primary' />
      </div>
    </div>
  );
};

export default Tweet;
