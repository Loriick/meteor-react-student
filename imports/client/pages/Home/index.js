import React, { Component } from "react";
import { Meteor } from "meteor/meteor";
import Signin from "../Login/Signin";
import Signup from "../Login/Signup";
import Header from "../../components/Header";
import { withTracker } from "meteor/react-meteor-data";

class Home extends Component {
  state = {

    isLogged: false,
    // searchbar: "",
    // currentUser: null,
    signIn: true
  };

  // handleChange = e => {
  //   const data = this.state.data;
  //   data[e.target.name] = e.target.value;
  //   this.setState({ data });
  // };

  // handleSearch = e => {
  //   this.setState({
  //     searchbar: e.target.value
  //   });
  // };

  // handleSubmit = e => {
  //   e.preventDefault();
  //   const { email, firstname, github, name } = this.state.data;

  //   const student = {
  //     email: email,
  //     password: email,
  //     profile: {
  //       firstname: firstname,
  //       name: name
  //     },
  //     github: github
  //   };

  //   Meteor.call("insertStudents", student);

  //   this.setState({
  //     data: {
  //       name: "",
  //       firstname: "",
  //       github: "",
  //       email: ""
  //     }
  //   });
  // };


  toggleBool = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  };

  clickConnect = () => {
    this.setState({
      signIn: false
    });
  };

  render() {
    const currentUser = Meteor.userId();

    return (
      <div>
        <Header page="signIn" eventClick={this.clickConnect} />
        <div className="App">
          <Signin/>
          <div className="App-img">
            <img src="assets/img/illustration.png" alt="illustration"/>
          </div>
        </div>
      </div>
    );
  }
}

export default withTracker(props => {
  return { users: Meteor.users.find(Meteor.userId()).fetch() };
})(Home);
