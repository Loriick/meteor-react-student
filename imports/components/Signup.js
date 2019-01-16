import React , {Component} from "react";
import {Redirect} from 'react-router-dom';
class Signup extends Component {
  state= {
    data: {},
    isLogged: false,
  }

  handleChange = e => {
    const data = this.state.data;
    data[e.target.name] = e.target.value;
    this.setState({ data });
  }

  handleSubmit = e => {
    e.preventDefault();
    const data = this.state.data;
    
    const user = {
      email: data.email,
      password: data.password,
      profile: {
        firstname: data.firstname,
        name: data.name,
      },
    }
    Meteor.call('registerTeacher' , user);
  }



  render(){
    if(this.state.isLogged){
      return <Redirect to={`/student/${Meteor.userId()}`} />
    }
    return(
      <div className="signUp">
      <h1>Sign Up</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="name" placeholder="Nom" onChange={this.handleChange} required/>
          <input type="text" name="firstname" placeholder="Prénom" onChange={this.handleChange} required/>
          <input type="email" name="email" placeholder="Adresse Email" onChange={this.handleChange} required/>
          <input type="password" name="password" placeholder="Mot de Passe" onChange={this.handleChange} required/>
          <input type="submit" value="Envoyer"/>
        </form>
      </div>
    );
  }
};

export default Signup;
