import React from "react";
import { Meteor } from "meteor/meteor";
import { render } from "react-dom";

import Router from "../imports/components/Router";
import "./main.html";

Meteor.startup(() => {
  render(<Router />, document.getElementById("root"));
});
