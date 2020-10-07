import React, { useEffect, useRef } from "react";
import { useState } from "react";
import "./CommentSender.css";
import { Avatar } from "@material-ui/core";
import { useStateValue } from "../StateProvider";
import db from "../firebase";
import firebase from "firebase";

function CommentSender({ postID }) {
  const [input, setInput] = useState("");
  const [{ user }, dispatch] = useStateValue();
  const inputFocusRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection("posts").doc(postID).collection("comments").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      imageURL: user.photoURL,
      username: user.displayName,
    });

    setInput("");
  };

  useEffect(() => {
    inputFocusRef.current.focus();
  }, []);

  return (
    <div className="commentSender">
      <Avatar src={user.photoURL} />
      <form>
        <input
          ref={inputFocusRef}
          className="commentSender__input"
          placeholder={`Enter new comment...`}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleSubmit} type="submit">
          Hidden submit button
        </button>
      </form>
    </div>
  );
}

export default CommentSender;
