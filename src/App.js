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
import Destination from './components/Destination/Destination';
import Login from './components/Login/Login';
import { createContext } from 'react';
import { useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <HomePage />
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/destination/:destinationId">
            <Destination></Destination>
          </PrivateRoute>
          <Route exact path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
