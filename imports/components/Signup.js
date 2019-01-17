import React , {Component} from "react";
import {Redirect} from 'react-router-dom';
import Header from "./Header";
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
      <div>
        <Header page='signUp' />
        <div className="form">
        <h1 className="form-title">Bienvenue sur <span>Meteor School</span></h1>
        <h4 className="form-subtitle">Inscrivez-vous</h4>
          <form onSubmit={this.handleSubmit} className="form-container">
            <input type="text" name="name" placeholder="Nom" onChange={this.handleChange} required/>
            <input type="text" name="firstname" placeholder="Prénom" onChange={this.handleChange} required/>
            <input type="email" name="email" placeholder="Adresse Email" onChange={this.handleChange} required/>
            <input type="password" name="password" placeholder="Mot de Passe" onChange={this.handleChange} required/>
            <div className="form-footer">
            <input type="submit" value="Créer votre compte"/>
            </div>
          </form>
        </div>
      </div>
    );
  }
};

export default Signup;
