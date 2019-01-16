import React , {Component} from "react";
import {Redirect} from 'react-router-dom';
import { Meteor } from "meteor/meteor";
class Signin extends Component {
  state= {
    data: {},
    isLogged: false
  }

  handleChange = e => {
    const data = this.state.data;
    data[e.target.name] = e.target.value;
    this.setState({ data });
  }

  handleSubmit = e => {
    e.preventDefault();
    const {email , password } = this.state.data;
    try{
      Meteor.loginWithPassword(email , password , () =>{
        this.setState({isLogged: true})
      })
    } catch(err){
        console.error(`error login ${err}`);
    }
  }
  

  render(){
    if(this.state.isLogged){
      return <Redirect to='/' />
    }
    return(
      <div className="signIn">
      <h1>Sign In</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="email" placeholder="Adresse Email" onChange={this.handleChange}/>
          <input type="password" name="password" placeholder="Mot de Passe" onChange={this.handleChange}/>
          <input type="submit" value="Envoyer"/>
        </form>
      </div>
    );
  }
};

export default Signin;
