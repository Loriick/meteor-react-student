import React, { Component } from "react";
import { Meteor } from "meteor/meteor";
import Signin from "../Login/Signin";
import Signup from "../Login/Signup";
import Header from "../../components/Header";

class Home extends Component {
  state = {
    data: {
      name: "",
      firstname: "",
      github: "",
      email: ""
    },
    isLogged: false,
    searchbar: "",
    currentUser: null,
    signIn: true
  };

  handleChange = e => {
    const data = this.state.data;
    data[e.target.name] = e.target.value;
    this.setState({ data });
  };

  handleSearch = e => {
    this.setState({
      searchbar: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { email, firstname, github, name } = this.state.data;

    const student = {
      email: email,
      password: email,
      profile: {
        firstname: firstname,
        name: name
      },
      github: github
    };

    Meteor.call("insertStudents", student);

    this.setState({
      data: {
        name: "",
        firstname: "",
        github: "",
        email: ""
      }
    });
  };

  deleteStudent = id => {
    Meteor.call("deleteStudents", id);
  };

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
          {this.state.signIn ? <Signin /> : <Signup />}
          <img src="assets/img/illustration.png" alt="illustration" />
        </div>
      </div>
    );
  }
}

export default Home;
