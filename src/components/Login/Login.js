import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useState } from 'react';
import './Login.css';
import { useContext } from "react";
import { UserContext } from '../../App';
import { useHistory, useLocation } from "react-router";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

function Login() {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();

  const { from } = location.state || { from: { pathname: "/destination" } };
  const googleProvider = new firebase.auth.GoogleAuthProvider();

  const handleClick = () => {
    firebase.auth().signInWithPopup(googleProvider)
      .then(res => {
        const { displayName, email } = res.user;
        const signedInUser = {
          name: displayName,
          email: email,
        }
        setLoggedInUser(signedInUser);
        history.replace(from);
      })
      .catch(err => {
        console.log(err);
        console.log(err.message);
      })
  }



  return (
    <div className="login">
      <h1>Create an account</h1>
      <button onClick={handleClick}>Sign In With Google</button>
    </div>
  );
}

export default Login;
