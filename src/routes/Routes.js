import React, { lazy } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../routes/Home";

const Login = lazy(() => import("../routes/Login"));
const Register = lazy(() => import("../routes/Register"));
const Users = lazy(() => import("../routes/Users"));
const About = lazy(() => import("../routes/About"));
const GamesAll = lazy(() => import("../routes/GamesAll"));
const GamesFavourite = lazy(() => import("../routes/GamesFavourite"));

const Routes = () => {
  return (
    <Switch>
      <Route path="/about" component={About} />
      <Route path="/users" component={Users} />
      <Route path="/games/all" component={GamesAll} />
      <Route path="/games/favourite" component={GamesFavourite} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route exact path="/" component={Home} />
    </Switch>
  );
};

export default Routes;
