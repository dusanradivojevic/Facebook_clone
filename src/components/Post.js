import React, { useEffect, useRef, useState } from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import NearMeIcon from "@material-ui/icons/NearMe";
import { useStateValue } from "../StateProvider";
import db from "../firebase";
import Alert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";

function Post({ id, profilePic, image, username, timestamp, message, likes }) {
  const [{ user }, dispatch] = useStateValue();
  const [liked, setLiked] = useState(false);
  const [guestAlert, setGuestAlert] = useState(false);
  const likeDiv = useRef(null);

  useEffect(() => {
    likes?.find((item) => item === user.email)
      ? setLiked(true)
      : setLiked(false);
  }, []);

  useEffect(() => {
    liked
      ? likeDiv.current.classList.add("post__option__liked")
      : likeDiv.current.classList.remove("post__option__liked");
  }, [liked]);

  const clickLike = () => {
    if (!user.email) {
      // 'Only logged in users can like' alert
      setGuestAlert(true);
      return;
    }

    const post = db.collection("posts").doc(id);
    let usersArray;
    post
      .get()
      .then((doc) => {
        usersArray = doc.data().likedBy;
        if (liked) {
          // Remove like from the post
          console.log("before remove", usersArray, " email: ", user.email);
          usersArray = usersArray.filter((item) => item !== user.email);
          console.log("after remove", usersArray);
        } else {
          // Add like to the post
          console.log("email pushed: ", user.email);
          if (!usersArray?.find((item) => item === user.email))
            usersArray.push(user.email);
        }

        return usersArray;
      })
      .then((usersArray) => {
        console.log("stiglo u update", usersArray);

        post.update({
          likedBy: usersArray,
        });
      });

    setLiked(!liked);
  };

  const handleCloseGuestAlert = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setGuestAlert(false);
  };

  return (
    <div className="post">
      <div className="post__top">
        <Avatar src={profilePic} className="post__avatar" />
        <div className="post__topInfo">
          <h3>{username}</h3>
          <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
        </div>
      </div>

      <div className="post__bottom">
        <p>{message}</p>
      </div>

      <div className="post__image">
        <img src={image} alt="" />
      </div>

      <div className="post__options">
        <div className="post__option" onClick={clickLike} ref={likeDiv}>
          {likes?.length ? (
            <p className="post__option__numberLikes">({likes?.length})</p>
          ) : (
            <p></p>
          )}
          <ThumbUpIcon />
          <p>Like</p>
        </div>
        <div className="post__option">
          <ChatBubbleIcon />
          <p>Comment</p>
        </div>
        <div className="post__option">
          <NearMeIcon />
          <p>Share</p>
        </div>
      </div>

      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        open={guestAlert}
        autoHideDuration={3500}
        onClose={handleCloseGuestAlert}
        message=""
      >
        <Alert onClose={handleCloseGuestAlert} severity="info" variant="filled">
          Only logged in users can like posts!
        </Alert>
      </Snackbar>
    </div>
  );
}

export default Post;
