import React, { useState } from "react";
import "./MessageSender.css";
import { Avatar } from "@material-ui/core";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import VideocamIcon from "@material-ui/icons/Videocam";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import { useStateValue } from "../StateProvider";
import db from "../firebase";
import firebase from "firebase";

function MessageSender() {
  const [input, setInput] = useState("");
  const [imgURL, setImgURL] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault(); // prevents refreshing

    db.collection("posts").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      profilePic: user.photoURL,
      username: user.displayName,
      image: imgURL,
    });

    setInput("");
    setImgURL("");
  };
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar src={user.photoURL} />
        <form>
          <input
            className="messageSender__input"
            placeholder={`What's on your mind, ${user.displayName}?`}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <input
            placeholder="Image URL (Optional)"
            value={imgURL}
            onChange={(e) => setImgURL(e.target.value)}
          />
          <button onClick={handleSubmit} type="submit">
            Hidden submit button
          </button>
        </form>
      </div>

      <div className="messageSender__bottom">
        <div className="messageSender_option">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>
        <div className="messageSender_option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>
        <div className="messageSender_option">
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
