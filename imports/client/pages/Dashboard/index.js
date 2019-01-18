import React, { Component } from "react";

import Form from "../../components/Form";
import Header from "../../components/Header";
import List from "../../components/List";
import Students from "../../../api/Student"

export default class Dashboard extends Component {
  state = {
    data: {
      name: "",
      firstname: "",
      github: ""
    },
    isLogged: false
  };

  handleChange = e => {
    const data = this.state.data;
    data[e.target.name] = e.target.value;
    this.setState({ data });
  };

  handleSubmit = e => {
    e.preventDefault();
    const data = this.state.data;

    // Meteor.call("insertStudents", data);

    this.setState({
      data: {
        name: "",
        firstname: "",
        github: ""
      }
    });
  };

  deleteStudent = id => {
    Students.remove(id);
  };

  toggleBool = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  };
  render() {
    return (
      <div>
        <Header />
        <List deleteStudent={this.deleteStudent} />
        <Form
          isOpen={this.state.isOpen}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
          data={this.state.data}
        />
      </div>
    );
  }
}
