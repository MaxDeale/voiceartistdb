import React, { Fragment } from "react";
import "./App.css";
import AuthState from "../src/context/AuthState";
import ArtistState from "../src/context/ArtistState";
import Navbar from "./components/layout/Navbar";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import setAuthToken from "./utils/setAuthToken";
import PrivateRoute from "./components/routing/PrivateRoute";
import Home from "./components/layout/Home";
import About from "./components/layout/About";
import NewArtistForm from "./components/layout/NewArtistForm";
import EditArtistForm from "./components/layout/EditArtistForm";
import AddCommentForm from "./components/layout/AddCommentForm";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  return (
    <AuthState>
      <ArtistState>
        <Router>
          <Fragment>
            <Navbar />
            <div className="container">
              <Switch>
                <PrivateRoute exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/addartist" component={NewArtistForm} />
                <Route exact path="/editartist" component={EditArtistForm} />
                <Route path="/addcomment" component={AddCommentForm} />
              </Switch>
            </div>
          </Fragment>
        </Router>
      </ArtistState>
    </AuthState>
  );
}

export default App;
