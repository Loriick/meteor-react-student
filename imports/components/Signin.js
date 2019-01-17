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
      <div className="form">
        <h1 className="form-title">Bienvenue sur <span>Meteor School</span></h1>
        <h4 className="form-subtitle">Connectez-vous</h4>
        <form onSubmit={this.handleSubmit} className="form-container">
          <div className="form-input">
             <label>Adresse Email</label>
             <input type="text" name="email" onChange={this.handleChange}/>
          </div>
          <div className="form-input">
             <label>Mot de passe</label>
             <input type="password" name="password" onChange={this.handleChange}/>
          </div>
          <div className="form-footer">
            <a href="#">Mot de passe oublié ?</a>
            <input type="submit" value="Se connecter" className="btn btn-blue"/>
          </div>
        </form>
      </div>
    );
  }
};

export default Signin;
