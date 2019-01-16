import React, { Component } from "react";
import Form from "./Form";
import List from "./List";
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
    currentUser: null
  };

  // async componentDidMount(){
  //   const currentUser =  Meteor.user();
  //   console.log(currentUser);
  //    this.setState({currentUser})
  // }

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

  click = id => {
    console.log(id);
  };
  render() {
   //this.state.currentUser !== null && console.log(this.state.currentUser);
   const currentUser =  Meteor.userId();
    console.log(currentUser);
    return (
      <>
        <Header isLogged={this.state.isLogged} />
        <div className="App">
          <Form
            isOpen={this.state.isOpen}
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
            data={this.state.data}
          />
          <List
            deleteStudent={this.deleteStudent}
            searchbar={this.state.searchbar}
            handleSearch={this.handleSearch}
          />
        </div>
      </>
    );
  }
}

export default App;
