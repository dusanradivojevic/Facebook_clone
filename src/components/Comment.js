import React from "react";
import "./Comment.css";
import { Avatar } from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

function Comment({ imageURL, message, timestamp, username }) {
  return (
    <div className="comment">
      <Avatar src={imageURL} className="comment__avatar" />
      <div className="comment__text">
        <h3>{username}</h3>
        <p className="comment__text__timestamp">
          {new Date(timestamp?.toDate()).toUTCString()}
        </p>
        <p className="comment__text__message">{message}</p>
      </div>
      <div className="comment__settings">
        <MoreHorizIcon />
      </div>
    </div>
  );
}

export default Comment;
