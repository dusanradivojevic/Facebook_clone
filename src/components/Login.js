import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "../firebase";
import db from "../firebase";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";

function Login() {
  const [state, dispatch] = useStateValue();

  const addUserToDb = (email) => {
    // console.log(email);
    db.collection("users").doc(email).set({
      email: email,
    });
  };

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        // calling the reducer to update the state
        addUserToDb(result.user.email);
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
        // console.log(result.user);
      })
      .catch((error) => alert(error.message));
  };

  const signAsGuest = () => {
    dispatch({
      type: actionTypes.SET_USER,
      user: {
        displayName: "Guest" + Math.floor(Math.random() * 10000),
        photoURL: "",
      },
    });
  };

  return (
    <div className="login">
      <div className="login_logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png"
          alt=""
        />
        <img
          src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
          alt=""
        />
      </div>
      <Button type="submit" onClick={signIn} className="signInBtn">
        Sign in
      </Button>
      <Button type="submit" onClick={signAsGuest} className="guestBtn">
        Continue as guest
      </Button>
    </div>
  );
}

export default Login;
