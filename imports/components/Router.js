import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// route components
import App from "./App";
import Student from "./Student";
import NotFound from "./NotFound";
import Signin from "./Signin";
import Signup from "./Signup";
import AddNotes from "./AddNotes";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/student/:id" component={Student} />
          <Route path="/signin" component={Signin} />
          <Route path="/signin" component={Signup} />
          <Route path="/addnotes" component={AddNotes} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Router;
