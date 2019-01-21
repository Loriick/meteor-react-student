import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import App from '/imports/ui/components/App'

Meteor.startup(() => {
  render(<App />, document.getElementById('root'));
});
