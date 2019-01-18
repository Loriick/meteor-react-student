import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { withTracker } from "meteor/react-meteor-data";

// route components
import Home from "../pages/Home";
import Student from "../pages/Student";
import NotFound from "../pages/NotFound";
import Signin from "../pages/Login/Signin";
import Signup from "../pages/Login/Signup";
import AddNotes from "../pages/AddNotes";
import Dashboard from "../pages/Dashboard";
import { Meteor } from "meteor/meteor";

const App = props => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/student/:id" component={Student} />
        <Route path="/addnotes" component={AddNotes} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default withTracker(() => {
  return { users: Meteor.users.findOne(Meteor.userId) };
})(App);
