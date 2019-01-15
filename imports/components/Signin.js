import React , {Component} from "react";
import {Redirect} from 'react-router-dom';
class Signin extends Component {
  state= {
    data: {},
  }

  handleChange = e => {
    const data = this.state.data;
    data[e.target.name] = e.target.value;
    this.setState({ data });
  }

  handleSubmit = e => {
    e.preventDefault();
    const data = this.state.data;
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
