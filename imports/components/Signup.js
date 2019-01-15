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
    let user = {
      email: data.email,
      password: data.password,
      profile: {
        firstname: data.firstName,
        name: data.name,
        type: data.type
      },
    }

    Accounts.createUser(user);
    
    // console.log(Meteor.users.find().fetch());
    this.setState({isLogged: true});
  }



  render(){
    if(this.state.isLogged){
      return <Redirect to={`/student/${Meteor.userId()}`} />
    }
    return(
      <div className="signUp">
      <h1>Sign Up</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="name" placeholder="Nom" onChange={this.handleChange}/>
          <input type="text" name="firstName" placeholder="Prénom" onChange={this.handleChange}/>
          <input type="email" name="email" placeholder="Adresse Email" onChange={this.handleChange}/>
          <input type="password" name="password" placeholder="Mot de Passe" onChange={this.handleChange}/>
          <select name="type" onChange={this.handleChange}>
            <option value="default">Etes vous ?</option>
            <option value="teacher">Professeur</option>
            <option value="student">Eleves</option>
          </select>
          <input type="submit" value="Envoyer"/>
        </form>
      </div>
    );
  }
};

export default Signup;
