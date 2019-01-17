import React, { Component } from "react";
import Form from "./Form";
import List from "./List";

import { Students } from "../api/Student";
import Header from "./Header";

class App extends Component {
  state = {
    data: {
      name: "",
      firstname: "",
      github: "",
      email: ""
    },
    isLogged: false,
    searchbar: ""
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
    const data = this.state.data;
    Meteor.call("students", data, function(err, result) {
      console.log(result);
    });

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
    Students.remove(id);
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
