import React, { Component } from "react";

import Form from "../../components/Form";
import Header from "../../components/Header";
import List from "../../components/List";
import Students from "../../../api/Student";
import { withTracker } from "meteor/react-meteor-data";
import Student from '../Student';
import { Redirect } from "react-router-dom";


class Dashboard extends Component {
  state = {
    data: {
      name: "",
      firstname: "",
      email: "",
    },
    isLogged: true
  };

  handleChange = e => {
    const data = this.state.data;
    data[e.target.name] = e.target.value;
    this.setState({ data });
  };

  handleSubmit = e => {
    e.preventDefault();
    const data = this.state.data;

    const user = {
      email: data.email,
      password: data.email,
      profile: {
        firstname: data.firstname,
        name: data.name
      }
    };

    Meteor.call("insertStudents", user);
    
    this.setState({
      data: {
        name: "",
        firstname: "",
        email:"",
      }
    });
  };

  deleteStudent = id => {
    Students.remove(id);
  };

  logOut = () => {
    Meteor.logout();
    this.setState({isLogged: false})
  };

  toggleBool = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  };
  render() {
    if(!this.props.users){
    return  <div>loading...</div>
    } else if(!this.state.isLogged){
      return( <Redirect to="/" />);
    }
    const currentUser = this.props.users;
    const role = currentUser.roles[0];
    const renderToCurrentUser = () =>{
        if (role === "teacher"){
       return  (
         <>
        <h1>Bonjour {currentUser.profile.firstname} {currentUser.profile.name}</h1>
          <Form
          isOpen={this.state.isOpen}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
          data={this.state.data}
        />
        </>)
        }else {
          return <Student />
        }
    }
   
    return (
      <div>
        <Header logout={this.logOut}/>
        {/* <h1>{this.props.roles[0]} : {this.props.profile.firstname} {this.props.profile.name}</h1> */}
        {/* <List deleteStudent={this.deleteStudent} /> */}
            {renderToCurrentUser()}
      </div>
    );
  }
}


export default withTracker(() => {
  return { users: Meteor.users.findOne(Meteor.userId) };
})(Dashboard);