import React from "react";
import { Meteor } from "meteor/meteor";
import { render } from "react-dom";

import App from "../imports/client/components/App";
import "./main.html";

Meteor.startup(() => {
  render(<App />, document.getElementById("root"));
});
