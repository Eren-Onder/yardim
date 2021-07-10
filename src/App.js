import React from "react";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Products from "./components/pages/Product";

import { Auth0Provider } from "@auth0/auth0-react";
import Login from "./components/Navbar/Login";

function App() {
  const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />

          <Auth0Provider
            domain={domain}
            clientId={clientId}
            redirectUri={window.location.origin}
          >
            <Route path="/products" component={Products} />
            <Login />
          </Auth0Provider>
        </Switch>
      </Router>
    </>
  );
}

export default App;
