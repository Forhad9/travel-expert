import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import './Login.css';
import { useContext } from "react";
import { UserContext } from '../../App';
import { useHistory, useLocation } from "react-router";



function Login() {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  const { from } = location.state || { from: { pathname: "/" } };

  const handleGoogleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
        const {displayName, email} = result.user;
        const signedInUser = {name: displayName, email} 
        setLoggedInUser(signedInUser);
        history.replace(from);
        // ...
      }).catch(function(error) {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
}
return (
    <div className="login">
        <h1>This is Login</h1>
        <button onClick={handleGoogleSignIn}>Google Sign in</button>
    </div>
);
};

export default Login;
