import React, { Component } from "react";
import Form from "./Form";
import Signin from "./Signin";
import Signup from "./Signup";
import {BrowserRouter as Router} from "react-router-dom";
import { Students } from "../api/Student";
import Header from "./Header";
import { Meteor } from "meteor/meteor";

class App extends Component {
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
    signIn: true,
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
    const {email , firstname , github , name} = this.state.data;

    const student = {
      email: email,
      password: email,
      profile: {
        firstname: firstname,
        name: name,
      },
      github: github                    
    }

    Meteor.call('insertStudents', student);

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
    Meteor.call('deleteStudents' , id);
  };

  toggleBool = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  };

  clickConnect = () => {
    this.setState({
      signIn: false
    })
  };
  render() {
   const currentUser =  Meteor.userId();
    return (
      <div>
        <Header page='signIn' eventClick={this.clickConnect}/>
        <div className="App">
        {this.state.signIn ?         
          <Signin/>
          :
          <Signup/>
        }
          <img src="assets/img/illustration.png" alt="illustration"/>
        </div>
      </div>
    );
  }
}

export default App;
