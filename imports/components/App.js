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
    console.log(this.state.data);
    const data = this.state.data;
    Students.insert({ data });

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
          <List deleteStudent={this.deleteStudent} />
        </div>
      </>
    );
  }
}

export default App;
