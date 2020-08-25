import React from "react";
import Login from "./LoginComponent";
import { OnBoard } from "./OnBoardingComponent";
import SignUp from "./SignupComponent";
import SignIn from "./SigninComponent";
import { Switch, Route } from "react-router-dom";
import Home from "./homeComponent";
import PrivateRoute from "../PrivateRoute";

export function Main() {
  return (
    <Switch>
      <PrivateRoute exact path="/" component={OnBoardR} />
      <Route path="/login" component={LoginR} />
      <Route path="/signup">
        <SignUpR />
      </Route>
      <Route path="/signin">
        <SignInR />
      </Route>
      <Route path="/home">
        <HomeR />
      </Route>
    </Switch>
  );
}

function LoginR() {
  return <Login />;
}

function OnBoardR() {
  return <OnBoard />;
}

function SignUpR() {
  return <SignUp />;
}

function SignInR() {
  return <SignIn />;
}
function HomeR() {
  return <Home />;
}
