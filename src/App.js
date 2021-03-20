import logo from './logo.svg';
import './App.css';
import firebase from "firebase/app";
import "firebase/auth";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import firebaseConfig from './components/Login/Login';
import HomePage from './components/HomePage/HomePage';
import Header from './components/Header/Header';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

function App() {
  return (
    <div className="">
      <Header />
      <HomePage />
    </div>
  );
}

export default App;
